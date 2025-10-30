import type { InputHTMLAttributes } from 'react';
import type { SizeToken } from '../../types/common';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: SizeToken;
  label?: string;
  description?: string;
  error?: string;
  fullWidth?: boolean;
}
