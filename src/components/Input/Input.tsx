import { forwardRef } from 'react';
import type { InputProps } from './Input.types';
import { getInputClasses } from './Input.logic';
import { ErrorMessage } from '../Form/ErrorMessage.tsx';
import { FormLabel } from '../Form/FormLabel.tsx';

import { useFormAccessibility } from '../../hooks/useFormAccessibility.ts';
import { FormControl } from '../Form/FormControl.tsx';

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
  const { inputId, errorId, a11yProps } = useFormAccessibility({
    id,
    error,
    description,
    prefix: 'in',
  });

  return (
    <FormControl fullWidth={fullWidth}>
      <FormLabel htmlFor={inputId} disabled={disabled}>
        {label}
      </FormLabel>

      <div className="relative">
        <input
          ref={ref}
          disabled={disabled}
          className={
            getInputClasses({
              size,
              disabled,
            }) + (className ? ` ${className}` : '')
          }
          {...a11yProps}
          {...rest}
        />
      </div>

      <ErrorMessage id={errorId}>{error}</ErrorMessage>
    </FormControl>
  );
});
