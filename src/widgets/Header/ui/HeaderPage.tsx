import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { BiMapPin } from 'react-icons/bi';
import { IoSearchCircleOutline } from 'react-icons/io5';
import { PiUserCircleMinus } from 'react-icons/pi';
import { useNavigate } from 'react-router';

import { routePaths } from '@/shared/config';
import { AppIcon, Button, Input } from '@/shared/ui';

import styles from './Header.module.scss';
import { LanguageSwitcher } from './LanguageSwitcher/LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher';

export const HeaderPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(routePaths.login);
  };
  return (
    <header className={styles.header}>
      <div className={styles.section}>
        <FontAwesomeIcon icon={faCloud} size="2xl" />
        <Button>
          <AppIcon Icon={BiMapPin} />
          <span>tokyo</span>
        </Button>
      </div>
      <div>
        <Input
          placeholder={t('Search...')}
          Icon={
            <AppIcon
              size={18}
              Icon={IoSearchCircleOutline}
              theme="background"
            />
          }
        />
      </div>
      <div className={styles.section}>
        <Button theme="secondary">{t('Cart')}</Button>
        <Button onClick={handleNavigate} theme="outline">
          <AppIcon Icon={PiUserCircleMinus} />
          <span>{t('Login')}</span>
        </Button>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </header>
  );
};
