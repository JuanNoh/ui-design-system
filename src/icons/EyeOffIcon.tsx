import type { IconProps } from '.';

export function EyeOffIcon({
  size = 20,
  title,
  className,
  ...rest
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="m3 3 18 18" />
      <path d="M9.5 5.1A9.4 9.4 0 0 1 12 5c5 0 9 4.5 9 7 0 1-.5 2-1.3 3" />
      <path d="M6.2 6.2C4 7.4 2 9.6 2 12c0 1.1.6 2.2 1.5 3.2 1 1.1 2.4 2 4 2.6 1 .3 2.1.5 3.5.5 1 0 1.9-.1 2.7-.3" />
      <path d="M10.7 10.7a2 2 0 0 0 2.6 2.6" />
    </svg>
  );
}
EyeOffIcon.displayName = 'EyeOffIcon';
