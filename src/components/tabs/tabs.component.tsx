import { useId, useState, useRef, useEffect } from 'react';
import type { TabsProps, TabItem } from './tabs.types';
import {
  tabListVariants,
  tabTriggerVariants,
  tabPanelVariants,
} from './tabs.variants';
import { cn } from '@/utils/cn';

export function Tabs(props: TabsProps) {
  const {
    tabs,
    value,
    defaultValue,
    onChange,
    fullWidth,
    size = 'md',
    variant = 'underline',
    className,
    idPrefix,
  } = props;

  const reactId = useId();
  const baseId = idPrefix ?? `tabs-${reactId}`;

  // Encontrar tab inicial
  const firstEnabledTab = tabs.find((t) => !t.disabled);
  const initial = defaultValue ?? value ?? firstEnabledTab?.id ?? null;

  // Estado interno para modo no controlado
  const [internalValue, setInternalValue] = useState<string | null>(initial);

  const isControlled = value !== undefined;
  const activeId = isControlled ? (value ?? null) : internalValue;

  const activeTab = tabs.find((t) => t.id === activeId) ?? firstEnabledTab;
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const setTabRef = (index: number, node: HTMLButtonElement | null) => {
    tabRefs.current[index] = node;
  };

  const handleTabChange = (tab: TabItem) => {
    if (tab.disabled) return;
    if (!isControlled) {
      setInternalValue(tab.id);
    }
    onChange?.(tab.id);
  };

  // Lógica de teclado (Accesibilidad)
  const focusTabAt = (index: number) => {
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    currentIndex: number
  ) => {
    const enabledTabs = tabs
      .map((t, i) => ({ tab: t, index: i }))
      .filter(({ tab }) => !tab.disabled);

    const currentEnabledIndex = enabledTabs.findIndex(
      ({ index }) => index === currentIndex
    );
    if (currentEnabledIndex === -1) return;

    const navigate = (offset: number) => {
      event.preventDefault();
      const nextIndex =
        (currentEnabledIndex + offset + enabledTabs.length) %
        enabledTabs.length;
      const target = enabledTabs[nextIndex];
      handleTabChange(target.tab);
      focusTabAt(target.index);
    };

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        navigate(1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        navigate(-1);
        break;
      case 'Home':
        event.preventDefault();
        handleTabChange(enabledTabs[0].tab);
        focusTabAt(enabledTabs[0].index);
        break;
      case 'End':
        event.preventDefault();
        handleTabChange(enabledTabs[enabledTabs.length - 1].tab);
        focusTabAt(enabledTabs[enabledTabs.length - 1].index);
        break;
    }
  };

  // Sincronizar estado si cambia la prop value
  useEffect(() => {
    if (!isControlled && value !== undefined && value !== internalValue) {
      setInternalValue(value ?? null);
    }
  }, [isControlled, value, internalValue]);

  return (
    <div className={cn('w-full', className)}>
      <div
        role="tablist"
        aria-orientation="horizontal"
        className={tabListVariants({ variant, fullWidth })}
      >
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeTab?.id;
          const tabId = `${baseId}-tab-${tab.id}`;
          const panelId = `${baseId}-panel-${tab.id}`;

          return (
            <button
              key={tab.id}
              ref={(node) => setTabRef(index, node)}
              id={tabId}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              disabled={tab.disabled}
              className={tabTriggerVariants({
                size,
                variant,
                isActive,
                fullWidth,
              })}
              onClick={() => handleTabChange(tab)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {tab.icon && (
                <span className="mr-2 inline-flex h-4 w-4 items-center justify-center">
                  {tab.icon}
                </span>
              )}
              {tab.label}
            </button>
          );
        })}
      </div>

      {activeTab && (
        <div
          id={`${baseId}-panel-${activeTab.id}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${activeTab.id}`}
          tabIndex={0}
          className={tabPanelVariants()}
        >
          {activeTab.content}
        </div>
      )}
    </div>
  );
}
