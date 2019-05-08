import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from '.';
import { MemoryRouter } from 'react-router';

storiesOf('atoms/Logo', module)
  .addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .add('logo', () => <Logo />);
