import type { ButtonProps } from './Button.types';
import { getButtonClasses } from './Button.logic';

export function Button({
  children,
  isLoading,
  disabled,
  className,
  ...rest
}: ButtonProps) {
  const classes =
    getButtonClasses({ ...rest, disabled }) +
    (className ? ` ${className}` : '');

  return (
    <button
      {...rest}
      disabled={disabled || isLoading}
      aria-disabled={disabled || isLoading || undefined}
      className={classes}
    >
      {isLoading ? (
        <span className="animate-pulse opacity-80">Cargando…</span>
      ) : (
        children
      )}
    </button>
  );
}
