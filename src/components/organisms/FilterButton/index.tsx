import * as React from 'react';
import RoundButton from '../../molecules/RoundButton';
import { ButtonClassNames } from '../../atoms/button';

const FilterButtonClass: FilterButtonClass = require('./filter-buttons.scss');

export interface FilterButtonClass extends ButtonClassNames {
  filterButtons: string;
}

export interface Props {
  children?: string;
  childrens?: { label: string; onClick: () => void }[];
}

const FilterButton = (props: Props) => {
  return (
    <div className={FilterButtonClass.filterButtons}>
      {props.childrens &&
        props.childrens.map(child => (
          <RoundButton classNames={FilterButtonClass} key={child.label} onClick={child.onClick}>
            {child.label}
          </RoundButton>
        ))}
    </div>
  );
};

export default FilterButton;
