import * as React from 'react';
import { storiesOf } from '@storybook/react';
import RoundButton from './RoundButton';

storiesOf('app/molecules/RoundButton', module)
  .add('with text', () => <RoundButton>Hello</RoundButton>)
  .add('with emoji', () => <RoundButton>😀 😎 👍 💯</RoundButton>);