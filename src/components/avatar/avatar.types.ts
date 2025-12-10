import type { HTMLAttributes, ImgHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { avatarVariants } from './avatar.variants';

export type AvatarProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof avatarVariants>;

export type AvatarImageProps = ImgHTMLAttributes<HTMLImageElement>;

export type AvatarFallbackProps = HTMLAttributes<HTMLSpanElement>;
