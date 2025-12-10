import { cva } from 'class-variance-authority';

export const checkboxWrapperVariants = cva('flex flex-col gap-2');

export const checkboxLabelWrapperVariants = cva('flex items-center', {
  variants: {
    disabled: {
      true: 'cursor-not-allowed opacity-70',
      false: 'cursor-pointer hover:opacity-80',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const checkboxInputVariants = cva(
  [
    'rounded border border-gray-400 outline-none transition',
    'text-primary-600 focus:ring-2 focus:ring-primary-600 focus:ring-offset-1',
    'aria-[invalid=true]:border-red-500',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const checkboxLabelTextVariants = cva('pl-2 block text-neutral-800', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
