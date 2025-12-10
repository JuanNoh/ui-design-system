import { cn } from '@/utils/cn.ts';
import type { SwitchProps } from './switch.types';

export function getWrapperClasses() {
  return cn('flex flex-col gap-1.5');
}

export function getLabelWrapperClasses(disabled?: boolean) {
  return cn(
    'inline-flex items-center gap-2.5',
    disabled
      ? 'cursor-not-allowed opacity-70'
      : 'cursor-pointer hover:opacity-80'
  );
}

export function getSwitchToggleClasses({
  size = 'md',
  checked,
  disabled,
}: {
  size?: SwitchProps['size'];
  checked?: boolean;
  disabled?: boolean;
}) {
  const base =
    'relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent ' +
    'transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2';

  const checkedBg = 'bg-primary-600';
  const uncheckedBg = 'bg-gray-200';
  const disabledBg = 'bg-gray-300';

  const sizeMap: Record<string, string> = {
    sm: 'h-4 w-7',
    md: 'h-5 w-9',
    lg: 'h-6 w-11',
  };

  const backgroundColor = disabled
    ? disabledBg
    : checked
      ? checkedBg
      : uncheckedBg;

  return cn(base, sizeMap[size], backgroundColor);
}

export function getSwitchIndicatorClasses({
  size = 'md',
  checked,
}: {
  size?: SwitchProps['size'];
  checked?: boolean;
}) {
  const base =
    'pointer-events-none inline-block transform rounded-full bg-white shadow ring-0 ' +
    'transition duration-200 ease-in-out';

  const sizeMap: Record<string, string> = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  const translateMap: Record<string, string> = {
    sm: checked ? 'translate-x-3' : 'translate-x-0',
    md: checked ? 'translate-x-4' : 'translate-x-0',
    lg: checked ? 'translate-x-5' : 'translate-x-0',
  };

  return cn(base, sizeMap[size], translateMap[size]);
}

export function getLabelTextClasses({ size = 'md' }: { size?: string }) {
  const base = 'text-neutral-800';

  const sizeMap: Record<string, string> = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return cn(base, sizeMap[size]);
}
