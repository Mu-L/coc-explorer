import { bufferColumnRegistrar } from '../bufferColumnRegistrar';
import { bufferHighlights } from '../bufferSource';

bufferColumnRegistrar.registerColumn('root', 'icon', ({ source }) => ({
  draw() {
    return {
      drawNode(row, { node }) {
        row.add(
          source.view.isExpanded(node)
            ? source.icons.expanded
            : source.icons.collapsed,
          { hl: bufferHighlights.expandIcon },
        );
      },
    };
  },
}));
