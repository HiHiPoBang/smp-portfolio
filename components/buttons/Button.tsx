import tw from 'tailwind-styled-components';
import { BtnProps } from '../../types/button';

const Button = tw.button`
  py-2
  px-4
  ${(props: BtnProps) => (props.isFullWidth ? 'w-full' : 'w-auto')}
  rounded-full
  border
  border-solid
  border-primary
  ${(props: BtnProps) => (props.isGhost ? 'bg-white' : 'bg-primary')}
  transition-[background]
  transition-[color]
  duration-300
  ${(props: BtnProps) => (props.isGhost ? 'hover:bg-primary' : 'hover:bg-purple-200')}
  text-base
  ${(props: BtnProps) => (props.isGhost ? 'text-secondary' : 'text-primary')}
  ${(props: BtnProps) => (props.isGhost ? 'hover:text-white' : 'text-primary')}
`;

export default Button;
