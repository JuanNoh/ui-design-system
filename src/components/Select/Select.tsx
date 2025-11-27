import { forwardRef, type Ref } from 'react';
import type { SelectProps } from './Select.types';
import { getSelectTriggerClasses } from './Select.logic';
import { ErrorMessage } from '../Form/ErrorMessage.tsx';
import { FormLabel } from '../Form/FormLabel.tsx';
import { FormControl } from '../Form/FormControl.tsx';
import { useFormAccessibility } from '../../hooks/useFormAccessibility.ts';
import { cn } from '../../utils/cn';
import { useSelect } from './useSelect';
import { SelectMenu } from './SelectMenu.tsx';
import { ChevronDownIcon } from '../../icons/ChevronDownIcon.tsx';

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  function Select(props, ref: Ref<HTMLButtonElement>) {
    const {
      id,
      label,
      description,
      error,
      size = 'md',
      fullWidth,
      disabled,
      className,
      placeholder = 'Selecciona una opción…',
      options,
      value,
      defaultValue = null,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      onClick,
      name,
      ...rest
    } = props;

    const { inputId, errorId, a11yProps } = useFormAccessibility({
      id,
      error,
      description,
      prefix: 'sel',
    });

    const {
      isOpen,
      currentValue,
      selectedOption,
      wrapperRef,
      setTriggerNode,
      selectProps,
      selectMenuProps,
    } = useSelect({
      options,
      value,
      defaultValue,
      disabled,
      onChange,
      onClick,
      onKeyDown,
    });

    const handleRef = (node: HTMLButtonElement | null) => {
      setTriggerNode(node);

      if (!ref) return;

      if (typeof ref === 'function') {
        ref(node);
      } else {
        try {
          ref.current = node;
        } catch {
          // ignore
        }
      }
    };

    return (
      <FormControl fullWidth={fullWidth}>
        <FormLabel htmlFor={inputId} disabled={disabled}>
          {label}
        </FormLabel>

        <div ref={wrapperRef} className="relative">
          <button
            ref={handleRef}
            type="button"
            className={cn(
              getSelectTriggerClasses({ size, disabled }),
              'flex items-center justify-between gap-2 text-left',
              className
            )}
            onBlur={onBlur}
            onFocus={onFocus}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            {...selectProps}
            {...a11yProps}
            {...rest}
          >
            <span
              className={cn(
                'flex-1 truncate',
                !selectedOption && 'text-neutral-400'
              )}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </span>

            <span className="ml-2 inline-flex shrink-0 items-center">
              <ChevronDownIcon />
            </span>
          </button>

          {isOpen && <SelectMenu {...selectMenuProps} inputId={inputId} />}
        </div>

        {name && <input type="hidden" name={name} value={currentValue ?? ''} />}

        <ErrorMessage id={errorId}>{error}</ErrorMessage>
      </FormControl>
    );
  }
);
