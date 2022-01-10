import styled from "styled-components";
import Link from 'next/link';

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  padding: 1rem;
  background: #FFFFFF;
`;
const PageLink = styled.a`
  padding: 0 1rem;
  font-size: 1.25rem;
  color: #000000;
  cursor: pointer;
`;
const Header = () => (
  <header>
    <Navigation>
      <Link href="/">
        <PageLink>Home</PageLink>
      </Link>
      <Link href="/about">
        <PageLink>About</PageLink>
      </Link>
      <Link href="/blog">
        <PageLink>Blog</PageLink>
      </Link>
    </Navigation>
  </header>
);

export default Header;