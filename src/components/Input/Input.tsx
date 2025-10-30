import { forwardRef, useId } from 'react';
import type { InputProps } from './Input.types';
import {
  getInputClasses,
  getInputWrapperClasses,
  getLabelClasses,
} from './Input.logic';

/**
 * Componente de botón accesible, con variantes (`primary`, `secondary`) y tamaños (`sm`, `md`, `lg`). Incluye estado `isLoading` y `disabled`.
 * */

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    id,
    label,
    description,
    error,
    size = 'md',
    fullWidth,
    disabled,
    className,
    ...rest
  },
  ref
) {
  const autoId = useId();
  const inputId = id ?? `in-${autoId}`;
  const descId = description ? `${inputId}-desc` : undefined;
  const errId = error ? `${inputId}-err` : undefined;

  const describedBy = [descId, errId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={getInputWrapperClasses({ fullWidth })}>
      {label && (
        <label htmlFor={inputId} className={getLabelClasses(disabled)}>
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={inputId}
          ref={ref}
          disabled={disabled}
          aria-invalid={!!error || undefined}
          aria-describedby={describedBy}
          className={
            getInputClasses({
              size,
              disabled,
              error,
            }) + (className ? ` ${className}` : '')
          }
          {...rest}
        />
      </div>
      {error && (
        <p id={errId} className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
});
