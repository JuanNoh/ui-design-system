import { cn } from '../../utils/cn';
import type { InputProps } from './Input.types';

type InputClassProps = Pick<InputProps, 'size' | 'disabled'>;

export function getInputClasses({ size = 'md' }: InputClassProps) {
  const base =
    'w-full rounded border border-gray-300 outline-none transition ' +
    'bg-white text-neutral-900 placeholder:text-neutral-400' +
    'hover:border-primary-600 focus:border-primary-600';

  const invalid =
    'aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus-visible:ring-red-600';
  const disabledCls =
    'disabled:cursor-not-allowed disabled:opacity-60 disabled:bg-neutral-200';

  const sizeMap: Record<string, string> = {
    sm: 'text-xs h-9 px-3',
    md: 'text-sm h-10 px-3.5',
    lg: 'text-base h-11 px-4',
  };

  return cn(base, sizeMap[size], disabledCls, invalid);
}
