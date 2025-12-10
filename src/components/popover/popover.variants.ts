import { cva } from 'class-variance-authority';

export const popoverContainerVariants = cva('relative inline-block');

export const popoverTriggerVariants = cva('cursor-pointer');

export const popoverContentVariants = cva(
  'absolute z-50 w-72 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in fade-in zoom-in-95 duration-200 mt-2'
);
