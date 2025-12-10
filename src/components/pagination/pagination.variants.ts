import { cva } from 'class-variance-authority';

export const paginationVariants = cva('mx-auto flex w-full justify-center');

export const paginationContentVariants = cva(
  'flex flex-row items-center gap-1'
);

export const paginationItemVariants = cva('');

export const paginationEllipsisVariants = cva(
  'flex h-9 w-9 items-center justify-center'
);
