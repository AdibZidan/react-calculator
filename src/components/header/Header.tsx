import ThemeToggler from '../theme-toggler/ThemeToggler';
import './Header.scss';

const Header = (): JSX.Element => {
  const title: string = 'calc';

  return (
    <header>
      <h1>
        {title}
      </h1>

      <ThemeToggler />
    </header>
  );
};

export default Header;
