import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ReactNode } from 'react';
import type { IconName } from '@fortawesome/fontawesome-common-types';
import { BtnProps } from '../../types/button';
import * as R from 'ramda';

type iconPos = 'left' | 'right';
type Props = BtnProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    $iconName: IconName;
    $iconPos?: iconPos;
    $children: ReactNode;
  };
const ButtonWithIcon = (props: Props) => {
  const { $iconName, $iconPos = 'left', children, ...btnProp } = props;
  return (
    <Button className="flex items-center" {...btnProp}>
      {R.equals($iconPos, 'left') ? (
        <>
          <Icon $iconName={$iconName} $iconPos={$iconPos} />
          {children}
        </>
      ) : (
        <>
          {children}
          <Icon $iconName={$iconName} $iconPos={$iconPos} />
        </>
      )}
    </Button>
  );
};
const Icon = ({ $iconName, $iconPos }: { $iconName: IconName; $iconPos: iconPos }) => {
  return (
    <div className={`w-4 mt-0.5 ${R.equals($iconPos, 'left') ? 'mr-2' : 'ml-2'}`}>
      <FontAwesomeIcon icon={['fas', $iconName]} />
    </div>
  );
};
export default ButtonWithIcon;
