import React from 'react';
import { Element, ElementProps } from '../../utils';
const styles: ButtonClassName = require('./button.scss');

export interface ButtonClassName {
  button?: string;
}

const Button = (props: ElementProps) => {
  return (
    <Element tagName="button" className={styles.button} {...props}>
      {props.children}
    </Element>
  );
};

export default Button;
