import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import type { ButtonProps } from './button.types';
import { buttonVariants } from './button.variants';

export interface ButtonPropsWithAsChild extends ButtonProps {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonPropsWithAsChild>(
  (
    {
      className,
      variant,
      size,
      isLoading,
      children,
      disabled,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading || undefined}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button };
