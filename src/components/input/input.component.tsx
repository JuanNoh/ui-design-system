import { forwardRef } from 'react';
import type { InputProps } from './input.types';
import { getInputClasses } from './input.variants';
import { ErrorMessage } from '@/components/form/error-message';
import { FormLabel } from '@/components/form/form-label';

import { useFormAccessibility } from '@/hooks/useFormAccessibility';
import { FormControl } from '@/components/form/form-control';
import { usePasswordToggle } from '@/hooks/usePasswordToggle';
import { PasswordToggleButton } from './input-password-toggle.component';

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
    type,
    ...rest
  },
  ref
) {
  const { inputId, errorId, a11yProps } = useFormAccessibility({
    id,
    error,
    description,
    prefix: 'in',
  });

  const { isPasswordField, passwordToggleProps, inputType } =
    usePasswordToggle(type);

  return (
    <FormControl fullWidth={fullWidth}>
      <FormLabel htmlFor={inputId} disabled={disabled}>
        {label}
      </FormLabel>

      <div className="relative">
        <input
          ref={ref}
          disabled={disabled}
          type={inputType}
          className={
            getInputClasses({
              size,
            }) + (className ? ` ${className}` : '')
          }
          {...a11yProps}
          {...rest}
        />

        {isPasswordField && (
          <PasswordToggleButton disabled={disabled} {...passwordToggleProps} />
        )}
      </div>

      <ErrorMessage id={errorId}>{error}</ErrorMessage>
    </FormControl>
  );
});
