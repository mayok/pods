import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button, { RoundButton } from '.';

storiesOf('atoms/Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => <Button>Hello</Button>)
  .add('with emoji', () => <Button>😀 😎 👍 💯</Button>)
  .add('show console', () => (
    <Button
      onClick={() => {
        console.log('button clicked!');
      }}
    >
      Click me
    </Button>
  ))
  .add('round button', () => <RoundButton>Hello</RoundButton>);
