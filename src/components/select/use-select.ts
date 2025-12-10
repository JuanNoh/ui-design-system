import {
  useState,
  type MouseEventHandler,
  type KeyboardEventHandler,
} from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useDismiss,
  useInteractions,
} from '@floating-ui/react';
import type { SelectOption } from './select.types';

interface UseSelectParams {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onKeyDown?: any;
}

export function useSelect({
  options,
  value,
  defaultValue,
  disabled,
  onChange,
  onClick,
  onKeyDown,
}: UseSelectParams) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-start',
    middleware: [offset(4), flip({ padding: 10 }), shift({ padding: 10 })],
    whileElementsMounted: autoUpdate,
  });

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  const [internalValue, setInternalValue] = useState<
    SelectOption['value'] | null
  >(defaultValue ?? null);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? (value ?? null) : internalValue;

  const selectedOption = options.find((opt) => opt.value === currentValue) as
    | SelectOption
    | undefined;

  const handleOptionSelect = (option: SelectOption) => {
    if (disabled || option.disabled) return;

    if (!isControlled) {
      setInternalValue(option.value);
    }

    onChange?.(option.value);
    setIsOpen(false);
  };

  const close = () => setIsOpen(false);

  const toggleOpen = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
  };

  const handleTriggerClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    // We handle toggle manually or via getReferenceProps, but usually simple toggle is safer if we manually manage open state heavily
    // Using interactions is better but for this refactor let's stick to hybrid to keep logic simple
    toggleOpen();
  };

  const handleTriggerKeyDown: KeyboardEventHandler<HTMLButtonElement> = (
    event
  ) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;

    if (event.key === 'Escape') {
      event.stopPropagation();
      close();
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleOpen();
    }
  };

  return {
    isOpen,
    setIsOpen,
    currentValue,
    selectedOption,
    refs,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,

    selectMenuProps: {
      options,
      currentValue,
      onSelect: handleOptionSelect,
    },

    selectProps: {
      isOpen,
      disabled,
      selectedOption,
      onClick: handleTriggerClick,
      onKeyDown: handleTriggerKeyDown,
    },
  };
}
