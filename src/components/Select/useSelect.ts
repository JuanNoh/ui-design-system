import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type MouseEventHandler,
  type KeyboardEventHandler,
} from 'react';
import type { SelectProps, SelectOption } from './Select.types';

type Placement = 'top' | 'bottom';

interface UseSelectParams {
  options: SelectOption[];
  value?: SelectProps['value'];
  defaultValue?: SelectProps['defaultValue'];
  disabled?: SelectProps['disabled'];
  onChange?: SelectProps['onChange'];
  onClick?: SelectProps['onClick'];
  onKeyDown?: SelectProps['onKeyDown'];
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
  const [placement, setPlacement] = useState<Placement>('bottom');

  const [internalValue, setInternalValue] = useState<
    SelectOption['value'] | null
  >(defaultValue ?? null);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? (value ?? null) : internalValue;

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const selectedOption = options.find((opt) => opt.value === currentValue) as
    | SelectOption
    | undefined;

  const setTriggerNode = (node: HTMLButtonElement | null) => {
    triggerRef.current = node;
  };

  const handleOptionSelect = (option: SelectOption) => {
    if (disabled || option.disabled) return;

    if (!isControlled) {
      setInternalValue(option.value);
    }

    onChange?.(option.value);
    setIsOpen(false);
  };

  const decidePlacement = useCallback(() => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    const estimatedMenuHeight = Math.min(options.length * 40 + 8, 260);

    if (spaceBelow < estimatedMenuHeight && spaceAbove > spaceBelow) {
      setPlacement('top');
    } else {
      setPlacement('bottom');
    }
  }, [options.length]);

  const close = () => setIsOpen(false);

  const toggleOpen = () => {
    if (disabled) return;

    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        decidePlacement();
      }
      return next;
    });
  };

  const handleTriggerClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

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

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleRecalc = () => decidePlacement();

    window.addEventListener('resize', handleRecalc);
    window.addEventListener('scroll', handleRecalc, true);

    return () => {
      window.removeEventListener('resize', handleRecalc);
      window.removeEventListener('scroll', handleRecalc, true);
    };
  }, [isOpen, decidePlacement]);

  return {
    isOpen,
    currentValue,
    selectedOption,
    wrapperRef,
    setTriggerNode,

    selectMenuProps: {
      options,
      currentValue,
      placement,
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
