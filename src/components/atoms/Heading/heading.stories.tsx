import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Heading from '.';

storiesOf('atoms/Heading', module)
  .addDecorator(withKnobs)
  .add('default', () => <Heading>Hello</Heading>)
  .add('level: 1, visual level: 3', () => (
    <Heading level={1} visualLevel={3}>
      Hello
    </Heading>
  ))
  .add('level: 3, visual level: 3', () => (
    <Heading level={6} visualLevel={3}>
      Hello
    </Heading>
  ));
