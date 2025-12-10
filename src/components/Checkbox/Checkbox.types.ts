import type { InputHTMLAttributes } from 'react';
import type { SizeToken } from '@/types/common';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: SizeToken;
  label?: string;
  error?: string;
  wrapperClassName?: string;
}
