import * as React from 'react';
import { Link } from 'react-router-dom';
import { ElementProps } from '../../utils';
const styles: AnchorClassName = require('./anchor.scss');

export interface AnchorClassName {
  anchor?: string;
}

export interface AnchorProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

const Anchor = (props: AnchorProps) => {
  const { href = '/' } = props;

  return (
    <a href={href} className={styles.anchor} {...props}>
      {props.children}
    </a>
  );
};
export default Anchor;
