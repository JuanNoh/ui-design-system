import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox.tsx';
import { useState } from 'react';

/**
 * Componente Checkbox para selecciones booleanas (sí/no).
 */

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    label: 'Acepto los términos y condiciones',
    size: 'md',
    disabled: false,
  },
  parameters: {
    a11y: { disable: false },
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

const CheckboxControlled = (args: Story['args']) => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export const Basic: Story = {
  render: CheckboxControlled,
  args: {
    label: 'Acepto los términos y condiciones',
  },
};

export const WithError: Story = {
  render: CheckboxControlled,
  args: {
    label: 'Debes aceptar para continuar',
    error: 'Este campo es obligatorio',
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Opción deshabilitada (marcada)',
    disabled: true,
    checked: true,
  },
};

export const DisabledUnchecked: Story = {
  args: {
    label: 'Opción deshabilitada (sin marcar)',
    disabled: true,
    checked: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox size="sm" label="Tamaño 'sm' (pequeño)" defaultChecked />
      <Checkbox size="md" label="Tamaño 'md' (mediano)" defaultChecked />
      <Checkbox size="lg" label="Tamaño 'lg' (grande)" defaultChecked />
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: {
    label: undefined,
  },
};
