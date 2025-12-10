import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { getInputClasses } from './input.variants';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof getInputClasses> {
  label?: string;
  description?: string;
  error?: string;
  fullWidth?: boolean;
  size?: 'default' | 'sm' | 'lg' | 'md';
}
