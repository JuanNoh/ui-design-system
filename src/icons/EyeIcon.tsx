import type { IconProps } from '.';

export function EyeIcon({ size = 20, title, className, ...rest }: IconProps) {
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
      <path d="M2 12s3-6 10-6 10 6 10 6-3 6-10 6-10-6-10-6z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
EyeIcon.displayName = 'EyeIcon';
