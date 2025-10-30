import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

/**
 * Componente Textarea para entrada de texto.
 */

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  args: {
    placeholder: 'Escribe un comentario…',
    size: 'md',
    fullWidth: true,
    rows: 4,
  },
  parameters: {
    a11y: { disable: false },
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placeholder: 'Escribe tu biografía…',
    label: 'Biografía',
  },
};

export const WithError: Story = {
  args: {
    label: 'Descripción del Bug',
    placeholder: 'Pasos para reproducir el error...',
    error: 'La descripción no puede estar vacía',
    value: '',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Notas (solo lectura)',
    disabled: true,
    value:
      'Este es un texto pre-cargado que no se puede editar porque el campo está deshabilitado.',
  },
};

export const WithCustomRows: Story = {
  args: {
    label: 'Comentario largo (10 filas)',
    rows: 10,
    placeholder: 'Escribe un ensayo aquí...',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Textarea size="sm" placeholder="sm" label="Tamaño sm" rows={3} />
      <Textarea size="md" placeholder="md" label="Tamaño md" rows={3} />
      <Textarea size="lg" placeholder="lg" label="Tamaño lg" rows={3} />
    </div>
  ),
};
