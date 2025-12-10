import type { SelectOption } from './select.types';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

type Placement = 'top' | 'bottom';

interface SelectMenuProps {
  options: SelectOption[];
  currentValue: SelectOption['value'] | null;
  placement: Placement;
  inputId?: string;
  onSelect: (option: SelectOption) => void;
}

export function SelectMenu({
  options,
  currentValue,
  placement,
  inputId,
  onSelect,
}: SelectMenuProps) {
  return (
    <div
      role="listbox"
      aria-labelledby={inputId}
      className={cn(
        'absolute z-50 max-h-60 w-full overflow-auto rounded-lg bg-white p-1 py-1',
        'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]',
        'border border-gray-100',
        'animate-in fade-in-0 duration-200',
        placement === 'bottom'
          ? 'top-full mt-1 slide-in-from-top-2'
          : 'bottom-full mb-1 slide-in-from-bottom-2'
      )}
    >
      {options.length === 0 && (
        <div className="px-3 py-2.5 text-center text-sm text-gray-500">
          No data
        </div>
      )}

      {options.map((option) => {
        const isSelected = option.value === currentValue;

        return (
          <button
            key={String(option.value)}
            type="button"
            role="option"
            aria-selected={isSelected}
            disabled={option.disabled}
            className={cn(
              'relative flex w-full cursor-pointer select-none items-center rounded-md px-3 py-2 text-[0.925rem] outline-none transition-colors',
              'hover:bg-gray-50 focus:bg-gray-50',
              isSelected && 'bg-blue-50 font-medium text-gray-900', // Ant Design selection style
              option.disabled && 'pointer-events-none opacity-50'
            )}
            onClick={() => onSelect(option)}
          >
            <span
              className={cn(
                'flex-1 truncate text-left',
                isSelected && 'font-semibold'
              )}
            >
              {option.label}
            </span>
            {isSelected && (
              <span className="ml-2 flex h-4 w-4 items-center justify-center text-blue-500">
                <Check className="h-4 w-4" />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
