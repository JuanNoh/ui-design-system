import { cva } from 'class-variance-authority';

export const radioGroupVariants = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row flex-wrap gap-4',
      column: 'flex-col gap-2',
    },
  },
  defaultVariants: {
    direction: 'column',
  },
});

export const radioOuterVariants = cva(
  'inline-flex items-center justify-center rounded-full border bg-white transition-colors border-neutral-300',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
      checked: {
        true: 'border-primary-600',
        false: '',
      },
      disabled: {
        true: 'border-neutral-300 bg-neutral-100 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      checked: false,
      disabled: false,
    },
  }
);

export const radioInnerVariants = cva('rounded-full', {
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
    },
    checked: {
      true: '',
      false: 'hidden',
    },
    disabled: {
      true: 'bg-neutral-400',
      false: 'bg-primary-600',
    },
  },
  compoundVariants: [
    { checked: true, size: 'sm', class: 'h-2 w-2' },
    { checked: true, size: 'md', class: 'h-2.5 w-2.5' },
    { checked: true, size: 'lg', class: 'h-3 w-3' },
  ],
  defaultVariants: {
    checked: false,
    size: 'md',
    disabled: false,
  },
});

export const radioLabelVariants = cva('text-sm', {
  variants: {
    disabled: {
      true: 'text-neutral-400 cursor-not-allowed',
      false: 'text-neutral-800',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const radioDescriptionVariants = cva('text-xs', {
  variants: {
    disabled: {
      true: 'text-neutral-300',
      false: 'text-neutral-500',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});
