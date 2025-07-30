import styles from './Header.module.scss';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1>React Movies</h1>
      <ul>
        <li>
          <a
            href='https://github.com/Sampleq/movies-project-react-ts'
            target='_blank'
          >
            Repo
          </a>
        </li>
      </ul>
    </header>
  );
};
