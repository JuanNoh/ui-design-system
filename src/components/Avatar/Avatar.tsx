import { useState } from 'react';
import type { AvatarProps } from './Avatar.types.ts';
import {
  getInitials,
  getInitialsClasses,
  getWrapperClasses,
} from './Avatar.logic.ts';

export function Avatar({ src, name, size = 'md', className }: AvatarProps) {
  const [imgError, setImgError] = useState(false);

  const showImage = src && !imgError;
  const initials = getInitials(name);

  return (
    <div className={getWrapperClasses({ size, className })}>
      {showImage ? (
        <img
          src={src}
          alt={name}
          onError={() => setImgError(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className={getInitialsClasses({ size })}>{initials}</span>
      )}
    </div>
  );
}
