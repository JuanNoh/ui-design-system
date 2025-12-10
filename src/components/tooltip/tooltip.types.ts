import type { ReactNode, HTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { tooltipContentVariants } from './tooltip.variants';

export interface TooltipProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'content'>,
    VariantProps<typeof tooltipContentVariants> {
  content: ReactNode;
  children: ReactNode;
}
