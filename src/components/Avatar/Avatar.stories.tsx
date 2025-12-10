import type { Meta, StoryObj } from '@storybook/react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/avatar/avatar.component';

/**
 * Componente Avatar: Muestra una imagen o las iniciales de un nombre.
 * Ahora utiliza el patrón de componentes compuestos (Compound Components).
 */

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  args: {
    size: 'default',
  },
};

export const WithImage: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://i.pravatar.cc/100?u=juan-noh" alt="Juan Noh" />
      <AvatarFallback>JN</AvatarFallback>
    </Avatar>
  ),
  args: {
    size: 'default',
  },
};

export const InitialsOnly: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>AM</AvatarFallback>
    </Avatar>
  ),
  args: {
    size: 'default',
  },
};

export const ImageErrorFallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage
        src="https://url-que-no-existe.com/img.png"
        alt="Devon Webb"
      />
      <AvatarFallback>DW</AvatarFallback>
    </Avatar>
  ),
  args: {
    size: 'default',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarImage src="https://i.pravatar.cc/100?u=wade" alt="Wade" />
        <AvatarFallback>WC</AvatarFallback>
      </Avatar>
      <Avatar size="default">
        <AvatarImage src="https://i.pravatar.cc/100?u=arlene" alt="Arlene" />
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://i.pravatar.cc/100?u=devon" alt="Devon" />
        <AvatarFallback>DW</AvatarFallback>
      </Avatar>
    </div>
  ),
};
