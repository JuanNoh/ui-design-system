import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

/**
 * Componente de botón accesible, con variantes (`primary`, `secondary`) y tamaños (`sm`, `md`, `lg`). Incluye estado `isLoading` y `disabled`.
 * */

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Guardar cambios',
    variant: 'primary',
    size: 'md',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Guardar cambios',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Acción secundaria',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'No disponible',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Cargando…',
  },
};
