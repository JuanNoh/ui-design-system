import type { TextareaHTMLAttributes } from 'react';
import type { SizeToken } from '../../types/common';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: SizeToken;
  label?: string;
  description?: string;
  error?: string;
  fullWidth?: boolean;
}
