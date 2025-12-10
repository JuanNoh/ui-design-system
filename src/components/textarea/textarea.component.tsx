import { forwardRef, useId } from 'react';
import type { TextareaProps } from './textarea.types';
import { useFormAccessibility } from '@/hooks/useFormAccessibility';
import { FormControl } from '@/components/form/form-control';
import { FormLabel } from '@/components/form/form-label';
import { ErrorMessage } from '@/components/form/error-message';
import { cn } from '@/utils/cn';
import { textareaVariants } from './textarea.variants';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
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
  ) => {
    const autoId = useId();
    const resolvedId = id ?? `tx-${autoId}`;

    const { inputId, errorId, a11yProps } = useFormAccessibility({
      id: resolvedId,
      error,
      description,
      prefix: 'tx',
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
            className={cn(
              textareaVariants({
                size,
                invalid: !!error,
              }),
              className
            )}
            {...a11yProps}
            {...rest}
          />
        </div>

        <ErrorMessage id={errorId}>{error}</ErrorMessage>
      </FormControl>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
