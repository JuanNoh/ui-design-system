import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

/**
 * Componente Avatar: Muestra una imagen o las iniciales de un nombre.
 */

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    name: 'Juan Noh',
    size: 'md',
  },
  parameters: {
    a11y: { disable: false },
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    name: 'Juan Noh',
    src: 'https://i.pravatar.cc/100?u=juan-noh',
  },
};

export const InitialsOnly: Story = {
  args: {
    name: 'Arlene Mccoy',
    src: undefined, // Sin imagen
  },
};

export const InitialsOneWord: Story = {
  args: {
    name: 'Gemini',
    src: undefined,
  },
};

export const ImageErrorFallback: Story = {
  args: {
    name: 'Devon Webb',
    src: 'https://url-que-no-existe.com/img.png',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        size="sm"
        name="Wade Cooper"
        src="https://i.pravatar.cc/100?u=wade"
      />
      <Avatar
        size="md"
        name="Arlene Mccoy"
        src="https://i.pravatar.cc/100?u=arlene"
      />
      <Avatar
        size="lg"
        name="Devon Webb"
        src="https://i.pravatar.cc/100?u=devon"
      />
      <Avatar size="lg" name="Tom Cook" />
    </div>
  ),
};
