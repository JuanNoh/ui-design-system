import { cva } from 'class-variance-authority';

export const toastListVariants = cva(
  'fixed z-[100] flex flex-col gap-3 p-4 pointer-events-none w-full max-w-sm',
  {
    variants: {
      position: {
        'top-right': 'top-0 right-0 items-end',
        'top-left': 'top-0 left-0 items-start',
        'bottom-right': 'bottom-0 right-0 items-end',
        'bottom-left': 'bottom-0 left-0 items-start',
      },
    },
    defaultVariants: {
      position: 'bottom-right',
    },
  }
);

export const toastItemVariants = cva(
  'pointer-events-auto relative flex w-full items-start gap-3 rounded-xl border p-4 shadow-lg transition-all duration-300 ease-out overflow-hidden data-[state=open]:animate-in data-[state=open]:slide-in-from-right-full data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-right-full',
  {
    variants: {
      variant: {
        default: 'bg-white border-neutral-200 text-neutral-900',
        success: 'bg-white border-green-200 text-neutral-900',
        error: 'bg-white border-red-200 text-neutral-900',
        warning: 'bg-white border-amber-200 text-neutral-900',
        info: 'bg-white border-blue-200 text-neutral-900',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const toastIconVariants = cva('mt-0.5 h-5 w-5 shrink-0', {
  variants: {
    variant: {
      default: 'text-neutral-500',
      success: 'text-green-600',
      error: 'text-red-600',
      warning: 'text-amber-500',
      info: 'text-blue-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
