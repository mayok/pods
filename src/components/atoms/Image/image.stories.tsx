import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Image from '.';

storiesOf('atoms/Image', module)
  .addDecorator(withKnobs)
  .add('default', () => <Image src="" />);
