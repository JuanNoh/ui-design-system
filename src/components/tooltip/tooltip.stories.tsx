import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '@/components/tooltip/tooltip.component';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <div className="p-10">
      <Tooltip content="Add to library">
        <button className="px-4 py-2 bg-slate-900 text-white rounded-md text-sm">
          Hover me
        </button>
      </Tooltip>
    </div>
  ),
};

export const Dark: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    content: 'Dark mode tooltip',
    children: (
      <button className="rounded bg-primary px-4 py-2 text-primary-foreground">
        Hover me (Dark)
      </button>
    ),
  },
  render: (args) => (
    <div className="dark p-10">
      <Tooltip {...args} />
    </div>
  ),
};
