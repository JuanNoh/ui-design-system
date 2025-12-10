import { useState, useCallback, useEffect, type ElementType } from 'react';
import { createPortal } from 'react-dom';

import {
  type ToastProviderProps,
  type ToastMessage,
  type ToastItemProps,
  type ToastVariant,
} from './toast.types';
import {
  toastListVariants,
  toastItemVariants,
  toastIconVariants,
} from './toast.variants';
import { ToastContext } from './toast.context';

import { Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-react';

const icons: Record<ToastVariant, ElementType> = {
  default: Info,
  success: CheckCircle,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
};

function ToastItem({
  id,
  title,
  description,
  variant = 'default',
  duration = 5000,
  onRemove,
}: ToastItemProps) {
  const [isExiting, setIsExiting] = useState(false);
  const Icon = icons[variant || 'default'];

  const handleDismiss = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      onRemove(id);
    }, 300);
  }, [id, onRemove]);

  useEffect(() => {
    if (duration === Infinity) return;

    const timer = setTimeout(() => {
      handleDismiss();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, handleDismiss]);

  return (
    <div
      role="alert"
      data-state={isExiting ? 'closed' : 'open'}
      className={toastItemVariants({ variant })}
    >
      <Icon className={toastIconVariants({ variant })} />

      <div className="flex-1 space-y-1">
        {title && <p className="text-sm font-semibold leading-none">{title}</p>}
        {description && (
          <p className="text-sm text-neutral-500 leading-relaxed opacity-90">
            {description}
          </p>
        )}
      </div>

      <button
        onClick={handleDismiss}
        className="absolute right-2 top-2 rounded-md p-1 text-neutral-400 opacity-0 transition-opacity hover:bg-neutral-100 hover:text-neutral-900 group-hover:opacity-100"
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Cerrar</span>
      </button>
    </div>
  );
}

export function ToastProvider({
  children,
  position = 'bottom-right',
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((toast: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Helpers
  const helpers = {
    success: (title: string, description?: string) =>
      addToast({ title, description, variant: 'success' }),
    error: (title: string, description?: string) =>
      addToast({ title, description, variant: 'error' }),
    warning: (title: string, description?: string) =>
      addToast({ title, description, variant: 'warning' }),
    info: (title: string, description?: string) =>
      addToast({ title, description, variant: 'info' }),
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast, ...helpers }}>
      {children}
      {createPortal(
        <div className={toastListVariants({ position })}>
          {toasts.map((toast) => (
            <ToastItem key={toast.id} {...toast} onRemove={removeToast} />
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
}
