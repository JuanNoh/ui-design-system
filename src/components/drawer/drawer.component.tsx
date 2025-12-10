import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/button/button.component';
import {
  drawerOverlayVariants,
  drawerContentVariants,
  drawerHeaderVariants,
  drawerBodyVariants,
} from './drawer.variants';
import type { DrawerProps } from './drawer.types';

export function Drawer({
  isOpen,
  onClose,
  children,
  title,
  position = 'right',
  className,
  ...props
}: DrawerProps) {
  return (
    <>
      <div
        className={cn(drawerOverlayVariants({ isOpen }))}
        onClick={onClose}
      />

      <div
        className={cn(drawerContentVariants({ position, isOpen }), className)}
        {...props}
      >
        <div className={cn(drawerHeaderVariants())}>
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className={cn(drawerBodyVariants())}>{children}</div>
      </div>
    </>
  );
}
