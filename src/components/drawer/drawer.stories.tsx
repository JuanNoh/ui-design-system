import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from '@/components/drawer/drawer.component';
import { useState } from 'react';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DrawerWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded bg-primary px-4 py-2 text-primary-foreground"
      >
        Open Drawer
      </button>
      <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-4">
          <p>This is the drawer content.</p>
        </div>
      </Drawer>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <DrawerWrapper {...args} title="Drawer Title" />,
};

export const Left: Story = {
  render: (args) => (
    <DrawerWrapper {...args} title="Left Drawer" position="left" />
  ),
};

export const Dark: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: (args) => (
    <div className="dark">
      <DrawerWrapper {...args} title="Dark Drawer" />
    </div>
  ),
};
