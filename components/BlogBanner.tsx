import tw from 'tailwind-styled-components';
import NextImage from 'next/image';
import type { ImageProps } from 'next/image';

const ImageContainer = tw.div`
  relative
  mt-4
  w-full
  h-[200px]
  md:h-[400px]
`;

const Image = ({ alt, ...otherProps }: ImageProps) => (
  <ImageContainer>
    <NextImage alt={alt} layout="fill" objectFit="cover" {...otherProps} />
  </ImageContainer>
);

export default Image;
