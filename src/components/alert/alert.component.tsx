import { forwardRef, useState } from 'react';
import { AlertCircle, CheckCircle, Info, X, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { alertVariants } from './alert.variants';
import type { AlertProps } from './alert.types';
import { Button } from '@/components/button/button.component';

const icons = {
  default: Info,
  destructive: XCircle,
  success: CheckCircle,
  warning: AlertCircle,
  info: Info,
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = 'default',
      showIcon = true,
      dismissible = false,
      onDismiss,
      children,
      ...props
    },
    ref
  ) => {
    const Icon = icons[variant || 'default'];
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    const handleDismiss = () => {
      setIsVisible(false);
      onDismiss?.();
    };

    const isAssertive = variant === 'destructive' || variant === 'warning';

    return (
      <div
        ref={ref}
        role={isAssertive ? 'alert' : 'status'}
        aria-live={isAssertive ? 'assertive' : 'polite'}
        aria-atomic="true"
        className={cn(
          alertVariants({ variant }),
          showIcon && 'pl-11',
          dismissible && 'pr-12',
          className
        )}
        {...props}
      >
        {showIcon && (
          <Icon aria-hidden="true" className="h-4 w-4 absolute left-4 top-4" />
        )}

        {children}

        {dismissible && (
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              'absolute right-2 top-2 h-8 w-8 rounded-md opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
              variant === 'destructive'
                ? 'text-destructive-foreground/70 hover:text-destructive-foreground'
                : 'text-foreground/70 hover:text-foreground'
            )}
            onClick={handleDismiss}
          >
            <X className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Cerrar alerta</span>
          </Button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';

const AlertTitle = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
