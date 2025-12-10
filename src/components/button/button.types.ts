import type { ButtonHTMLAttributes } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { buttonVariants } from './button.variants';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}
