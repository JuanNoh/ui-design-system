import { forwardRef } from 'react';
import type { TextareaProps } from './Textarea.types';
import { getTextareaClasses } from './Textarea.logic.ts';
import { FormLabel } from '../Form/FormLabel.tsx';
import { ErrorMessage } from '../Form/ErrorMessage.tsx';
import { useFormAccessibility } from '../../hooks/useFormAccessibility.ts';
import { FormControl } from '../Form/FormControl.tsx';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      id,
      label,
      description,
      error,
      size = 'md',
      fullWidth,
      disabled,
      className,
      rows = 4,
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
          <textarea
            ref={ref}
            rows={rows}
            disabled={disabled}
            className={
              getTextareaClasses({
                size,
                disabled,
                error,
              }) + (className ? ` ${className}` : '')
            }
            {...a11yProps}
            {...rest}
          />
        </div>

        <ErrorMessage id={errorId}>{error}</ErrorMessage>
      </FormControl>
    );
  }
);
