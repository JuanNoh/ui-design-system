import { cva } from 'class-variance-authority';

export const selectTriggerVariants = cva(
  'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 focus:ring-0 focus:ring-offset-0 ring-0 outline-none',
  {
    variants: {},
    defaultVariants: {},
  }
);

export const selectContentVariants = cva(
  'absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md transition-all animate-in fade-in-0 zoom-in-95',
  {
    variants: {},
    defaultVariants: {},
  }
);

export const selectItemVariants = cva(
  'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  {
    variants: {},
    defaultVariants: {},
  }
);

export const selectLabelVariants = cva(
  'py-1.5 pl-8 pr-2 text-sm font-semibold'
);

export const selectSeparatorVariants = cva('-mx-1 my-1 h-px bg-muted');
