import { cn } from '../../utils/cn.ts';
import type { AvatarProps } from './Avatar.types.ts';

export function getWrapperClasses({
  size = 'md',
  className,
}: {
  size?: AvatarProps['size'];
  className?: string;
}) {
  const base =
    'relative inline-flex items-center justify-center overflow-hidden rounded-full bg-neutral-200';

  const sizeMap: Record<string, string> = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  return cn(base, sizeMap[size], className);
}

export function getInitialsClasses({ size = 'md' }: { size?: string }) {
  const base = 'font-medium text-neutral-700';

  const sizeMap: Record<string, string> = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return cn(base, sizeMap[size]);
}

export function getInitials(name: string): string {
  if (!name) return '?';

  const parts = name.trim().split(' ').filter(Boolean);

  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();

  const firstInitial = parts[0].charAt(0);
  const lastInitial = parts[parts.length - 1].charAt(0);

  return `${firstInitial}${lastInitial}`.toUpperCase();
}
