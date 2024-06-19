/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Explorer sources
 */
export type Explorer1 = {
  /**
   * Explorer source name
   */
  name: 'bookmark' | 'buffer' | 'file';
  /**
   * Whether to expand it by default
   */
  expand: boolean;
  [k: string]: unknown | undefined;
}[];
export type Position = 'left' | 'right' | 'tab' | 'floating';
export type MappingActionExp = MappingAction | MappingActionExp[];
export type MappingAction =
  | string
  | {
      name?: string;
      args?: string[];
      [k: string]: unknown | undefined;
    };
/**
 * Strategy for preview action
 */
export type PreviewActionStrategy = 'labeling' | 'content';
export type RootStrategy = 'keep' | 'workspace' | 'cwd' | 'sourceBuffer' | 'reveal';

export interface Explorer {
  /**
   * Explorer presets
   */
  'explorer.presets'?: {
    [k: string]:
      | {
          'root-uri'?: string;
          /**
           * Close the explorer if it exists
           */
          toggle?: boolean;
          /**
           * Focus to explorer when opened
           */
          focus?: boolean;
          /**
           * Strategy for open action
           */
          'open-action-strategy'?:
            | 'select'
            | 'split'
            | 'split.plain'
            | 'split.intelligent'
            | 'vsplit'
            | 'vsplit.plain'
            | 'vsplit.intelligent'
            | 'tab'
            | 'drop.select'
            | 'drop.tab'
            | 'previousBuffer'
            | 'previousWindow'
            | 'sourceWindow';
          /**
           * quit explorer when open action
           */
          'quit-on-open'?: boolean;
          reveal?: string;
          sources?: Explorer1;
          /**
           * Explorer position
           */
          position?: Position | [Position] | [Position, string];
          /**
           * Width of explorer window for open in left or right side
           */
          width?: number;
          /**
           * Content width, use negative value or zero to as `width - value`
           */
          'content-width'?: number;
          /**
           * Type of content width
           */
          'content-width-type'?: 'win-width' | 'vim-width';
          /**
           * Position of Explorer for floating window
           */
          'floating-position'?: ('left-center' | 'right-center' | 'center' | 'center-top') | [number, number];
          /**
           * Width of explorer window when position is floating, use negative value or zero to as `width - value`
           */
          'floating-width'?: number;
          /**
           * Height of explorer window when position is floating, use negative value or zero to as `height - value`
           */
          'floating-height'?: number;
          /**
           * Width of content when position is floating, use negative value or zero to as `width - value`
           */
          'floating-content-width'?: number;
          /**
           * Template for root node of buffer source
           */
          'buffer-root-template'?: string;
          /**
           * Template for child node of buffer source
           */
          'buffer-child-template'?: string;
          /**
           * Labeling template for child node of buffer source, use for preview when previewAction is labeling
           */
          'buffer-child-labeling-template'?: string;
          /**
           * Template for root node of file source
           */
          'file-root-template'?: string;
          /**
           * Labeling template for root node of file source, use for preview when previewAction is labeling
           */
          'file-root-labeling-template'?: string;
          /**
           * Template for child node file source
           */
          'file-child-template'?: string;
          /**
           * Labeling template for child node of file source, use for preview when previewAction is labeling
           */
          'file-child-labeling-template'?: string;
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  /**
   * Mouse mode
   */
  'explorer.mouseMode'?: 'none' | 'singleclick' | 'doubleclick';
  /**
   * Keymapping mode
   */
  'explorer.keyMappingMode'?: 'none' | 'default';
  'explorer.keyMappings.global'?: Mapping;
  'explorer.keyMappings.vmap'?: Mapping1;
  /**
   * Custom key mappings in source
   */
  'explorer.keyMappings.sources'?: {
    [k: string]: Mapping2 | undefined;
  };
  /**
   * Close the explorer if it exists
   */
  'explorer.toggle'?: boolean;
  /**
   * Focus to explorer when opened
   */
  'explorer.focus'?: boolean;
  /**
   * Explorer position
   */
  'explorer.position'?: Position | [Position] | [Position, string];
  /**
   * Width of explorer window for open in left or right side
   */
  'explorer.width'?: number;
  /**
   * Content width, use negative value or zero to as `width - value`
   */
  'explorer.contentWidth'?: number;
  /**
   * Type of content width
   */
  'explorer.contentWidthType'?: 'win-width' | 'vim-width';
  /**
   * Position of Explorer for floating window
   */
  'explorer.floating.position'?: ('left-center' | 'right-center' | 'center' | 'center-top') | [number, number];
  /**
   * Width of explorer window when position is floating, use negative value or zero to as `width - value`
   */
  'explorer.floating.width'?: number;
  /**
   * Height of explorer window when position is floating, use negative value or zero to as `height - value`
   */
  'explorer.floating.height'?: number;
  /**
   * Width of content when position is floating, use negative value or zero to as `width - value`
   */
  'explorer.floating.contentWidth'?: number;
  'explorer.floating.border.enable'?: boolean;
  /**
   * Border chars for floating window, their order is top/right/bottom/left/topleft/topright/botright/botleft
   */
  'explorer.floating.border.chars'?: string[];
  'explorer.floating.border.title'?: string;
  /**
   * Hide floating window, when opening CocList
   */
  'explorer.floating.hideOnCocList'?: boolean;
  /**
   * Automatically expand maximum depth of one time
   */
  'explorer.autoExpandMaxDepth'?: number;
  /**
   * Automatically expand options
   */
  'explorer.autoExpandOptions'?: ('recursive' | 'compact' | 'uncompact' | 'recursiveSingle')[];
  /**
   * Automatically collapse options
   */
  'explorer.autoCollapseOptions'?: 'recursive'[];
  /**
   * quit explorer when open action
   */
  'explorer.quitOnOpen'?: boolean;
  /**
   * Open preview when hovering over on node
   */
  'explorer.previewAction.onHover'?: false | PreviewActionStrategy | [PreviewActionStrategy, number];
  /**
   * Preview content maximum height
   */
  'explorer.previewAction.content.maxHeight'?: number;
  /**
   * Strategy for open action
   */
  'explorer.openAction.strategy'?:
    | 'select'
    | 'split'
    | 'split.plain'
    | 'split.intelligent'
    | 'vsplit'
    | 'vsplit.plain'
    | 'vsplit.intelligent'
    | 'tab'
    | 'drop.select'
    | 'drop.tab'
    | 'previousBuffer'
    | 'previousWindow'
    | 'sourceWindow';
  /**
   * Filter windows for select strategy
   */
  'explorer.openAction.select.filter'?: BufferFilter & {
    /**
     * Filter windows for select strategy in source
     */
    sources?: {
      [k: string]: BufferFilter;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Chars for select strategy
   */
  'explorer.openAction.select.chars'?: string;
  /**
   * The action when you open a directory of file source
   */
  'explorer.openAction.for.directory'?: MappingAction | MappingActionExp[];
  /**
   * Use relative path when open a file with openAction
   */
  'explorer.openAction.relativePath'?: boolean;
  /**
   * The expand stores of sources
   */
  'explorer.expandStores'?:
    | boolean
    | {
        includes: string[];
      }
    | {
        excludes: string[];
      };
  'explorer.sources'?: Explorer1;
  /**
   * Strategies for root uri
   */
  'explorer.root.strategies'?: (RootStrategy | string)[];
  /**
   * Patterns for root uri
   */
  'explorer.root.customRules'?: {
    [k: string]:
      | {
          patterns: string[];
          /**
           * Search outward from the current buffer, default is false
           */
          bottomUp?: boolean;
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  /**
   * Enable integrated with coc-floatinput
   */
  'explorer.enableFloatinput'?: boolean;
  /**
   * Enable nerdfont
   */
  'explorer.icon.enableNerdfont'?: boolean;
  /**
   * The source or file type icon and color
   */
  'explorer.icon.source'?: 'builtin' | 'vim-devicons' | 'nvim-web-devicons' | 'nerdfont.vim';
  /**
   * Custom icons and color highlights
   */
  'explorer.icon.customIcons'?: {
    /**
     * Icons for extension groups
     */
    icons?: {
      /**
       * Icon for an extension group
       */
      [k: string]:
        | {
            /**
             * Group icon
             */
            code: string;
            /**
             * Group icon color
             */
            color: string;
            [k: string]: unknown | undefined;
          }
        | undefined;
    };
    /**
     * File extension to icon group
     */
    extensions?: {
      [k: string]: unknown | undefined;
    };
    /**
     * Filename to icon group
     */
    filenames?: {
      [k: string]: unknown | undefined;
    };
    /**
     * Filename to icon group
     */
    dirnames?: {
      [k: string]: unknown | undefined;
    };
    /**
     * Pattern to icon group
     */
    patternMatches?: {
      [k: string]: unknown | undefined;
    };
    /**
     * Pattern to icon group
     */
    dirPatternMatches?: {
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Icon for expanded node
   */
  'explorer.icon.expanded'?: string;
  /**
   * Icon for collapsed node
   */
  'explorer.icon.collapsed'?: string;
  /**
   * Selection selected chars for File source
   */
  'explorer.icon.selected'?: string;
  /**
   * Icon for hidden status
   */
  'explorer.icon.hidden'?: string;
  /**
   * Icon for soft link
   */
  'explorer.icon.link'?: string;
  /**
   * Icon for readonly
   */
  'explorer.icon.readonly'?: string;
  /**
   * Template for root node of bookmark source
   */
  'explorer.bookmark.root.template'?: string;
  /**
   * Template for child node of bookmark source
   */
  'explorer.bookmark.child.template'?: string;
  /**
   * Labeling template for child node of bookmark source, use for preview when previewAction is labeling
   */
  'explorer.bookmark.child.labelingTemplate'?: string;
  /**
   * Default show hidden buffers
   */
  'explorer.buffer.showHiddenBuffers'?: boolean;
  /**
   * Default only show buffers in current tab
   */
  'explorer.buffer.tabOnly'?: boolean;
  /**
   * Template for root node of buffer source
   */
  'explorer.buffer.root.template'?: string;
  /**
   * Template for child node of buffer source
   */
  'explorer.buffer.child.template'?: string;
  /**
   * Labeling template for child node of buffer source, use for preview when previewAction is labeling
   */
  'explorer.buffer.child.labelingTemplate'?: string;
  /**
   * Explorer datetime format, check out https://date-fns.org/v2.9.0/docs/format
   */
  'explorer.datetime.format'?: string;
  /**
   * Explorer will automatically reveal to the current buffer when open explorer
   */
  'explorer.file.reveal.whenOpen'?: boolean;
  /**
   * Explorer will automatically reveal to the current buffer when enter a buffer
   */
  'explorer.file.reveal.auto'?: boolean;
  /**
   * Exlorer will not automatically reveal to these buffers
   */
  'explorer.file.reveal.filter'?: {
    /**
     * Filter buffer by RegExp
     */
    patterns?: string[];
    /**
     * Filter buffer by literal string
     */
    literals?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   * Custom hidden rules for file
   */
  'explorer.file.hiddenRules'?: {
    extensions?: string[];
    filenames?: string[];
    /**
     * Pattern to icon group
     */
    patternMatches?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * Default show hidden files
   */
  'explorer.file.showHiddenFiles'?: boolean;
  /**
   * Template for root node of file source
   */
  'explorer.file.root.template'?: string;
  /**
   * Labeling template for root node of file source, use for preview when previewAction is labeling
   */
  'explorer.file.root.labelingTemplate'?: string;
  /**
   * Template for child node file source
   */
  'explorer.file.child.template'?: string;
  /**
   * Labeling template for child node of file source, use for preview when previewAction is labeling
   */
  'explorer.file.child.labelingTemplate'?: string;
  /**
   * Whether the file has been copied
   */
  'explorer.file.column.link.copy'?: string;
  /**
   * Whether the file has been copied
   */
  'explorer.file.column.clip.copy'?: string;
  /**
   * Whether the file has been cut
   */
  'explorer.file.column.clip.cut'?: string;
  /**
   * Indent chars for file source
   */
  'explorer.file.column.indent.chars'?: string;
  /**
   * Whether to display the alignment line
   */
  'explorer.file.column.indent.indentLine'?: boolean;
  /**
   * Change directory when performing the cd action
   */
  'explorer.file.cdCommand'?: false | 'cd' | 'tcd';
  /**
   * Enable colored filenames based on status
   */
  'explorer.filename.colored.enable'?:
    | boolean
    | {
        diagnosticError?: boolean;
        diagnosticWarning?: boolean;
        git?: boolean;
        [k: string]: unknown | undefined;
      };
  /**
   * Show untracked file in git
   */
  'explorer.file.git.showUntrackedFiles'?: boolean | 'system';
  /**
   * Trash command template, arguments(%s source filepath, %l source filepath list), example: 'trash-put %l', 'mv --backup=t %l ~/.trash/'
   */
  'explorer.trash.command'?: ('nodejs:module' | 'trash-put %s') | string;
  /**
   * Maximum count of diagnostic column
   */
  'explorer.diagnostic.displayMax'?: number;
  /**
   * Subscript number for diagnostic count
   */
  'explorer.diagnostic.enableSubscriptNumber'?: boolean;
  /**
   * Enable git
   */
  'explorer.git.enable'?: boolean;
  /**
   * Git command
   */
  'explorer.git.command'?: string;
  /**
   * Icon for a stash exists for the local repository
   */
  'explorer.git.icon.rootStatus.stashed'?: string;
  /**
   * Icon for current branch ahead of upstream
   */
  'explorer.git.icon.rootStatus.ahead'?: string;
  /**
   * Icon for current branch behind upstream
   */
  'explorer.git.icon.rootStatus.behind'?: string;
  /**
   * Icon for current branch has merge conflicts
   */
  'explorer.git.icon.rootStatus.conflicted'?: string;
  /**
   * Icon for there are untracked files in the working directory
   */
  'explorer.git.icon.rootStatus.untracked'?: string;
  /**
   * Icon for there are file modifications in the working directory
   */
  'explorer.git.icon.rootStatus.modified'?: string;
  /**
   * Icon for a new file has been added to the staging area
   */
  'explorer.git.icon.rootStatus.added'?: string;
  /**
   * Icon for a renamed file has been added to the staging area
   */
  'explorer.git.icon.rootStatus.renamed'?: string;
  /**
   * Icon for a file's deletion has been added to the staging area
   */
  'explorer.git.icon.rootStatus.deleted'?: string;
  /**
   * Icon for git mixed status
   */
  'explorer.git.icon.status.mixed'?: string;
  /**
   * Icon for git unmodified status
   */
  'explorer.git.icon.status.unmodified'?: string;
  /**
   * Icon for git modified status
   */
  'explorer.git.icon.status.modified'?: string;
  /**
   * Icon for git added status
   */
  'explorer.git.icon.status.added'?: string;
  /**
   * Icon for git removed status
   */
  'explorer.git.icon.status.deleted'?: string;
  /**
   * Icon for git renamed status
   */
  'explorer.git.icon.status.renamed'?: string;
  /**
   * Icon for git copied status
   */
  'explorer.git.icon.status.copied'?: string;
  /**
   * Icon for git unmerged status
   */
  'explorer.git.icon.status.unmerged'?: string;
  /**
   * Icon for git untracked status
   */
  'explorer.git.icon.status.untracked'?: string;
  /**
   * Icon for git ignored status
   */
  'explorer.git.icon.status.ignored'?: string;
  /**
   * Show ignored files in git
   */
  'explorer.git.showIgnored'?: boolean;
  /**
   * Enable debug
   */
  'explorer.debug'?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Custom global key mappings
 */
export interface Mapping {
  [k: string]: (MappingActionExp | false) | undefined;
}
/**
 * Custom vmap key mappings
 */
export interface Mapping1 {
  [k: string]: (MappingActionExp | false) | undefined;
}
export interface Mapping2 {
  [k: string]: (MappingActionExp | false) | undefined;
}
/**
 * Filter windows option for select strategy
 */
export interface BufferFilter {
  buftypes?: string[];
  filetypes?: string[];
  floatingWindows?: boolean;
  [k: string]: unknown | undefined;
}
