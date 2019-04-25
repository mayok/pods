import * as React from 'react';
import { storiesOf } from '@storybook/react';
import VerticalButtons from './VerticalButtons';

storiesOf('lib/molecules/Vertical Button', module)
  .add('with text', () => <VerticalButtons text={...['hoge', 'fuga']} />)
  .add('with emoji', () => <VerticalButtons text={...['😀 😎 👍 💯']} />);