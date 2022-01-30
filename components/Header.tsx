import tw from 'tailwind-styled-components';
import { SiteLink } from '.';

const Header = () => (
  <>
    <HeaderWrapper>
      <Navigation className="flex justify-end gap-4">
        <SiteLink herf="/">Home</SiteLink>
        <SiteLink herf="/blog">Blog</SiteLink>
      </Navigation>
    </HeaderWrapper>
  </>
);
const HeaderWrapper = tw.header`
  z-10
  fixed
  top-0
  left-0
  w-full
  bg-gray-200
`;
const Navigation = tw.nav`
  flex
  justify-end
  gap-4
  py-3
  px-4
  md:px-12
`;
export default Header;
