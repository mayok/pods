import * as React from 'react';
import Button from '../../atoms/Button';
import { ElementProps } from '../../utils';

// const buttonClassNames: ButtonClassName = require('./button.scss');
const styles: FilterButtonClassName = require('./filter-buttons.scss');

export interface FilterButtonClassName {
  filterButtons?: string;
  button?: string;
}

export interface FilterButtonProps extends ElementProps {
  children?: { label: string; onClick: () => void }[];
}

const FilterButton = (props: FilterButtonProps) => {
  return (
    <div className={styles.filterButtons}>
      {props.children &&
        props.children.map(child => (
          <Button
            className={styles.button} // FilterButton specific style
            key={child.label}
            onClick={child.onClick}
          >
            {child.label}
          </Button>
        ))}
    </div>
  );
};

export default FilterButton;
