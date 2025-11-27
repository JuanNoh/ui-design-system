import { cn } from '../../utils/cn';
import type { SelectProps } from './Select.types';

type SelectClassProps = Pick<SelectProps, 'size' | 'disabled'>;

export function getSelectTriggerClasses({ size = 'md' }: SelectClassProps) {
  const base =
    'w-full inline-flex items-center justify-between rounded border border-gray-300 outline-none transition ' +
    'bg-white text-neutral-900 placeholder:text-neutral-400 ' +
    'hover:border-primary-600 focus-visible:border-primary-600 focus-visible:ring-2 focus-visible:ring-primary-100';

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

export function getSelectOptionClasses({
  isSelected,
  disabled,
}: {
  isSelected: boolean;
  disabled?: boolean;
}) {
  const base =
    'flex w-full items-center gap-2 rounded px-3 py-2 text-sm text-left text-neutral-800 cursor-pointer';

  const hover = 'hover:bg-primary-50';
  const selected = 'bg-primary-50 text-primary-700 font-medium';
  const disabledCls = 'cursor-not-allowed opacity-60';

  return cn(base, hover, isSelected && selected, disabled && disabledCls);
}
