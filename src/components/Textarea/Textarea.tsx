import { forwardRef, useId } from 'react';
import type { TextareaProps } from './Textarea.types';
import {
  getTextareaClasses,
  getTextareaWrapperClasses,
  getLabelClasses,
} from './Textarea.logic.ts';

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
    const autoId = useId();
    const inputId = id ?? `ta-${autoId}`;
    const descId = description ? `${inputId}-desc` : undefined;
    const errId = error ? `${inputId}-err` : undefined;

    const describedBy = [descId, errId].filter(Boolean).join(' ') || undefined;

    return (
      <div className={getTextareaWrapperClasses({ fullWidth })}>
        {label && (
          <label htmlFor={inputId} className={getLabelClasses(disabled)}>
            {label}
          </label>
        )}

        <div className="relative">
          <textarea
            id={inputId}
            ref={ref}
            rows={rows}
            disabled={disabled}
            aria-invalid={!!error || undefined}
            aria-describedby={describedBy}
            className={
              getTextareaClasses({
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
  }
);
