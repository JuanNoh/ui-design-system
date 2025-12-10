import type { ReactNode, HTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { drawerContentVariants } from './drawer.variants';

export interface DrawerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof drawerContentVariants> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}
