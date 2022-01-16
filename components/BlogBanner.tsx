import styled from 'styled-components';
import NextImage from 'next/image';
import type { ImageProps } from 'next/image';

const ImageContainer = styled.div`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 250px;
`;

const Image = ({ alt, ...otherProps }: ImageProps) => (
  <ImageContainer>
    <NextImage alt={alt} layout="fill" objectFit="cover" {...otherProps} />
  </ImageContainer>
);

export default Image;
