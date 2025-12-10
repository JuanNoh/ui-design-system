import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  stepperVariants,
  stepperContainerVariants,
  stepperLineContainerVariants,
  stepperLineProgressVariants,
  stepperItemVariants,
  stepperCircleVariants,
  stepperLabelVariants,
  stepperDescriptionVariants,
} from './stepper.variants';
import type { StepperProps } from './stepper.types';

export function Stepper({
  steps,
  currentStep,
  className,
  ...props
}: StepperProps) {
  return (
    <div className={cn(stepperVariants(), className)} {...props}>
      <div className={stepperContainerVariants()}>
        {/* Connecting Line */}
        <div className={stepperLineContainerVariants()}>
          <div
            className={stepperLineProgressVariants()}
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {steps.map((step, index) => {
          const isCompleted = index + 1 < currentStep;
          const isCurrent = index + 1 === currentStep;
          const state = isCompleted
            ? 'completed'
            : isCurrent
              ? 'current'
              : 'pending';

          return (
            <div key={step.id} className={stepperItemVariants()}>
              <div className={stepperCircleVariants({ state })}>
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>
              <div className="mt-2 text-center">
                <p
                  className={stepperLabelVariants({
                    state: isCurrent ? 'active' : 'inactive',
                  })}
                >
                  {step.label}
                </p>
                {step.description && (
                  <p className={stepperDescriptionVariants()}>
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
