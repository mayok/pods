import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import VerticalLayout from '.';
import Button, { RoundButton } from '../Button';

storiesOf('atoms/VerticalLayout', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <VerticalLayout style={{ width: '192px' }}>
      <RoundButton>Sushi</RoundButton>
      <RoundButton>Tenpura</RoundButton>
      <RoundButton>Fujiyama</RoundButton>
    </VerticalLayout>
  ))
  .add('only a child', () => (
    <VerticalLayout style={{ width: '192px' }}>
      <Button>Hi</Button>
    </VerticalLayout>
  ));
