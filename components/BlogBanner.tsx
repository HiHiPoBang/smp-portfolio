import styled from 'styled-components';
import NextImage from 'next/image'
import type { ImageProps } from 'next/image'


type Props = {
  width: string | number | null | undefined,
};

const ImageContainer = styled.div`
  position: relative;
  width: ${({width}: Props) => width || 'auto'};
  max-width: 1240px;
  height: 370px;
`

const Image = ({width, alt, ...otherProps}: ImageProps) => (
  <ImageContainer width={width}>
    <NextImage
      alt={alt}
      layout="fill"
      width="100%"
      height="100%"
      objectFit="cover"
      {...otherProps}
    />
  </ImageContainer>
)

export default Image;