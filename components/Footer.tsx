import tw from 'tailwind-styled-components';
import IconButton from './buttons/IconButton';

const FooterWrapper = tw.footer`
  w-full
  h-[50px]
  bg-gray-200
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <TriangleWrapper className="">
        <Triangle />
      </TriangleWrapper>
      <div className="static md:fixed left-5 bottom-3 p-4 md:p-0 md:bg-transparent">
        <IconButton icon={['fab', 'github-alt']} />
      </div>
    </FooterWrapper>
  );
};
const TriangleWrapper = tw.div`
  fixed
  left-0
  bottom-0
  hidden
  md:inline-block
  h-16
  md:h-auto
  w-full
  md:w-32
  overflow-hidden
  bg-primary
  md:bg-transparent
  opacity-60
`;
const Triangle = tw.div`
  h-48
  -rotate-45
  transform
  origin-bottom-right
  bg-primary
`;
export default Footer;
