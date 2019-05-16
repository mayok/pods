import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Heading, { HeadingClassName } from '.';

const style: HeadingClassName = require('./heading.scss');

storiesOf('atoms/Heading', module)
  .addDecorator(withKnobs)
  .add('default', () => <Heading classNames={style}>Hello</Heading>)
  .add('level: 1, visual level: 1', () => (
    <Heading level={1} visualLevel={1} classNames={style}>
      Hello
    </Heading>
  ))
  .add('level: 6, visual level: 3', () => (
    <Heading level={6} visualLevel={3} classNames={style}>
      Hello
    </Heading>
  ))
  .add('level: 6, visual level: 6', () => (
    <Heading level={6} visualLevel={6} classNames={style}>
      Hello
    </Heading>
  ));
