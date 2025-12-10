import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '@/components/popover/popover.component';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <div className="flex h-[350px] w-full items-center justify-center">
      <Popover
        trigger={
          <button className="px-4 py-2 border rounded-md">Open Popover</button>
        }
        content={
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
          </div>
        }
      />
    </div>
  ),
};

export const Dark: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    trigger: (
      <button className="rounded bg-primary px-4 py-2 text-primary-foreground">
        Open Popover (Dark)
      </button>
    ),
    content: (
      <div>
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
    ),
  },
  render: (args) => (
    <div className="dark p-10">
      <Popover {...args} />
    </div>
  ),
};
