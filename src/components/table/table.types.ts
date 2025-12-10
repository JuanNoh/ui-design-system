import type { HTMLAttributes, ThHTMLAttributes, TdHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import {
  tableElementVariants,
  tableHeaderVariants,
  tableBodyVariants,
  tableFooterVariants,
  tableRowVariants,
  tableHeadVariants,
  tableCellVariants,
  tableCaptionVariants,
} from './table.variants';

export interface TableProps
  extends HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableElementVariants> {
  containerClassName?: string;
}

export interface TableHeaderProps
  extends HTMLAttributes<HTMLTableSectionElement>,
    VariantProps<typeof tableHeaderVariants> {}

export interface TableBodyProps
  extends HTMLAttributes<HTMLTableSectionElement>,
    VariantProps<typeof tableBodyVariants> {}

export interface TableFooterProps
  extends HTMLAttributes<HTMLTableSectionElement>,
    VariantProps<typeof tableFooterVariants> {}

export interface TableRowProps
  extends HTMLAttributes<HTMLTableRowElement>,
    VariantProps<typeof tableRowVariants> {}

export interface TableHeadProps
  extends ThHTMLAttributes<HTMLTableCellElement>,
    VariantProps<typeof tableHeadVariants> {}

export interface TableCellProps
  extends TdHTMLAttributes<HTMLTableCellElement>,
    VariantProps<typeof tableCellVariants> {}

export interface TableCaptionProps
  extends HTMLAttributes<HTMLTableCaptionElement>,
    VariantProps<typeof tableCaptionVariants> {}
