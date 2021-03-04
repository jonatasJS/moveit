import { useContext } from 'react';
import { FiHome as Home } from 'react-icons/fi';
import { HiOutlineLightBulb as Light } from 'react-icons/hi';
import Link from 'next/link';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Container, LightSwitch, LinkToHome } from './styles';

const Sidebar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <LinkToHome>
        <Link href="/" >
          <img src="/logo.svg" alt="Move.it" />
        </Link>
      </LinkToHome>
      <nav>
        <Home size={32} />
        <LightSwitch activeTheme={theme}>
          <Light onClick={toggleTheme} size={32} />
        </LightSwitch>
      </nav>
    </Container>
  );
};

export default Sidebar;
