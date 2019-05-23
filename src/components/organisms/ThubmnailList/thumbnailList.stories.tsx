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

const data2 = [
  {
    src: '',
    title: 'long long long long long long long long title',
  },
];

storiesOf('organisms/ThumbnailList', module)
  .addDecorator(withKnobs)
  .add('default', () => <ThumbnailList data={data} />)
  .add('long title', () => <ThumbnailList data={data2} />);
