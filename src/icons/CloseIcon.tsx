import type { IconProps } from '.';

export function CloseIcon({ size = 20, title, className, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      fill="currentColor"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" />
    </svg>
  );
}

CloseIcon.displayName = 'CloseIcon';
