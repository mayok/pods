import * as React from 'react';
import { storiesOf } from '@storybook/react';
import FilterButtons from '.';

storiesOf('organisms/FilterButtons', module).add('with text', () => (
  <FilterButtons childrens={[{ label: 'hello', onClick: () => {} }, { label: 'world', onClick: () => {} }]}>
    Hello
  </FilterButtons>
));
