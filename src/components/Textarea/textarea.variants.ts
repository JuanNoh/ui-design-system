import { cva } from 'class-variance-authority';

export const textareaVariants = cva(
  [
    'flex w-full rounded-md border border-input bg-background',
    'ring-offset-background placeholder:text-muted-foreground',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-primary focus-visible:border-brand-primary',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'hover:border-brand-primary',
    'transition-colors shadow-sm',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'min-h-[72px] px-2.5 py-1.5 text-xs',
        md: 'min-h-[80px] px-3 py-2 text-sm',
        lg: 'min-h-[96px] px-3.5 py-2.5 text-base',
      },
      invalid: {
        true: 'border-red-500 focus-visible:ring-red-500',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      invalid: false,
    },
  }
);
