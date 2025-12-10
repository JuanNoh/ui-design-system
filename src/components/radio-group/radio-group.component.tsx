import { useState } from 'react';
import type { RadioGroupProps, RadioOption } from './radio-group.types';
import {
  radioGroupVariants,
  radioOuterVariants,
  radioInnerVariants,
  radioLabelVariants,
  radioDescriptionVariants,
} from './radio-group.variants';
import { FormControl } from '@/components/Form/FormControl';
import { FormLabel } from '@/components/Form/FormLabel';
import { ErrorMessage } from '@/components/Form/ErrorMessage';
import { useFormAccessibility } from '@/hooks/useFormAccessibility';

export function RadioGroup(props: RadioGroupProps) {
  const {
    name,
    label,
    description,
    error,
    options,
    direction = 'column',
    size = 'md',
    fullWidth,
    className,
    disabled,
    value,
    defaultValue = null,
    onChange,
    onBlur,
    onFocus,
  } = props;

  const { inputId, errorId, a11yProps } = useFormAccessibility({
    id: name,
    error,
    description,
    prefix: 'rg',
  });

  const [internalValue, setInternalValue] = useState<
    RadioOption['value'] | null
  >(defaultValue);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? (value ?? null) : internalValue;

  const handleChange = (option: RadioOption) => {
    if (disabled || option.disabled) return;

    if (!isControlled) {
      setInternalValue(option.value);
    }

    onChange?.(option.value);
  };

  return (
    <FormControl fullWidth={fullWidth}>
      {label && (
        <FormLabel htmlFor={inputId} disabled={disabled}>
          {label}
        </FormLabel>
      )}

      {description && (
        <p className="mt-0.5 text-xs text-neutral-500">{description}</p>
      )}

      <div
        id={inputId}
        role="radiogroup"
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={radioGroupVariants({ direction, className })}
      >
        {options.map((option) => {
          const checked = option.value === currentValue;
          const optionDisabled = disabled || option.disabled;

          return (
            <label
              key={String(option.value)}
              className="inline-flex items-start gap-2 cursor-pointer"
            >
              <span className="mt-0.5 inline-flex">
                <span
                  className={radioOuterVariants({
                    size,
                    disabled: optionDisabled,
                    checked,
                  })}
                >
                  <span
                    className={radioInnerVariants({
                      size,
                      disabled: optionDisabled,
                      checked,
                    })}
                  />
                </span>
              </span>

              <span className="flex flex-col">
                <span
                  className={radioLabelVariants({ disabled: optionDisabled })}
                >
                  {option.label}
                </span>
                {option.description && (
                  <span
                    className={radioDescriptionVariants({
                      disabled: optionDisabled,
                    })}
                  >
                    {option.description}
                  </span>
                )}
              </span>

              <input
                type="radio"
                name={name}
                value={option.value}
                checked={checked}
                onChange={() => handleChange(option)}
                onBlur={onBlur}
                onFocus={onFocus}
                disabled={optionDisabled}
                className="sr-only"
                {...a11yProps}
              />
            </label>
          );
        })}
      </div>

      <ErrorMessage id={errorId}>{error}</ErrorMessage>
    </FormControl>
  );
}
