import { Notifier } from 'coc-helper';
import { Mutex } from 'coc.nvim';
import type { Explorer } from '../explorer';
import type { BaseTreeNode } from '../source/source';
import { logger } from '../util';
import { RendererSource, rendererSourceSymbol } from './rendererSource';
import type { ViewExplorer } from './viewExplorer';

export const rendererExplorerSymbol = Symbol('rendererExplorer');

export class RendererExplorer {
  private renderMutex = new Mutex();

  constructor(
    private readonly view: ViewExplorer,
    private readonly explorer: Explorer = view.explorer,
  ) {}

  async runQueue<T>(fn: () => Promise<T>): Promise<T> {
    let release = (await this.renderMutex.acquire()) as
      | undefined
      | (() => void);
    setTimeout(() => {
      if (release) {
        release();
        release = undefined;
        logger.error(
          'view.sync timeout, force render, view.sync may cause deadlock due to recursive calls',
        );
      }
    }, 5000);
    try {
      return await fn();
    } finally {
      if (release) {
        release();
        release = undefined;
      }
    }
  }

  rendererSources(): RendererSource<BaseTreeNode<any, string>>[] {
    return this.explorer.sources.map((s) => s.view[rendererSourceSymbol]);
  }

  async renderAllNotifier() {
    const notifiers = await Promise.all(
      this.rendererSources().map((s) => s.renderNotifier({ force: true })),
    );

    return Notifier.combine(notifiers);
  }
}
