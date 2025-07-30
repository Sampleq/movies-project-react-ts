import styles from './Preloader.module.scss';

interface PreloaderProps {}

export const Preloader = ({}: PreloaderProps) => {
  return (
    <div className={styles.preloader}>
      <div className={styles.progress}>
        <div className={styles.indeterminate}></div>
      </div>
    </div>
  );
};
