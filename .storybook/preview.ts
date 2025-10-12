import type { Preview } from '@storybook/react-vite';

import { LanguageDecorator } from '../src/shared/config/stroybook/Decorators/LanguageDecorator';
import { RouterDecorator } from '../src/shared/config/stroybook/Decorators/RouterDecorator';
import { ThemaDecorator } from '../src/shared/config/stroybook/Decorators/ThemaDecorator';

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'App theme',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'blue-theme', title: 'Blue Theme' },
          { value: 'pink-theme', title: 'Pink Theme' },
        ],
        dinamicTitle: true,
      },
      defaultValue: 'pink-theme',
    },
    locale: {
      name: 'Locale',
      description: 'App locale',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', title: 'English Theme' },
          { value: 'ja', title: 'Japan Theme' },
        ],
        dinamicTitle: true,
      },
      defaultValue: 'en',
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [RouterDecorator, ThemaDecorator, LanguageDecorator],
};

export default preview;
