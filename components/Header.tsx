import styled from 'styled-components';
import Link from 'next/link';

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  padding: 1rem;
  background: #ffffff;
`;
const LinkText = styled.span`
  padding: 0 1rem;
  font-size: 1.25rem;
  color: #000000;
  cursor: pointer;
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
