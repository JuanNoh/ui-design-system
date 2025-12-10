import { cva } from 'class-variance-authority';

export const breadcrumbListVariants = cva(
  'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5'
);

export const breadcrumbItemVariants = cva('inline-flex items-center gap-1.5');

export const breadcrumbLinkVariants = cva(
  'transition-colors hover:text-foreground'
);

export const breadcrumbPageVariants = cva('font-normal text-foreground');

export const breadcrumbSeparatorVariants = cva('[&>svg]:size-3.5');

export const breadcrumbEllipsisVariants = cva(
  'flex h-9 w-9 items-center justify-center'
);
