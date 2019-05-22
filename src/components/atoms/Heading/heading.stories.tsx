import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Heading, { HeadingClassName } from '.';

storiesOf('atoms/Heading', module)
  .addDecorator(withKnobs)
  .add('default', () => <Heading>Hello</Heading>)
  .add('level: 1', () => <Heading level={1}>Hello</Heading>)
  .add('level: 6', () => <Heading level={6}>Hello</Heading>);
