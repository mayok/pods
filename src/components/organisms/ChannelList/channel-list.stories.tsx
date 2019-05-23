import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import ChannelList from '.';

const data = [
  {
    src: '',
    title: 'empty',
    time: '00:00',
  },
  {
    src: '',
    title: 'empty 1',
    time: '00:00',
  },
  {
    src: '',
    title: 'empty 2',
    time: '00:00',
  },
  {
    src: '',
    title: 'empty 3',
    time: '00:00',
  },
];

storiesOf('organisms/ChannelList', module)
  .addDecorator(withKnobs)
  .add('default', () => <ChannelList data={data} style={{ width: '720px' }} />);
