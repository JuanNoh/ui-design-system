import type { IconProps } from '.';

export function ChevronDownIcon({
  size = 16,
  title,
  className,
  ...rest
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      fill="none"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

ChevronDownIcon.displayName = 'ChevronDownIcon';
