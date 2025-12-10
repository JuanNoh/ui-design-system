import * as React from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSelect } from './use-select';
import {
  selectTriggerVariants,
  selectItemVariants,
  selectContentVariants,
  selectLabelVariants,
  selectSeparatorVariants,
} from './select.variants';

interface SelectContextValue {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  value: string | undefined;
  onValueChange: (value: string) => void;
  refs: {
    setReference: (node: HTMLElement | null) => void;
    setFloating: (node: HTMLElement | null) => void;
  };
  floatingStyles: React.CSSProperties;
  getReferenceProps: (
    userProps?: React.HTMLProps<Element>
  ) => Record<string, unknown>;
  getFloatingProps: (
    userProps?: React.HTMLProps<HTMLElement>
  ) => Record<string, unknown>;
}

const SelectContext = React.createContext<SelectContextValue | undefined>(
  undefined
);

const useSelectContext = () => {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error('Select compound components must be used within a Select');
  }
  return context;
};

interface SelectProps {
  children: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  children,
  value,
  defaultValue,
  onValueChange,
  disabled,
}) => {
  const selectLogic = useSelect({
    options: [],
    value,
    defaultValue,
    disabled,
    onChange: onValueChange,
  });

  return (
    <SelectContext.Provider
      value={{
        ...selectLogic,
        value: selectLogic.currentValue ?? undefined,
        onValueChange: (v) =>
          selectLogic.selectMenuProps.onSelect({ value: v, label: v } as {
            value: string;
            label: string;
          }),
      }}
    >
      <div data-select-root className="relative inline-block w-full">
        {children}
      </div>
    </SelectContext.Provider>
  );
};

const SelectGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} />
);

const SelectValue: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
  const { value } = useSelectContext();
  return <span className="pointer-events-none">{value || placeholder}</span>;
};

interface SelectTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { isOpen, setIsOpen, refs, getReferenceProps } = useSelectContext();

    const mergedRef = React.useMemo(() => {
      return (node: HTMLButtonElement) => {
        refs.setReference(node);
        if (typeof ref === 'function') ref(node);
        else if (ref)
          (ref as React.MutableRefObject<HTMLButtonElement | null>).current =
            node;
      };
    }, [refs, ref]);

    return (
      <button
        ref={mergedRef}
        type="button"
        className={cn(selectTriggerVariants(), className)}
        aria-expanded={isOpen}
        {...getReferenceProps(props)}
        onClick={(e) => {
          setIsOpen((prev) => !prev);
          props.onClick?.(e as React.MouseEvent<HTMLButtonElement, MouseEvent>);
        }}
      >
        {children}
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>
    );
  }
);
SelectTrigger.displayName = 'SelectTrigger';

type SelectContentProps = React.HTMLAttributes<HTMLDivElement>;

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, ...props }, ref) => {
    const { isOpen, refs, floatingStyles, getFloatingProps } =
      useSelectContext();

    const mergedRef = React.useMemo(() => {
      return (node: HTMLDivElement) => {
        refs.setFloating(node);
        if (typeof ref === 'function') ref(node);
        else if (ref)
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      };
    }, [refs, ref]);

    if (!isOpen) return null;

    return (
      <div
        ref={mergedRef}
        style={floatingStyles}
        className={cn(selectContentVariants(), className)}
        {...getFloatingProps(props)}
      >
        <div className="p-1">{children}</div>
      </div>
    );
  }
);
SelectContent.displayName = 'SelectContent';

const SelectLabel: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn(selectLabelVariants(), className)} {...props} />;

interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  disabled?: boolean;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, value, disabled, ...props }, ref) => {
    const {
      value: selectedValue,
      onValueChange,
      setIsOpen,
    } = useSelectContext();
    const isSelected = selectedValue === value;

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      if (disabled) return;
      onValueChange?.(value);
      setIsOpen(false);
    };

    return (
      <div
        ref={ref}
        role="option"
        aria-selected={isSelected}
        data-disabled={disabled}
        className={cn(selectItemVariants(), className)}
        onClick={handleClick}
        {...props}
      >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          {isSelected && <Check className="h-4 w-4" />}
        </span>
        <span className="truncate">{children}</span>
      </div>
    );
  }
);
SelectItem.displayName = 'SelectItem';

const SelectSeparator: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn(selectSeparatorVariants(), className)} {...props} />;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
