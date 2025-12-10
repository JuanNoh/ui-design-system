import { cn } from '@/lib/utils';
import { skeletonVariants } from './skeleton.variants';
import type { SkeletonProps } from './skeleton.types';

function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={cn(skeletonVariants(), className)} {...props} />;
}

export { Skeleton };
