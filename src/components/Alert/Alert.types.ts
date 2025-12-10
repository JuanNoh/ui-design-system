import { type HTMLAttributes } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { alertVariants } from './alert.variants';

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  showIcon?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
}
