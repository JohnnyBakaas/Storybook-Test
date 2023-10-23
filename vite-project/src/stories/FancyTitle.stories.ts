import type { Meta, StoryObj } from '@storybook/react';
import { FancyTitle } from '../components/fancyTitle/FancyTitle';

const meta = {
    title: 'Test/FancyTitle',
    component: FancyTitle,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: {},
        mode: {}
    },
  } satisfies Meta<typeof FancyTitle>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Primary: Story = {
    args: {
        title: "Tittel",
        mode: "dark"
    }
  };