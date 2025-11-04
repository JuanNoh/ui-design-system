import { forwardRef } from 'react';
import type { InputProps } from './Input.types';
import { getInputClasses } from './Input.logic';
import { ErrorMessage } from '../Form/ErrorMessage.tsx';
import { FormLabel } from '../Form/FormLabel.tsx';

import { useFormAccessibility } from '../../hooks/useFormAccessibility.ts';
import { FormControl } from '../Form/FormControl.tsx';
import { usePasswordToggle } from '../../hooks/usePasswordToggle.ts';
import { PasswordToggleButton } from './PasswordToggleButton.tsx';

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
              disabled,
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
