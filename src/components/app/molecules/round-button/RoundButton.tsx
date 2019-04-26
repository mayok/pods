import * as React from 'react';
import Button, { ButtonClassNames } from '../../../lib/atoms/button/Button';

const roundButtonClassNames: ButtonClassNames = require('./round-button.scss');

export interface RoundButtonProps {
  children?: React.ReactNode;
  classNames?: ButtonClassNames;
  onClick?: () => void;
}

const RoundButton = (props: RoundButtonProps) => {
  const classNames = props.classNames || roundButtonClassNames;
  const { children = undefined, ...rest } = props;

  return (
    <Button classNames={classNames} {...rest}>
      {children}
    </Button>
  );
};

export default RoundButton;
