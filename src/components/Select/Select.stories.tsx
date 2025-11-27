import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import type { SelectOption } from './Select.types';

const options: SelectOption[] = [
  { value: 'option-1', label: 'Opción 1' },
  { value: 'option-2', label: 'Opción 2' },
  {
    value: 'option-3',
    label: (
      <p className="text-sm">
        <span className="font-medium">Opción con descripción</span>
        <span className="block text-xs text-neutral-500">
          Esto es un label personalizado
        </span>
      </p>
    ),
  },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  args: {
    size: 'md',
    fullWidth: true,
    options,
    placeholder: 'Selecciona una opción…',
    label: 'País',
  },
  parameters: { a11y: { disable: false } },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const WithError: Story = {
  args: {
    label: 'RFC',
    error: 'Debes seleccionar una opción',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Estado',
    disabled: true,
    value: 'option-1',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Select size="sm" label="Tamaño sm" options={options} placeholder="sm" />
      <Select size="md" label="Tamaño md" options={options} placeholder="md" />
      <Select size="lg" label="Tamaño lg" options={options} placeholder="lg" />
    </div>
  ),
};
