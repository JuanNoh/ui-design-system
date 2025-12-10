import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/button/button.component';

/**
 * Componente de botón accesible, con variantes (`default`, `secondary`, `outline`, `ghost`, `link`, `destructive`) y tamaños (`default`, `sm`, `lg`, `icon`). Incluye estado `isLoading` y `disabled`.
 * */

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Guardar cambios',
    variant: 'default',
    size: 'default',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'Guardar cambios',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Acción secundaria',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Eliminar',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
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
