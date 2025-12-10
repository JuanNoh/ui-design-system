import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary/90',
        destructive: 'bg-error text-error-foreground hover:bg-error/90',
        outline:
          'border border-input bg-background hover:bg-muted hover:text-muted-foreground',
        secondary:
          'bg-brand-accent text-brand-accent-foreground hover:bg-brand-accent/80',
        ghost: 'hover:bg-muted hover:text-muted-foreground',
        link: 'text-brand-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
