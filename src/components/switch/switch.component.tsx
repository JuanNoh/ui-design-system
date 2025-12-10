import { forwardRef, useMemo } from 'react';
import type { SwitchProps } from './switch.types';
import {
  getLabelTextClasses,
  getLabelWrapperClasses,
  getSwitchIndicatorClasses,
  getSwitchToggleClasses,
  getWrapperClasses,
} from './switch.variants.ts';
import { cn } from '@/utils/cn.ts';
import { ErrorMessage } from '@/components/form/error-message';
import { useFormAccessibility } from '@/hooks/useFormAccessibility.ts';

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
  const isChecked = useMemo(
    () => (checked !== undefined ? checked : defaultChecked),
    [checked, defaultChecked]
  );

  const { inputId, errorId, a11yProps } = useFormAccessibility({
    id,
    error,
    prefix: 'sw',
  });

  return (
    <div className={cn(getWrapperClasses(), wrapperClassName)}>
      <label htmlFor={inputId} className={getLabelWrapperClasses(disabled)}>
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          disabled={disabled}
          aria-checked={isChecked}
          checked={checked}
          defaultChecked={defaultChecked}
          className={cn('sr-only', className)}
          {...a11yProps}
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

      <ErrorMessage id={errorId}>{error}</ErrorMessage>
    </div>
  );
});
