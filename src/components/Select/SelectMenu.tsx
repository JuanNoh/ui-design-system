import type { SelectOption } from './Select.types';
import { cn } from '../../utils/cn';
import { getSelectOptionClasses } from './Select.logic';

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
        'absolute z-50 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white shadow-lg shadow-black/5 ' +
          'transform transition-all duration-150 ease-out',
        placement === 'bottom'
          ? 'top-full mt-1 origin-top'
          : 'bottom-full mb-1 origin-bottom'
      )}
    >
      {options.length === 0 && (
        <div className="px-3 py-2 text-sm text-neutral-500">Sin opciones</div>
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
            className={getSelectOptionClasses({
              isSelected,
              disabled: option.disabled,
            })}
            onClick={() => onSelect(option)}
          >
            <span className="flex-1 truncate text-left">{option.label}</span>
            {isSelected && (
              <span className="ml-2 text-xs text-primary-700">✓</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
