import * as React from 'react';
import { ElementProps, Element } from '../../utils';
const styles: TextClassName = require('./text.scss');

export interface TextClassName {
  text?: string;
}

const Text = (props: ElementProps) => {
  return (
    <Element className={styles.text} {...props}>
      {props.children}
    </Element>
  );
};
export default Text;
