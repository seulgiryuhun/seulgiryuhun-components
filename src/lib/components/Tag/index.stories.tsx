import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '@/lib/components/Tag';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Tag',
  component: Tag,
  argTypes: {
    children: { control: 'text', description: '켰을때 배경' },
    color: { control: 'color', description: '색상' },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'text',
    color: 'gray',
    isReadOnly: false,
    textColor: 'white',
  },
};
