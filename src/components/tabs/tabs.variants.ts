import { cva } from 'class-variance-authority';

export const tabListVariants = cva('inline-flex items-center justify-center', {
  variants: {
    variant: {
      solid: 'rounded-lg bg-neutral-100/80 p-1 text-neutral-500',
      underline:
        'border-b border-neutral-200 bg-transparent w-full justify-start',
    },
    fullWidth: {
      true: '',
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      fullWidth: true,
      class: 'w-full',
    },
  ],
  defaultVariants: {
    variant: 'underline',
    fullWidth: false,
  },
});

export const tabTriggerVariants = cva(
  'relative inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all duration-200 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        solid: '',
        underline: 'rounded-none border-b-2 border-transparent px-4 py-3',
      },
      size: {
        sm: '',
        md: '',
        lg: '',
      },
      fullWidth: {
        true: 'flex-1',
      },
      isActive: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      // Solid Variants
      {
        variant: 'solid',
        size: 'sm',
        class: 'px-3 py-1 text-xs',
      },
      {
        variant: 'solid',
        size: 'md',
        class: 'px-4 py-1.5 text-sm',
      },
      {
        variant: 'solid',
        size: 'lg',
        class: 'px-6 py-2.5 text-base',
      },
      {
        variant: 'solid',
        isActive: false,
        class: 'text-neutral-500 hover:text-neutral-900',
      },
      {
        variant: 'solid',
        isActive: true,
        class: 'bg-white text-neutral-950 shadow-sm shadow-black/5',
      },

      // Underline Variants
      {
        variant: 'underline',
        size: 'sm',
        class: 'py-2 text-xs',
      },
      {
        variant: 'underline',
        size: 'lg',
        class: 'py-4 text-base',
      },
      {
        variant: 'underline',
        isActive: false,
        class:
          'text-neutral-500 hover:text-neutral-800 hover:border-neutral-300',
      },
      {
        variant: 'underline',
        isActive: true,
        class: 'border-primary-600 text-primary-600',
      },
    ],
    defaultVariants: {
      variant: 'underline',
      size: 'md',
      isActive: false,
    },
  }
);

export const tabPanelVariants = cva(
  'mt-4 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 text-neutral-800 animate-in fade-in-50 duration-300 slide-in-from-bottom-1'
);
