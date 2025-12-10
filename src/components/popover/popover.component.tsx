import * as React from 'react';
import { cn } from '@/lib/utils';
import { useClickOutside } from '@/hooks/useClickOutside';
import {
  popoverContainerVariants,
  popoverTriggerVariants,
  popoverContentVariants,
} from './popover.variants';
import type { PopoverProps } from './popover.types';

export function Popover({
  trigger,
  content,
  className,
  ...props
}: PopoverProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(popoverRef, () => setIsOpen(false));

  return (
    <div className={cn(popoverContainerVariants())} ref={popoverRef} {...props}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={cn(popoverTriggerVariants())}
      >
        {trigger}
      </div>
      {isOpen && (
        <div className={cn(popoverContentVariants(), className)}>{content}</div>
      )}
    </div>
  );
}
