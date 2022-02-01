import type { ReactNode } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';

const LinkText = tw.span`
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
    <a>
      <LinkText>{children}</LinkText>
    </a>
  </Link>
);

export default SiteLink;
