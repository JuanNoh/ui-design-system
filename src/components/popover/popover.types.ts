import type { ReactNode, HTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { popoverContentVariants } from './popover.variants';

export interface PopoverProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'content'>,
    VariantProps<typeof popoverContentVariants> {
  trigger: ReactNode;
  content: ReactNode;
}
