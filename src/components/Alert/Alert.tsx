import { type ReactElement, useId, useState } from 'react';
import type { AlertProps, AlertVariant } from './Alert.types';
import {
  getDismissButtonClasses,
  getIconClasses,
  getMessageClasses,
  getTitleClasses,
  getWrapperClasses,
} from './Alert.logic';

import {
  CircleInfoIcon,
  CheckCircleIcon,
  WarningIcon,
  ErrorIcon,
  CloseIcon,
} from '../../icons';
import type { IconProps } from '../../icons';

const VariantIcon: Record<AlertVariant, (p: IconProps) => ReactElement> = {
  info: (p) => <CircleInfoIcon {...p} />,
  success: (p) => <CheckCircleIcon {...p} />,
  warning: (p) => <WarningIcon {...p} />,
  error: (p) => <ErrorIcon {...p} />,
};

export function Alert({
  variant = 'info',
  title,
  children,
  showIcon = true,
  dismissible = false,
  onDismiss,
  className,
}: AlertProps) {
  const [isVisible, setIsVisible] = useState(true);
  const uid = useId();

  const titleId = title ? `alert-title-${uid}` : undefined;
  const descId = children ? `alert-desc-${uid}` : undefined;

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  const isAssertive = variant === 'error' || variant === 'warning';
  const Icon = VariantIcon[variant];

  return (
    <div
      className={getWrapperClasses(variant, className)}
      role={isAssertive ? 'alert' : undefined}
      aria-live={isAssertive ? 'assertive' : 'polite'}
      aria-atomic="true"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      {showIcon && (
        <span className={getIconClasses(variant)} aria-hidden="true">
          <Icon size={20} />
        </span>
      )}

      <div className="flex-1 min-w-0">
        {title && (
          <h3 id={titleId} className={getTitleClasses(variant)}>
            {title}
          </h3>
        )}
        <div id={descId} className={getMessageClasses(variant, !!title)}>
          {children}
        </div>
      </div>

      {dismissible && (
        <button
          type="button"
          aria-label="Cerrar alerta"
          onClick={handleDismiss}
          className={getDismissButtonClasses(variant)}
        >
          <CloseIcon size={18} />
        </button>
      )}
    </div>
  );
}
