import styled from 'styled-components';
import Link from 'next/link';
import { H6_FONT_SIZE, PRIMARY_FONT_COLOR, SECONDARY_FONT_COLOR } from './stylesConfig';

const Navigation = styled.nav`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  padding: 1rem;
  background: #ffffff;
  border: 1px solid #ddd;
`;
const LinkText = styled.span`
  padding: 0 1rem;
  font-size: ${H6_FONT_SIZE};
  color: ${SECONDARY_FONT_COLOR};
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: ${PRIMARY_FONT_COLOR};
  }
`;
const Header = () => (
  <header>
    <Navigation>
      <Link href="/">
        <a>
          <LinkText>Home</LinkText>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <LinkText>About</LinkText>
        </a>
      </Link>
      <Link href="/blog">
        <a>
          <LinkText>Blog</LinkText>
        </a>
      </Link>
    </Navigation>
  </header>
);

export default Header;
