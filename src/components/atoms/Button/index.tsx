import React from 'react';
import { ElementProps, Element } from '../../utils';

export interface ButtonClassNames {
  button?: string;
}

export interface ButtonProps extends ElementProps {
  classNames?: ButtonClassNames;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const classNames = props.classNames || {};
  const { children = undefined, onClick = undefined, ...rest } = props;

  return (
    <Element tagName="button" className={classNames.button} {...rest}>
      {children}
    </Element>
  );

  // const klassName = `${props.className} ${classNames.button}`;
  // return (
  //   <button onClick={onClick} className={klassName} aria-pressed="false" {...rest}>
  //     {children}
  //   </button>
  // );
};

export default Button;
