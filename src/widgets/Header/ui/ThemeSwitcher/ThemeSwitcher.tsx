import { CiCircleRemove } from 'react-icons/ci';

import { useTheme } from '@/shared/config';
import { AppIcon, Button } from '@/shared/ui';

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <div>
      <Button onClick={toggleTheme} theme="ghost">
        <AppIcon Icon={CiCircleRemove} filled />
      </Button>
    </div>
  );
};
