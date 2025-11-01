import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert.tsx';

/**
 * Componente Alert para mostrar mensajes importantes al usuario.
 */

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  args: {
    title: 'Información importante',
    children: 'Este es el cuerpo del mensaje de la alerta.',
    variant: 'info',
    showIcon: true,
    dismissible: false,
  },
  parameters: {
    a11y: { disable: false },
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Información',
    children: 'El sistema se actualizará el próximo martes a las 10 PM.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: '¡Éxito!',
    children: 'Tu perfil se ha guardado correctamente.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Advertencia',
    children: 'Tu contraseña está a punto de expirar en 3 días.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error de validación',
    children: 'El campo de correo electrónico no es válido.',
  },
};

export const Dismissible: Story = {
  args: {
    variant: 'success',
    title: '¡Éxito!',
    children: 'Tu perfil se ha guardado correctamente.',
    dismissible: true,
  },
};

export const NoIcon: Story = {
  args: {
    variant: 'info',
    title: 'Información (sin ícono)',
    children: 'El sistema se actualizará el próximo martes a las 10 PM.',
    showIcon: false,
  },
};

export const MessageOnly: Story = {
  args: {
    variant: 'warning',
    title: undefined,
    children: 'Tu contraseña está a punto de expirar en 3 días.',
  },
};
