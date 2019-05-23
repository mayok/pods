import * as React from 'react';
import { Link } from 'react-router-dom';
import { ElementProps } from '../../utils';
const styles: AnchorClassName = require('./anchor.scss');

export interface AnchorClassName {
  anchor?: string;
}

export interface AnchorProps extends ElementProps {
  to?: string;
}

const Anchor = (props: AnchorProps) => {
  const { to = '/' } = props;

  return (
    <Link to={to} className={styles.anchor} {...props}>
      {props.children}
    </Link>
  );
};
export default Anchor;
