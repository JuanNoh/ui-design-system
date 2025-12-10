import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '@/components/tabs/tabs.component';
import { useState } from 'react';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  args: {
    tabs: [
      {
        id: 'general',
        label: 'General',
        content: (
          <div>
            <h3 className="font-medium mb-1">Configuración general</h3>
            <p className="text-sm text-neutral-600">
              Ajusta las opciones básicas de tu cuenta.
            </p>
          </div>
        ),
      },
      {
        id: 'security',
        label: 'Seguridad',
        content: (
          <div>
            <h3 className="font-medium mb-1">Seguridad</h3>
            <p className="text-sm text-neutral-600">
              Gestiona contraseñas, sesiones y dispositivos.
            </p>
          </div>
        ),
      },
      {
        id: 'notifications',
        label: 'Notificaciones',
        content: (
          <div>
            <h3 className="font-medium mb-1">Notificaciones</h3>
            <p className="text-sm text-neutral-600">
              Controla qué mensajes y alertas quieres recibir.
            </p>
          </div>
        ),
      },
    ],
    defaultValue: 'general',
    size: 'md',
    variant: 'underline',
    fullWidth: false,
  },
  parameters: {
    a11y: { disable: false },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const SolidVariant: Story = {
  args: {
    variant: 'solid',
  },
};

export const WithDisabledTab: Story = {
  args: {
    tabs: [
      {
        id: 'details',
        label: 'Detalles',
        content: (
          <p className="text-sm text-neutral-700">
            Información principal del elemento.
          </p>
        ),
      },
      {
        id: 'history',
        label: 'Historial',
        content: (
          <p className="text-sm text-neutral-700">
            Acciones realizadas recientemente.
          </p>
        ),
      },
      {
        id: 'advanced',
        label: 'Avanzado',
        disabled: true,
        content: (
          <p className="text-sm text-neutral-700">
            Opciones avanzadas (deshabilitadas en este ejemplo).
          </p>
        ),
      },
    ],
    defaultValue: 'details',
  },
};

function ControlledTabsExample(args: React.ComponentProps<typeof Tabs>) {
  const [active, setActive] = useState('general');

  return (
    <div className="space-y-4">
      <Tabs {...args} value={active} onChange={(id) => setActive(id)} />

      <div className="text-sm text-neutral-700">
        Tab activo: <span className="font-semibold">{active}</span>
      </div>
    </div>
  );
}

export const Controlled: Story = {
  render: (args) => <ControlledTabsExample {...args} />,
};
