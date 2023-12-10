import type { Meta, StoryObj } from '@storybook/react';

// import { Button } from '@/components/ui/button';
import { Button } from '@/components/button';

const meta: Meta<typeof Button> = {
  title: 'Shadcn Button',
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  // render: () => <Button variant={'outline'}>Click me</Button>,
  args: {
    variant: 'outline',
    label: 'aaaaaaaaaaa'
  }
};
