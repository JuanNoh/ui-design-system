import type { ButtonHTMLAttributes } from 'react';
import type { SizeToken, VariantToken } from '../../types/common';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  variant?: VariantToken;
  size?: SizeToken;
  isLoading?: boolean;
}
