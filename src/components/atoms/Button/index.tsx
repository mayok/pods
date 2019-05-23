import React from 'react';
import { Element, ElementProps } from '../../utils';
const styles: ButtonClassName = require('./button.scss');

export interface ButtonClassName {
  button?: string;
  roundButton?: string;
}

const Button = (props: ElementProps) => {
  return (
    <Element tagName="button" classNames={styles.button} {...props}>
      {props.children}
    </Element>
  );
};

export const RoundButton = (props: ElementProps) => {
  return (
    <Button classNames={styles.roundButton} {...props}>
      {props.children}
    </Button>
  );
};

export default Button;
