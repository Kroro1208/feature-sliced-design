import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeaderPage } from './HeaderPage';

const meta = {
  title: 'widgets/Header',
  component: HeaderPage,
} satisfies Meta<typeof HeaderPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
