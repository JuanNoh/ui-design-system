import { cva } from 'class-variance-authority';

export const stepperVariants = cva('w-full');

export const stepperContainerVariants = cva('relative flex justify-between');

export const stepperLineContainerVariants = cva(
  'absolute top-4 left-0 w-full h-0.5 bg-muted -z-10'
);

export const stepperLineProgressVariants = cva(
  'h-full bg-brand-primary transition-all duration-300 ease-in-out'
);

export const stepperItemVariants = cva('flex flex-col items-center');

export const stepperCircleVariants = cva(
  'w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors duration-300 bg-background',
  {
    variants: {
      state: {
        completed:
          'bg-brand-primary border-brand-primary text-primary-foreground',
        current: 'border-brand-primary text-brand-primary',
        pending: 'border-muted text-muted-foreground',
      },
    },
    defaultVariants: {
      state: 'pending',
    },
  }
);

export const stepperLabelVariants = cva('text-sm font-medium', {
  variants: {
    state: {
      active: 'text-foreground',
      inactive: 'text-muted-foreground',
    },
  },
  defaultVariants: {
    state: 'inactive',
  },
});

export const stepperDescriptionVariants = cva(
  'text-xs text-muted-foreground mt-0.5'
);
