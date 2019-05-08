import * as React from 'react';
import { storiesOf } from '@storybook/react';
import FilterButtons from '.';

storiesOf('organisms/FilterButtons', module).add('with text', () => {
  const data = [
    {
      label: 'hello',
      onClick: () => {},
    },
    {
      label: 'world',
      onClick: () => {},
    },
  ];
  return <FilterButtons childrens={data}>Hello</FilterButtons>;
});
