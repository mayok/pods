import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import MediaObjectLayout from '.';
import Image from '../Image';
import Text from '../Text';

storiesOf('atoms/MediaObjectLayout', module)
  .addDecorator(withKnobs)
  .add('72', () => (
    <MediaObjectLayout>
      <div>
        <Image src="" width={72} height={72} />
      </div>
      <Text>Lorem ipsum</Text>
      <Text>Lorem ipsum</Text>
    </MediaObjectLayout>
  ))
  .add('long text', () => (
    <MediaObjectLayout style={{ width: '300px' }}>
      <div>
        <Image src="" />
      </div>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis vitae laboriosam est fugiat nisi,
        reprehenderit quisquam sequi soluta ut mollitia alias aliquid aspernatur. Quo, et! Saepe dolorem non est?
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi fuga quidem aliquam excepturi nisi
        maxime quisquam ut velit. Ratione et commodi ad culpa quas delectus sed distinctio aperiam unde.
      </Text>
    </MediaObjectLayout>
  ));
