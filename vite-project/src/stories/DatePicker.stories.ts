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
      setDate: (date: Date) => {}
    },
  } satisfies Meta<typeof DatePicker>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const DatePickerStandard: Story = {
    args: {
      setDate: (date: Date) => {}
    }
  };