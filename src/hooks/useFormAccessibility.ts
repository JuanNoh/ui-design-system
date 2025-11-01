import { useId } from 'react';

interface UseFormAccessibilityProps {
  id?: string;
  error?: string;
  description?: string;
  prefix?: string;
}

export function useFormAccessibility({
  id,
  error,
  description,
  prefix = 'form-field',
}: UseFormAccessibilityProps) {
  const autoId = useId();
  const inputId = id ?? `${prefix}-${autoId}`;

  const errorId = error ? `${inputId}-err` : undefined;
  const descriptionId = description ? `${inputId}-desc` : undefined;

  const describedBy =
    [descriptionId, errorId].filter(Boolean).join(' ') || undefined;

  const a11yProps = {
    id: inputId,
    'aria-invalid': !!error || undefined,
    'aria-describedby': describedBy,
  };

  return {
    inputId,
    errorId,
    descriptionId,
    a11yProps,
  };
}
