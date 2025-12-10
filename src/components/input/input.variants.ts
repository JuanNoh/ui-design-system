import { cva } from 'class-variance-authority';

export const getInputClasses = cva(
  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-primary focus-visible:border-brand-primary disabled:cursor-not-allowed disabled:opacity-50 hover:border-brand-primary transition-colors shadow-sm',
  {
    variants: {
      size: {
        default: 'h-10 px-3 py-2',
        md: 'h-10 px-3 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-4',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);
