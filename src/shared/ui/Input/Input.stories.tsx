import type { Meta, StoryObj } from '@storybook/react-vite';
import { BiSearch } from 'react-icons/bi';

import { AppIcon } from '../AppIcon/AppIcon';

import { Input } from './input';

const meta = {
  title: 'shared/Input ',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { value: '', placeholder: '入力してください' },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Default',
  },
};

export const WhiteValue: Story = {
  args: {
    value: 'white value',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    value: '12345678',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const WithIcon: Story = {
  args: {
    Icon: <AppIcon size={20} Icon={BiSearch} />,
  },
};
