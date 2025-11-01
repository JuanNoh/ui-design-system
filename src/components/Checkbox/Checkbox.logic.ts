import { cn } from '../../utils/cn';
import type { CheckboxProps } from './Checkbox.types';

export function getWrapperClasses() {
  return cn('flex flex-col gap-2');
}

export function getLabelWrapperClasses(disabled?: boolean) {
  return cn(
    'flex items-center',
    disabled
      ? 'cursor-not-allowed opacity-70'
      : 'cursor-pointer hover:opacity-80'
  );
}

export function getCheckboxClasses({
  size = 'md',
}: {
  size?: CheckboxProps['size'];
}) {
  const base =
    'rounded border border-gray-400 outline-none transition ' +
    'text-primary-600 focus:ring-2 focus:ring-primary-600 focus:ring-offset-1';

  const invalid = 'aria-[invalid=true]:border-red-500';

  const sizeMap: Record<string, string> = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  return cn(base, sizeMap[size], invalid);
}

export function getLabelTextClasses({ size = 'md' }: { size?: string }) {
  const base = 'pl-2 display-block text-neutral-800';

  const sizeMap: Record<string, string> = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return cn(base, sizeMap[size]);
}
