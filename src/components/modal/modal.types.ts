import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { dialogContentVariants } from './modal.variants';

export interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

export interface DialogTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export interface DialogContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dialogContentVariants> {}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DialogHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DialogFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DialogTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DialogDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}
