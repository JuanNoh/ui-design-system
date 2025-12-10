import type { ReactNode } from 'react';
import type { SizeToken } from '@/types/common';

export type TabsVariant = 'underline' | 'solid';

export interface TabItem {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
  content?: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];

  /** Valor controlado */
  value?: string;
  /** Valor inicial no controlado */
  defaultValue?: string;

  onChange?: (id: string) => void;

  fullWidth?: boolean;
  size?: SizeToken;
  variant?: TabsVariant;
  className?: string;
  idPrefix?: string;
}
