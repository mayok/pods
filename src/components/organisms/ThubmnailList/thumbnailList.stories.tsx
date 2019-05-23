import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import ThumbnailList from '.';

const data = [
  {
    src: '',
    title: 'empty',
  },
  {
    src: '',
    title: 'empty 2',
  },
  {
    src: '',
    title: 'empty 3',
  },
  {
    src: '',
    title: 'empty 4',
  },
];

storiesOf('organisms/ThumbnailList', module)
  .addDecorator(withKnobs)
  .add('default', () => <ThumbnailList data={data} />);
