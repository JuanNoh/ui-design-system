import { forwardRef, useId } from 'react';
import type { CheckboxProps } from './Checkbox.types.ts';
import {
  getCheckboxClasses,
  getLabelTextClasses,
  getLabelWrapperClasses,
  getWrapperClasses,
} from './Checkbox.logic.ts';
import { cn } from '../../utils/cn.ts';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      id,
      label,
      error,
      size = 'md',
      disabled,
      className,
      wrapperClassName,
      ...rest
    },
    ref
  ) {
    const autoId = useId();
    const checkboxId = id ?? `cb-${autoId}`;
    const errId = error ? `${checkboxId}-err` : undefined;

    return (
      <div className={cn(getWrapperClasses(), wrapperClassName)}>
        <label
          htmlFor={checkboxId}
          className={getLabelWrapperClasses(disabled)}
        >
          <input
            id={checkboxId}
            ref={ref}
            type="checkbox"
            disabled={disabled}
            aria-invalid={!!error || undefined}
            aria-describedby={errId}
            className={cn(
              getCheckboxClasses({
                size,
              }),
              className
            )}
            {...rest}
          />
          {label && (
            <span className={getLabelTextClasses({ size })}>{label}</span>
          )}
        </label>

        {error && (
          <p id={errId} className="text-xs text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);
