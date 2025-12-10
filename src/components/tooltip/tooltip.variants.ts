import { cva } from 'class-variance-authority';

export const tooltipContainerVariants = cva('relative inline-block');

export const tooltipContentVariants = cva(
  'absolute z-50 px-3 py-1.5 text-xs font-medium text-popover-foreground bg-popover rounded-md shadow-md border border-border bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap animate-in fade-in zoom-in-95 duration-200'
);

export const tooltipArrowVariants = cva(
  'absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-popover'
);
