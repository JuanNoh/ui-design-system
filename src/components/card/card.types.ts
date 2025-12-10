import type { HTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import {
  cardVariants,
  cardHeaderVariants,
  cardTitleVariants,
  cardDescriptionVariants,
  cardContentVariants,
  cardFooterVariants,
} from './card.variants';

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export interface CardHeaderProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeaderVariants> {}

export interface CardTitleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof cardTitleVariants> {}

export interface CardDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof cardDescriptionVariants> {}

export interface CardContentProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardContentVariants> {}

export interface CardFooterProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardFooterVariants> {}
