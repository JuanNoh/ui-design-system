import type { HTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { stepperVariants } from './stepper.variants';

export interface Step {
  id: string | number;
  label: string;
  description?: string;
}

export interface StepperProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stepperVariants> {
  steps: Step[];
  currentStep: number;
}
