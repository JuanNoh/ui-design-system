import { cn } from '../../utils/cn';
import type { AlertVariant } from './Alert.types';

const baseWrapper = 'rounded-lg p-4 flex gap-3.5';
const baseTitle = 'text-sm font-medium';
const baseMessage = 'text-sm';
const baseIcon = 'flex-shrink-0 h-5 w-5';
const baseButton =
  'ml-auto flex-shrink-0 -m-1 p-1 rounded-md focus:outline-none focus:ring-2';

export function getWrapperClasses(variant: AlertVariant, className?: string) {
  const variantMap: Record<AlertVariant, string> = {
    info: 'bg-blue-50 border border-blue-200',
    success: 'bg-green-50 border border-green-200',
    warning: 'bg-yellow-50 border border-yellow-200',
    error: 'bg-red-50 border border-red-200',
  };
  return cn(baseWrapper, variantMap[variant], className);
}

export function getIconClasses(variant: AlertVariant) {
  const variantMap: Record<AlertVariant, string> = {
    info: 'text-blue-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500',
  };
  return cn(baseIcon, variantMap[variant]);
}

export function getTitleClasses(variant: AlertVariant) {
  const variantMap: Record<AlertVariant, string> = {
    info: 'text-sky-800',
    success: 'text-green-800',
    warning: 'text-yellow-800',
    error: 'text-red-800',
  };
  return cn(baseTitle, variantMap[variant]);
}

export function getMessageClasses(variant: AlertVariant, hasTitle: boolean) {
  const variantMap: Record<AlertVariant, string> = {
    info: 'text-sky-700',
    success: 'text-green-700',
    warning: 'text-yellow-700',
    error: 'text-red-700',
  };
  return cn(baseMessage, variantMap[variant], hasTitle && 'mt-1.5');
}

export function getDismissButtonClasses(variant: AlertVariant) {
  const variantMap: Record<AlertVariant, string> = {
    info: 'text-blue-500 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50',
    success:
      'text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50',
    warning:
      'text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50',
    error:
      'text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50',
  };
  return cn(baseButton, variantMap[variant]);
}
