import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Thumbnail from '.';

const data = {
  src: '',
  title: 'empty',
};

storiesOf('organisms/Thumbnail', module)
  .addDecorator(withKnobs)
  .add('default', () => <Thumbnail {...data} />);
