import * as React from 'react';
import Button, { ButtonClassNames } from '../../atoms/Button';
import { ElementProps } from '../../utils';

const buttonClassNames: ButtonClassNames = require('./button.scss');
const filterButtonClassNames: FilterButtonClassNames = require('./filter-buttons.scss');

export interface FilterButtonClassNames {
  filterButtons?: string;
  button?: string;
}

export interface Props extends ElementProps {
  childrens?: { label: string; onClick: () => void }[];
  classNames?: FilterButtonClassNames;
}

const FilterButton = (props: Props) => {
  const classNames = props.classNames || filterButtonClassNames;

  return (
    <div className={classNames.filterButtons}>
      {props.childrens &&
        props.childrens.map(child => (
          <Button
            className={classNames.button} // button layout: position, margin
            classNames={buttonClassNames} // button style: color, size
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
