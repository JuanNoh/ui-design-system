import { type LabelHTMLAttributes } from 'react';
import { cn } from '../../utils/cn.ts'; // Asegúrate que la ruta a 'cn' sea correcta

interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean;
}

export function FormLabel({
  className,
  disabled,
  children,
  ...rest
}: FormLabelProps) {
  const labelClasses = cn(
    'text-sm font-medium',
    disabled ? 'text-neutral-400 cursor-not-allowed' : 'text-neutral-800',
    className
  );

  if (!children) return null;

  return (
    <label className={labelClasses} {...rest}>
      {children}
    </label>
  );
}
