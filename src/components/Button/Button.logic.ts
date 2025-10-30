import { cn } from '../../utils/cn';
import type { ButtonProps } from './Button.types';

type IGetButtonClasses = Pick<ButtonProps, 'variant' | 'size' | 'disabled'>;

export function getButtonClasses({
  variant = 'primary',
  size = 'md',
  disabled,
}: IGetButtonClasses) {
  const base =
    'inline-flex items-center justify-center font-medium transition-colors ' +
    'rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ' +
    'cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 ';

  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: [
      'text-white',
      'bg-primary-600',
      'hover:bg-primary-700',
      'focus-visible:ring-primary-300',
      'disabled:bg-primary-300',
    ].join(' '),

    secondary: [
      'bg-white text-neutral-900 border border-neutral-300',
      'hover:border-primary-600 hover:text-primary-700',
      'focus-visible:ring-color-primary-300',
    ].join(' '),
  };

  const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
  };

  return cn(base, variants[variant], sizes[size], disabled && 'opacity-60');
}
