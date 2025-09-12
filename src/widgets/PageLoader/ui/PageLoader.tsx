import { Spinner } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import styles from './PageLoader.module.scss';
export const PageLoader = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{t('pageLoader.loading')}</div>
      <Spinner size="lg" />
    </div>
  );
};
