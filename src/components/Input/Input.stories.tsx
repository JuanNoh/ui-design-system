import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

/**
 * Componente Input, con variantes (`primary`, `secondary`) y tamaños (`sm`, `md`, `lg`). Incluye estado `disabled`.
 * */

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Escribe tu nombre…',
    size: 'md',
    fullWidth: true,
  },
  parameters: { a11y: { disable: false } },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placeholder: 'Escribe tu nombre…',
    label: 'Nombre',
  },
};

export const WithError: Story = {
  args: {
    label: 'RFC',
    placeholder: 'XAXX010101000',
    error: 'El RFC no es válido',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Usuario',
    disabled: true,
    value: 'juan.noh',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input size="sm" placeholder="sm" label="Tamaño sm" />
      <Input size="md" placeholder="md" label="Tamaño md" />
      <Input size="lg" placeholder="lg" label="Tamaño lg" />
    </div>
  ),
};
