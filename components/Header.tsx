import styled from 'styled-components';
import SiteLink from './SiteLink';

const Navigation = styled.nav`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  padding: 1rem 2rem;
`;
const Header = () => (
  <header>
    <Navigation className="flex justify-end gap-4">
      <SiteLink herf="/">Home</SiteLink>
      <SiteLink herf="/about">About</SiteLink>
      <SiteLink herf="/blog">Blog</SiteLink>
    </Navigation>
  </header>
);

export default Header;
