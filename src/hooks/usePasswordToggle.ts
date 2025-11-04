import { useState, useMemo } from 'react';

export function usePasswordToggle(initialType: string | undefined) {
  const isPasswordField = initialType === 'password';
  const [isVisible, setIsVisible] = useState(false);

  const inputType = useMemo(() => {
    if (!isPasswordField) return initialType;
    return isVisible ? 'text' : 'password';
  }, [isPasswordField, isVisible, initialType]);

  const onToggle = () => {
    if (isPasswordField) setIsVisible((prev) => !prev);
  };

  return {
    isPasswordField,
    passwordToggleProps: { isVisible, onToggle, inputType },
    inputType,
  };
}
