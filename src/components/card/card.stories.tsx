import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/card/card.component';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <button className="rounded bg-secondary px-4 py-2 text-sm">
          Cancel
        </button>
        <button className="rounded bg-primary px-4 py-2 text-sm text-primary-foreground">
          Deploy
        </button>
      </CardFooter>
    </Card>
  ),
};

export const Dark: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: (args) => (
    <div className="dark">
      <Card {...args} className="w-[350px]">
        <CardHeader>
          <CardTitle>Dark Mode Card</CardTitle>
          <CardDescription>This is how it looks in dark mode.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Dark content area</p>
        </CardContent>
        <CardFooter>
          <button className="rounded bg-primary px-4 py-2 text-sm text-primary-foreground">
            Action
          </button>
        </CardFooter>
      </Card>
    </div>
  ),
};
