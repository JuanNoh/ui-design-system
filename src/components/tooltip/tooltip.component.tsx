import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  tooltipContainerVariants,
  tooltipContentVariants,
  tooltipArrowVariants,
} from './tooltip.variants';
import type { TooltipProps } from './tooltip.types';

export function Tooltip({
  content,
  children,
  className,
  ...props
}: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div
      className={cn(tooltipContainerVariants())}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      {...props}
    >
      {children}
      {isVisible && (
        <div className={cn(tooltipContentVariants(), className)}>
          {content}
          <div className={cn(tooltipArrowVariants())} />
        </div>
      )}
    </div>
  );
}
