import { cn } from '../../utils/cn';
import type { TextareaProps } from './Textarea.types';

export function getTextareaWrapperClasses({
  fullWidth,
}: Pick<TextareaProps, 'fullWidth'>) {
  return cn('flex flex-col gap-1.5', fullWidth && 'w-full');
}

export function getLabelClasses(disabled?: boolean) {
  return cn(
    'text-sm font-medium',
    disabled ? 'text-neutral-400 cursor-not-allowed' : 'text-neutral-800'
  );
}

export function getTextareaClasses({
  size = 'md',
}: {
  size?: TextareaProps['size'];
  disabled?: boolean;
  error?: string;
}) {
  const base =
    'w-full rounded border border-gray-300 outline-none transition ' +
    'bg-white text-neutral-900 placeholder:text-neutral-400 ' +
    'min-h-24 resize-y ' +
    'hover:border-primary-600 focus:border-primary-600';

  const invalid =
    'aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus-visible:ring-red-600';
  const disabledCls =
    'disabled:cursor-not-allowed disabled:opacity-60 disabled:bg-neutral-200';

  const sizeMap: Record<string, string> = {
    sm: 'text-xs px-3 py-3',
    md: 'text-sm px-3.5 py-3',
    lg: 'text-base px-4 py-3.5',
  };

  return cn(base, sizeMap[size], disabledCls, invalid);
}
