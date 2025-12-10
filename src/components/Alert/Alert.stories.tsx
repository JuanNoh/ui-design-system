import type { Meta, StoryObj } from '@storybook/react';
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from '@/components/alert/alert.component';

/**
 * Componente Alert para mostrar mensajes importantes al usuario.
 */

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  args: {
    variant: 'default',
    showIcon: true,
    dismissible: false,
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your profile has been updated successfully.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>Your subscription is about to expire.</AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  args: {
    variant: 'info',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Info</AlertTitle>
      <AlertDescription>
        New features are available in the dashboard.
      </AlertDescription>
    </Alert>
  ),
};

export const NoIcon: Story = {
  args: {
    showIcon: false,
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Note</AlertTitle>
      <AlertDescription>This alert has no icon.</AlertDescription>
    </Alert>
  ),
};

export const Dismissible: Story = {
  args: {
    dismissible: true,
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Dismissible Alert</AlertTitle>
      <AlertDescription>
        Click the X button to close this alert.
      </AlertDescription>
    </Alert>
  ),
};
