import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('lib/atoms/Button', module)
  .add('with text', () => <Button>Hello</Button>)
  .add('with emoji', () => <Button>😀 😎 👍 💯</Button>);
