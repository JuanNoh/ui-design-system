import { cva } from 'class-variance-authority';

export const drawerOverlayVariants = cva(
  'fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300',
  {
    variants: {
      isOpen: {
        true: 'opacity-100',
        false: 'opacity-0 pointer-events-none',
      },
    },
    defaultVariants: {
      isOpen: false,
    },
  }
);

export const drawerContentVariants = cva(
  'fixed z-50 h-full bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out w-3/4 sm:w-[400px]',
  {
    variants: {
      position: {
        left: 'left-0 top-0 border-r border-border',
        right: 'right-0 top-0 border-l border-border',
      },
      isOpen: {
        true: 'translate-x-0',
        false: '',
      },
    },
    compoundVariants: [
      {
        position: 'left',
        isOpen: false,
        className: '-translate-x-full',
      },
      {
        position: 'right',
        isOpen: false,
        className: 'translate-x-full',
      },
    ],
    defaultVariants: {
      position: 'right',
      isOpen: false,
    },
  }
);

export const drawerHeaderVariants = cva(
  'flex items-center justify-between mb-6'
);

export const drawerBodyVariants = cva('overflow-y-auto h-[calc(100%-4rem)]');
