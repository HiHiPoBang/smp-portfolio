import tw from 'tailwind-styled-components/dist/tailwind';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

const Button = tw.button`
  text-4xl
`;
const IconButton = ({ icon }: FontAwesomeIconProps) => {
  return (
    <Button>
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
};
export default IconButton;
