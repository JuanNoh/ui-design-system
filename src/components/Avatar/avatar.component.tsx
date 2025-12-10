import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import {
  avatarVariants,
  avatarImageVariants,
  avatarFallbackVariants,
} from './avatar.variants';
import type {
  AvatarProps,
  AvatarImageProps,
  AvatarFallbackProps,
} from './avatar.types';

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size }), className)}
        {...props}
      />
    );
  }
);
Avatar.displayName = 'Avatar';

const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, ...props }, ref) => (
    <img
      ref={ref}
      className={cn(avatarImageVariants(), className)}
      {...props}
    />
  )
);
AvatarImage.displayName = 'AvatarImage';

const AvatarFallback = forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(avatarFallbackVariants(), className)}
      {...props}
    />
  )
);
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarImage, AvatarFallback };
