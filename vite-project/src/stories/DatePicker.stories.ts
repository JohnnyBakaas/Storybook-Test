import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '../components/datePicker/DatePicker'; 

const meta = {
    title: 'Test/DatePicker',
    component: DatePicker,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
  } satisfies Meta<typeof DatePicker>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Primary: Story = {
    args: {
    }
  };