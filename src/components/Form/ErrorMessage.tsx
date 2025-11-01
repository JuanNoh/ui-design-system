import { type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn.ts'; // Asegúrate que la ruta a 'cn' sea correcta

interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: string;
}

export function ErrorMessage({
  className,
  children,
  ...rest
}: ErrorMessageProps) {
  if (!children) return null;

  return (
    <p className={cn('text-xs text-red-600', className)} {...rest}>
      {children}
    </p>
  );
}
