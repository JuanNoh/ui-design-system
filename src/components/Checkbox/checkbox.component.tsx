import { forwardRef, useId } from 'react';
import type { CheckboxProps } from './Checkbox.types';
import { cn } from '@/utils/cn';

import {
  checkboxWrapperVariants,
  checkboxLabelWrapperVariants,
  checkboxInputVariants,
  checkboxLabelTextVariants,
} from './checkbox.variants';

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
      <div className={cn(checkboxWrapperVariants(), wrapperClassName)}>
        <label
          htmlFor={checkboxId}
          className={checkboxLabelWrapperVariants({ disabled })}
        >
          <input
            id={checkboxId}
            ref={ref}
            type="checkbox"
            disabled={disabled}
            aria-invalid={!!error || undefined}
            aria-describedby={errId}
            className={cn(checkboxInputVariants({ size }), className)}
            {...rest}
          />

          {label && (
            <span className={checkboxLabelTextVariants({ size })}>{label}</span>
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
