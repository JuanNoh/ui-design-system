import { forwardRef, useId, useMemo } from 'react';
import type { SwitchProps } from './Switch.types.ts';
import {
  getLabelTextClasses,
  getLabelWrapperClasses,
  getSwitchIndicatorClasses,
  getSwitchToggleClasses,
  getWrapperClasses,
} from './Switch.logic';
import { cn } from '../../utils/cn';

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  {
    id,
    label,
    error,
    size = 'md',
    disabled,
    checked,
    defaultChecked,
    className,
    wrapperClassName,
    ...rest
  },
  ref
) {
  const autoId = useId();
  const switchId = id ?? `sw-${autoId}`;
  const errId = error ? `${switchId}-err` : undefined;

  const isChecked = useMemo(
    () => (checked !== undefined ? checked : defaultChecked),
    [checked, defaultChecked]
  );

  return (
    <div className={cn(getWrapperClasses(), wrapperClassName)}>
      <label htmlFor={switchId} className={getLabelWrapperClasses(disabled)}>
        <input
          id={switchId}
          ref={ref}
          type="checkbox"
          role="switch"
          disabled={disabled}
          aria-checked={isChecked}
          aria-invalid={!!error || undefined}
          aria-describedby={errId}
          checked={checked}
          defaultChecked={defaultChecked}
          className={cn('sr-only', className)}
          {...rest}
        />

        <span
          aria-hidden="true"
          className={getSwitchToggleClasses({
            size,
            checked: isChecked,
            disabled,
          })}
        >
          <span
            className={getSwitchIndicatorClasses({ size, checked: isChecked })}
          />
        </span>

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
});
