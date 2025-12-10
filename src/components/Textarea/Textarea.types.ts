import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { textareaVariants } from './textarea.variants';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string;
  description?: string;
  error?: string;
  fullWidth?: boolean;
}
