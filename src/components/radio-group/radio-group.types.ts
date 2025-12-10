import type { ReactNode } from 'react';
import type { SizeToken } from '@/types/common';

export interface RadioOption {
  label: ReactNode;
  value: string | number;
  disabled?: boolean;
  description?: ReactNode;
}

export type RadioDirection = 'row' | 'column';

export interface RadioGroupProps {
  name?: string;
  label?: string;
  description?: string;
  error?: string;
  options: RadioOption[];

  direction?: RadioDirection;
  size?: SizeToken;
  fullWidth?: boolean;
  className?: string;

  disabled?: boolean;

  value?: RadioOption['value'] | null;
  onChange?: (value: RadioOption['value']) => void;

  defaultValue?: RadioOption['value'] | null;

  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
