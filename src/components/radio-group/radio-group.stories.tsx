import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from '@/components/radio-group/radio-group.component';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  args: {
    name: 'gender',
    label: 'Género',
    direction: 'column',
    size: 'md',
    fullWidth: false,
    options: [
      { label: 'Hombre', value: 'male' },
      { label: 'Mujer', value: 'female' },
      { label: 'Otro', value: 'other' },
    ],
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

export const WithDescription: Story = {
  args: {
    description: 'Selecciona una opción. Esta información es opcional.',
  },
};

export const Row: Story = {
  args: {
    direction: 'row',
    label: 'Frecuencia',
    name: 'frequency',
    options: [
      { label: 'Diario', value: 'daily' },
      { label: 'Semanal', value: 'weekly' },
      { label: 'Mensual', value: 'monthly' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Método de contacto',
    name: 'contact',
    options: [
      { label: 'Correo electrónico', value: 'email' },
      { label: 'Teléfono', value: 'phone' },
    ],
    defaultValue: 'email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Tipo de plan',
    name: 'plan',
    options: [
      { label: 'Básico', value: 'basic' },
      { label: 'Pro', value: 'pro' },
      { label: 'Enterprise', value: 'enterprise' },
    ],
    error: 'Debes seleccionar una opción',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <RadioGroup
        name="size-sm"
        label="Tamaño sm"
        size="sm"
        options={[
          { label: 'Opción 1', value: '1' },
          { label: 'Opción 2', value: '2' },
        ]}
        defaultValue="1"
      />

      <RadioGroup
        name="size-md"
        label="Tamaño md"
        size="md"
        options={[
          { label: 'Opción 1', value: '1' },
          { label: 'Opción 2', value: '2' },
        ]}
        defaultValue="1"
      />

      <RadioGroup
        name="size-lg"
        label="Tamaño lg"
        size="lg"
        options={[
          { label: 'Opción 1', value: '1' },
          { label: 'Opción 2', value: '2' },
        ]}
        defaultValue="1"
      />
    </div>
  ),
};
