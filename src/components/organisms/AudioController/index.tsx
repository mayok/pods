import * as React from 'react';
import Button from '../../atoms/Button';
import { Element } from '../../utils';
import MediaObjectLayout from '../../atoms/MediaObjectLayout';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
const styles: AudioControllerClassNames = require('./audio-controller.scss');

export interface AudioControllerClassNames {
  root?: string;
  container?: string;
  progressbar?: string;
  image?: string;
  controller?: string;
  volume?: string;
}

export interface Props {}

const AudioController = (props: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.progressbar} />

      <div className={styles.container}>
        <MediaObjectLayout>
          <Image className={styles.image} src="" />
          <Text>title</Text>
        </MediaObjectLayout>

        <Element styles={styles.controller} {...props}>
          <Button>h</Button>
          <Button>></Button>
          <Button>l</Button>
        </Element>

        <div className={styles.volume} />
      </div>
    </div>
  );
};

export default AudioController;
