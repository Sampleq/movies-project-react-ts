import styles from './Header.module.scss';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1>
        <a href='#'>React Movies</a>
      </h1>
      <ul id='nav-mobile'>
        <li>
          <a href='#'>Repo</a>
        </li>
      </ul>
    </header>
  );
};
