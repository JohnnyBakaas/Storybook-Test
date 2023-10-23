import type { Meta, StoryObj } from '@storybook/react';
import { Test } from '../components/test/Test';

const meta = {
    title: 'Test/Test',
    component: Test,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
      content: {}
    },
  } satisfies Meta<typeof Test>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Primary: Story = {
    args: {
        content: "Test",
    },
  };