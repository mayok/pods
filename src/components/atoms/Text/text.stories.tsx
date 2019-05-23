import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Text from '.';

storiesOf('atoms/Text', module)
  .addDecorator(withKnobs)
  .add('default', () => <Text>Hello</Text>);
