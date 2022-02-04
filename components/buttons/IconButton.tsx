import tw from 'tailwind-styled-components';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SizeProp = 'xl' | 'lg' | 'md' | 'sm';
type VariantProp = 'primary' | 'secondary';
type BtnProps = {
  $size: SizeProp;
  $variant: VariantProp;
};
type IconBtnProps = {
  $icon: IconProp;
  $size: SizeProp;
  $variant: VariantProp;
};
const WIDTH_MAP = {
  xl: 'w-14',
  lg: 'w-12',
  md: 'w-10',
  sm: 'w-18',
};
const findWitdhStyle = (size: SizeProp) => WIDTH_MAP[size];
const SIZE_MAP = {
  xl: 'text-4xl',
  lg: 'text-2xl',
  md: 'text-xl',
  sm: 'text-lg',
};
const findSizeStyle = (size: SizeProp) => SIZE_MAP[size];
const VARIANT_MAP = {
  primary: 'text-primary',
  secondary: 'text-secondary',
};
const findVariantStyle = (variant: VariantProp) => VARIANT_MAP[variant];
const Button = tw.button<BtnProps>`
  ${(props) => findWitdhStyle(props.$size)}
  ${(props) => findSizeStyle(props.$size)}
  ${(props) => findVariantStyle(props.$variant)}
`;
const IconButton = ({ $icon, $size, $variant }: IconBtnProps) => {
  return (
    <Button $size={$size} $variant={$variant}>
      <FontAwesomeIcon icon={$icon} />
    </Button>
  );
};
export default IconButton;
