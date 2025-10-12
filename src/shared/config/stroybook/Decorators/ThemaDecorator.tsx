import type { Decorator } from '@storybook/react-vite';

export const ThemaDecorator: Decorator = (Story, context) => {
  return (
    <div className="pink-theme">
      <Story {...context} />
    </div>
  );
};
