import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@/components/switch/switch.component';
import { useState } from 'react';

/**
 * Componente Switch (o Toggle) para selecciones booleanas con un feedback visual moderno.
 */

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  args: {
    label: 'Recibir notificaciones por email',
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

const SwitchControlled = (args: Story['args']) => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      {...args}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export const Basic: Story = {
  render: SwitchControlled,
  args: {
    label: 'Modo oscuro',
  },
};

export const DefaultChecked: Story = {
  args: {
    label: 'Activar característica',
    defaultChecked: true,
  },
};

export const WithError: Story = {
  render: SwitchControlled,
  args: {
    label: 'Debes aceptar la política de privacidad',
    error: 'Este campo es obligatorio',
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Función deshabilitada',
    disabled: true,
    checked: true,
  },
};

export const DisabledUnchecked: Story = {
  args: {
    label: 'Función deshabilitada (inactiva)',
    disabled: true,
    checked: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch size="sm" label="Tamaño 'sm' (pequeño)" defaultChecked />
      <Switch size="md" label="Tamaño 'md' (mediano)" defaultChecked />
      <Switch size="lg" label="Tamaño 'lg' (grande)" defaultChecked />
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: {
    label: undefined,
    defaultChecked: true,
  },
};
