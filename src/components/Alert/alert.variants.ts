import { cva } from 'class-variance-authority';

export const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground border-border/50',
        info: [
          'bg-blue-50 border-blue-200',
          '[&>svg]:text-blue-500',
          '[&_h5]:text-blue-800',
          '[&_div]:text-blue-700',

          'dark:bg-blue-950/30 dark:border-blue-800',
          'dark:[&>svg]:text-blue-400',
          'dark:[&_h5]:text-blue-300',
          'dark:[&_div]:text-blue-400',
        ].join(' '),
        success: [
          'bg-green-50 border-green-200',
          '[&>svg]:text-green-500',
          '[&_h5]:text-green-800',
          '[&_div]:text-green-700',

          'dark:bg-green-950/30 dark:border-green-800',
          'dark:[&>svg]:text-green-400',
          'dark:[&_h5]:text-green-300',
          'dark:[&_div]:text-green-400',
        ].join(' '),
        warning: [
          'bg-yellow-50 border-yellow-200',
          '[&>svg]:text-yellow-500',
          '[&_h5]:text-yellow-800',
          '[&_div]:text-yellow-700',

          'dark:bg-yellow-950/30 dark:border-yellow-800',
          'dark:[&>svg]:text-yellow-400',
          'dark:[&_h5]:text-yellow-300',
          'dark:[&_div]:text-yellow-400',
        ].join(' '),
        destructive: [
          'bg-red-50 border-red-200',
          '[&>svg]:text-red-500',
          '[&_h5]:text-red-800',
          '[&_div]:text-red-700',

          'dark:bg-red-950/30 dark:border-red-800',
          'dark:[&>svg]:text-red-400',
          'dark:[&_h5]:text-red-300',
          'dark:[&_div]:text-red-400',
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
