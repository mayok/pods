import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button, { ButtonClassNames } from './Button';

const style: ButtonClassNames = require('./_button.scss');

storiesOf('lib/atoms/Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => <Button classNames={style}>Hello</Button>)
  .add('with emoji', () => <Button classNames={style}>😀 😎 👍 💯</Button>)
  .add('show console', () => (
    <Button
      classNames={style}
      onClick={() => {
        console.log('button clicked!');
      }}
    >
      Click me
    </Button>
  ));
