import tw from 'tailwind-styled-components';
import SiteLink from './SiteLink';

const Navigation = tw.nav`
  z-10
  fixed
  top-0
  left-0
  flex
  justify-end
  w-full
  py-4
  px-8
  bg-gray-200
`;
const Header = () => (
  <header>
    <Navigation className="flex justify-end gap-4">
      <SiteLink herf="/">Home</SiteLink>
      <SiteLink herf="/blog">Blog</SiteLink>
    </Navigation>
  </header>
);

export default Header;
