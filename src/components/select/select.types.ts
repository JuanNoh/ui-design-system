import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import {
  selectTriggerVariants,
  selectContentVariants,
  selectItemVariants,
} from './select.variants';

export interface SelectProps {
  children: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface SelectGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export interface SelectValueProps {
  placeholder?: string;
}

export interface SelectTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof selectTriggerVariants> {
  asChild?: boolean;
}

export interface SelectContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof selectContentVariants>, 'position'> {
  position?: 'popper' | 'item-aligned';
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface SelectLabelProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export interface SelectItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof selectItemVariants> {
  value: string;
  disabled?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface SelectSeparatorProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}
