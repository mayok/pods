import * as React from 'react';
const buttonClassnames: ButtonClassNames = require('./filter-button.scss');
import RoundButton from '../../molecules/round-button/RoundButton';

export interface ButtonClassNames {
  button?: string;
}

interface Props {
  childrens: string[];
}

const FilterButton = (props: Props) => {
  return (
    <div>
      {props.childrens.map(child => (
        <RoundButton>{child}</RoundButton>
      ))}
    </div>
  );
};

export default FilterButton;
