import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface FormControlProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  fullWidth?: boolean;
}

export function FormControl({
  children,
  fullWidth,
  className,
  ...rest
}: FormControlProps) {
  const wrapperClasses = cn(
    'flex flex-col gap-1.5',
    fullWidth && 'w-full',
    className
  );

  return (
    <div className={wrapperClasses} {...rest}>
      {children}
    </div>
  );
}
