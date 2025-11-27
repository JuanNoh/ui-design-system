import type { ReactNode, ButtonHTMLAttributes } from 'react';
import type { SizeToken } from '../../types/common';

export interface SelectOption {
  label: ReactNode;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'onChange' | 'value' | 'defaultValue' | 'size'
  > {
  id?: string;
  label?: string;
  description?: string;
  error?: string;
  size?: SizeToken;
  fullWidth?: boolean;
  placeholder?: string;
  disabled?: boolean;
  options: SelectOption[];

  value?: SelectOption['value'] | null;
  onChange?: (value: SelectOption['value'] | null) => void;

  defaultValue?: SelectOption['value'] | null;

  className?: string;
  name?: string;
}
