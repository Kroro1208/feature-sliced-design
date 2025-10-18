import { useTranslation } from 'react-i18next';
import { TbFaceIdError } from 'react-icons/tb';

import { Button } from '@/shared/ui';

import styles from './PageError.module.scss';

const PageError = () => {
  const { t } = useTranslation();
  const handleReloadClick = () => {
    location.reload();
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <TbFaceIdError className={styles.icon} size={150} />
        <h3 className={styles.title}>{t('pageError.title')}</h3>
        <p className={styles.description}>{t('pageError.description')}</p>
        <Button
          onClick={handleReloadClick}
          className={styles.button}
          theme="primary"
          form="rounded"
        >
          {t('pageError.reload')}
        </Button>
      </div>
    </div>
  );
};

export default PageError;
