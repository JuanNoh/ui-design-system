import type { ComponentProps } from 'react';
import type { VariantProps } from 'class-variance-authority';
import {
  paginationVariants,
  paginationContentVariants,
  paginationItemVariants,
  paginationEllipsisVariants,
} from './pagination.variants';
import type { ButtonProps } from '../button/button.types';

export interface PaginationProps
  extends ComponentProps<'nav'>,
    VariantProps<typeof paginationVariants> {}

export interface PaginationContentProps
  extends ComponentProps<'ul'>,
    VariantProps<typeof paginationContentVariants> {}

export interface PaginationItemProps
  extends ComponentProps<'li'>,
    VariantProps<typeof paginationItemVariants> {}

export type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  ComponentProps<'a'>;

export interface PaginationEllipsisProps
  extends ComponentProps<'span'>,
    VariantProps<typeof paginationEllipsisVariants> {}
