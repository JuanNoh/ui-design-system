import { EyeIcon, EyeOffIcon } from '../../icons';

interface PasswordToggleButtonProps {
  isVisible: boolean;
  onToggle: () => void;
  disabled?: boolean;
}

export function PasswordToggleButton({
  isVisible,
  onToggle,
  disabled,
}: PasswordToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-500 hover:text-primary-700 disabled:opacity-40"
      aria-label={isVisible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
      aria-pressed={isVisible}
    >
      {isVisible ? <EyeOffIcon /> : <EyeIcon />}
    </button>
  );
}
