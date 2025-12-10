import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '@/components/stepper/stepper.component';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    currentStep: { control: { type: 'number', min: 1, max: 4 } },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const steps = [
  { id: 1, label: 'Account', description: 'Enter details' },
  { id: 2, label: 'Profile', description: 'Add photo' },
  { id: 3, label: 'Settings', description: 'Preferences' },
  { id: 4, label: 'Complete', description: 'Review' },
];

export const Default: Story = {
  args: {
    steps,
    currentStep: 2,
  },
};

export const Dark: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    steps,
    currentStep: 3,
  },
  render: (args) => (
    <div className="dark p-10">
      <Stepper {...args} />
    </div>
  ),
};
