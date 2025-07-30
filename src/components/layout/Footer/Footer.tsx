import styles from './Footer.module.scss';

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        © {new Date().getFullYear()} Copyright Text
      </div>
      <ul id='nav-mobile'>
        <li>
          <a href='#'>Repo</a>
        </li>
      </ul>
    </footer>
  );
};
