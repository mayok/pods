import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import ChannelItem from '.';

const data = {
  src: '',
  title: 'empty',
  time: '00:00',
};

storiesOf('organisms/ChannelItem', module)
  .addDecorator(withKnobs)
  .add('default', () => <ChannelItem {...data} style={{ width: '300px' }} />);
