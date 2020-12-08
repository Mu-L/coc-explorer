import fs from 'fs';
import makeDir from 'make-dir';
import pathLib from 'path';
import readline from 'readline';
import rimraf from 'rimraf';
import trash from 'trash';
import { promisify } from 'util';
import { input, prompt } from '.';
import { execCmd } from './cli';
import { isWindows } from './platform';
import { trashCmd } from './trash';

export const fsOpen = promisify(fs.open);
export const fsClose = promisify(fs.close);
export const fsTouch = async (path: string) =>
  await fsClose(await fsOpen(path, 'w'));
export const fsMkdirp = makeDir;
export const fsReaddir = promisify(fs.readdir);
export const fsReadlink = promisify(fs.readlink);
export const fsAccess = (path: string, mode?: number) =>
  new Promise<boolean>((resolve) => {
    fs.access(path, mode, (err) => {
      err ? resolve(false) : resolve(true);
    });
  });
export const fsWriteFile = promisify(fs.writeFile);
export const fsReadFile = promisify(fs.readFile);
export const fsExists = fsAccess;
export const fsStat = promisify(fs.stat);
export const fsLstat = promisify(fs.lstat);
export const fsCopyFile = promisify(fs.copyFile);
export const fsRename = promisify(fs.rename);
export const fsRimraf = promisify(rimraf);

export const fsTrash = async (paths: string | string[]) => {
  await trashCmd.exec(typeof paths === 'string' ? [paths] : paths);
};

export const nodejsModuleTrash = (paths: string | string[]) =>
  trash(paths, { glob: false });

export async function fsCopyFileRecursive(
  sourcePath: string,
  targetPath: string,
) {
  const lstat = await fsLstat(sourcePath);
  if (lstat.isDirectory()) {
    await fsMkdirp(targetPath);
    const filenames = await fsReaddir(sourcePath);
    for (const filename of filenames) {
      await fsCopyFileRecursive(
        pathLib.join(sourcePath, filename),
        pathLib.join(targetPath, filename),
      );
    }
  } else {
    await fsCopyFile(sourcePath, targetPath);
  }
}

export async function fsMergeDirectory(
  sourceDir: string,
  targetDir: string,
  action: (source: string, target: string) => Promise<void>,
) {
  const filenames = await fsReaddir(sourceDir);
  for (const filename of filenames) {
    const sourcePath = pathLib.join(sourceDir, filename);
    const targetPath = pathLib.join(targetDir, filename);
    if (await fsExists(targetPath)) {
      const sourceLstat = await fsLstat(sourcePath);
      const targetLstat = await fsLstat(targetPath);
      if (sourceLstat.isDirectory() && targetLstat.isDirectory()) {
        await fsMergeDirectory(sourcePath, targetPath, action);
      } else {
        await fsTrash(targetPath);
        await action(sourcePath, targetPath);
      }
    } else {
      await action(sourcePath, targetPath);
    }
  }
}

export async function overwritePrompt<S extends string | undefined>(
  promptText: string,
  paths: { source: S; target: string }[],
  action: (source: S, target: string) => Promise<void>,
) {
  const finalAction = async (source: string | undefined, target: string) => {
    await fsMkdirp(pathLib.dirname(target));
    await action(source as S, target);
  };
  for (let i = 0, len = paths.length; i < len; i++) {
    const sourcePath = paths[i].source;
    const targetPath = paths[i].target;

    if (!(await fsExists(targetPath))) {
      await finalAction(sourcePath, targetPath);
      continue;
    }

    const sourceLstat =
      typeof sourcePath === 'string' ? await fsLstat(sourcePath) : undefined;
    const targetLstat = await fsLstat(targetPath);

    async function rename() {
      const newTargetPath = await input(
        `Rename: ${targetPath} ->`,
        targetPath,
        'file',
      );
      if (!newTargetPath) {
        i -= 1;
        return;
      }
      return finalAction(sourcePath, newTargetPath);
    }
    async function replace() {
      await fsTrash(targetPath);
      return finalAction(sourcePath, targetPath);
    }
    function quit() {
      i = len;
      return;
    }
    async function prompt_(
      choices: Record<string, undefined | (() => void | Promise<void>)> = {},
    ) {
      choices = {
        skip: undefined,
        rename,
        'force replace': replace,
        ...choices,
        quit,
      };
      const answer = await prompt(
        `${promptText[0].toUpperCase()}${promptText.slice(
          1,
        )}: ${targetPath} already exists.`,
        Object.keys(choices),
      );
      if (answer && answer in choices) {
        return choices[answer]?.();
      }
    }

    if (sourcePath && sourceLstat?.isDirectory()) {
      if (targetLstat.isDirectory()) {
        await prompt_({
          merge: () => fsMergeDirectory(sourcePath!, targetPath, finalAction),
          'one by one': async () => {
            const files = await fsReaddir(sourcePath!);
            const paths = files.map((source) => ({
              source: source as S,
              target: pathLib.join(targetPath, pathLib.basename(source)),
            }));
            await overwritePrompt(promptText, paths, action);
          },
        });
      } else {
        await prompt_();
      }
    } else {
      if (targetLstat.isDirectory()) {
        await prompt_();
      } else {
        await prompt_();
      }
    }
  }
}

export function readFileLines(
  fullpath: string,
  start: number,
  end: number,
): Promise<string[]> {
  if (!fs.existsSync(fullpath)) {
    return Promise.reject(new Error(`file does not exist: ${fullpath}`));
  }
  const res: string[] = [];
  const stream = fs.createReadStream(fullpath, { encoding: 'utf8' });
  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
    terminal: false,
  });
  let n = 0;
  return new Promise((resolve, reject) => {
    stream.on('error', reject);
    rl.on('line', (line) => {
      if (n === 0 && line.startsWith('\uFEFF')) {
        // handle BOM
        line = line.slice(1);
      }
      if (n >= start && n <= end) {
        res.push(line);
      }
      if (n === end) {
        rl.close();
      }
      n = n + 1;
    });
    rl.on('close', () => {
      resolve(res);
    });
    rl.on('error', reject);
  });
}

export async function listDrive(): Promise<string[]> {
  if (isWindows) {
    const content = await execCmd('wmic', ['logicaldisk', 'get', 'name']);
    const list = content
      .split('\n')
      .map((d) => d.trim())
      .filter((d) => d.endsWith(':'))
      .map((d) => d + '\\');
    return list;
  } else {
    throw new Error('not support listDrive in ' + process.platform);
  }
}
