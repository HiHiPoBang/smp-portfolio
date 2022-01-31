import tw from 'tailwind-styled-components';

type Props = {
  isFullWidth?: boolean;
  isGhost?: boolean;
};
const Button = tw.button`
  py-2
  px-4
  ${(props: Props) => (props.isFullWidth ? 'w-full' : 'w-auto')}
  rounded-full
  border
  border-solid
  border-primary
  ${(props: Props) => (props.isGhost ? 'bg-white' : 'bg-primary')}
  transition-[background]
  transition-[color]
  duration-300
  ${(props: Props) => (props.isGhost ? 'hover:bg-primary' : 'hover:bg-purple-200')}
  ${(props: Props) => (props.isGhost ? 'text-secondary' : 'text-primary')}
  ${(props: Props) => (props.isGhost ? 'hover:text-white' : 'text-primary')}
`;

export default Button;
