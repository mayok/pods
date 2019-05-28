import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import TLayout from '.';
import Button from '../Button';
import Text from '../Text';
import VerticalLayout from '../VerticalLayout';

storiesOf('atoms/TLayout', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <TLayout>
      <Text>Lorem ipsum Header header</Text>

      <VerticalLayout>
        <Button>></Button>
        <Button>></Button>
        <Button>></Button>
        <Button>></Button>
      </VerticalLayout>

      <Text>Lorem ipsum</Text>
      <Text>Lorem ipsum</Text>
      <Text>Lorem ipsum</Text>
      <Text>Lorem ipsum</Text>
      <Text>Lorem ipsum</Text>
    </TLayout>
  ));
