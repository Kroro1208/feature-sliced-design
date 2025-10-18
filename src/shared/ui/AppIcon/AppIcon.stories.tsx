import type { Meta, StoryObj } from '@storybook/react-vite';
import { BiSearch } from 'react-icons/bi';

import { AppIcon } from './AppIcon';

const meta = {
  title: 'shared/AppIcon ',
  component: AppIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { Icon: BiSearch },
} satisfies Meta<typeof AppIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    filled: true,
  },
};

export const WithBackground: Story = {
  args: {
    theme: 'background',
  },
};
