import type { ReactNode } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { H6_FONT_SIZE, PRIMARY_FONT_COLOR, SECONDARY_FONT_COLOR } from './stylesConfig';

const LinkText = styled.a`
  font-size: ${H6_FONT_SIZE};
  color: ${SECONDARY_FONT_COLOR};
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: ${PRIMARY_FONT_COLOR};
  }
`;

type Porps = {
  herf: string;
  children?: ReactNode;
};
const SiteLink = ({ herf, children }: Porps) => (
  <Link href={herf}>
    <LinkText>{children}</LinkText>
  </Link>
);

export default SiteLink;
