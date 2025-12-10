import type {
  ComponentPropsWithoutRef,
  LiHTMLAttributes,
  HTMLAttributes,
} from 'react';

export type BreadcrumbProps = ComponentPropsWithoutRef<'nav'>;
export type BreadcrumbListProps = ComponentPropsWithoutRef<'ol'>;
export type BreadcrumbItemProps = ComponentPropsWithoutRef<'li'>;
export type BreadcrumbLinkProps = ComponentPropsWithoutRef<'a'>;
export type BreadcrumbPageProps = ComponentPropsWithoutRef<'span'>;
export type BreadcrumbSeparatorProps = LiHTMLAttributes<HTMLLIElement>;
export type BreadcrumbEllipsisProps = HTMLAttributes<HTMLSpanElement>;
