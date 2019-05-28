import * as React from 'react';
import Button from '../../atoms/Button';
import { ElementProps } from '../../utils';
import VerticalLayout from '../../atoms/VerticalLayout';

// const buttonClassNames: ButtonClassName = require('./button.scss');
const styles: NavigationBarClassName = require('./filter-buttons.scss');

export interface NavigationBarClassName {
  root?: string;
  button?: string;
}

export interface NavigationBarProps extends ElementProps {
  children?: { label: string; onClick: () => void }[];
}

const NavigationBar = (props: NavigationBarProps) => {
  return (
    <VerticalLayout>
      {props.children &&
        props.children.map(child => (
          <Button key={child.label} onClick={child.onClick}>
            {child.label}
          </Button>
        ))}
    </VerticalLayout>
  );
};

export default NavigationBar;
