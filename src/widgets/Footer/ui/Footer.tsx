import { routePaths } from '@/shared/config';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import styles from './Footer.module.scss';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t('footer.about')}</h3>
            <ul className={styles.linkList}>
              <li className={styles.link}>
                <Link to={routePaths.home}>{t('footer.ourBranches')}</Link>
              </li>
              <li className={styles.link}>
                <Link to={routePaths.home}>{t('footer.changeLog')}</Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t('footer.quickLinks')}</h3>
            <ul className={styles.linkList}>
              <li className={styles.link}>
                <Link to={routePaths.home}>{t('footer.faqs')}</Link>
              </li>
              <li className={styles.link}>
                <Link to={routePaths.home}>{t('footer.recipes')}</Link>
              </li>
              <li className={styles.link}>
                <Link to={routePaths.home}>{t('footer.contactUs')}</Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t('footer.helpSuport')}</h3>
            <ul className={styles.linkList}>
              <li className={styles.link}>
                <Link to={routePaths.home}>{t('footer.termOfServe')}</Link>
              </li>
              <li className={styles.link}>
                <Link to={routePaths.home}>{t('footer.privacyPolicy')}</Link>
              </li>
              <li className={styles.link}>
                <Link to={routePaths.home}>{t('footer.security')}</Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t('footer.company')}</h3>
            <ul className={styles.linkList}>
              <li className={styles.link}>
                <Link to={routePaths.home}>{t('footer.blog')}</Link>
              </li>
              <li className={styles.link}>
                <Link to={routePaths.home}>{t('footer.contact')}</Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t('footer.social')}</h3>
            <ul className={styles.linkList}>
              <li className={styles.link}>
                <Link to={routePaths.home}>{t('footer.facebook')}</Link>
              </li>
              <li className={styles.link}>
                <Link to={routePaths.home}>{t('footer.instagram')}</Link>
              </li>
              <li className={styles.link}>
                <Link to={routePaths.home}>{t('footer.twitter')}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
