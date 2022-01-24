import type { ReactNode } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';

const LinkText = tw.a`
  text-lg
  text-gray-600
  cursor-pointer
  transition-[color]
  duration-300
  hover:color-primary
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
