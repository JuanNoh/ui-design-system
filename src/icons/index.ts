import { type SVGProps } from 'react';
export { CloseIcon } from './CloseIcon.tsx';
export { CircleInfoIcon } from './CircleInfoIcon';
export { CheckCircleIcon } from './CheckCircleIcon.tsx';
export { WarningIcon } from './WarningIcon.tsx';
export { ErrorIcon } from './ErrorIcon.tsx';
export { EyeIcon } from './EyeIcon.tsx';
export { EyeOffIcon } from './EyeOffIcon.tsx';

export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
  title?: string;
};
