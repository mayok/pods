import * as React from 'react';
import Button from '../../atoms/Button';

const classNames: AudioControllerClassNames = require('./audio-controller.scss');

interface Props {
  classNames?: AudioControllerClassNames;
}

export interface AudioControllerClassNames {
  controller?: string;
  button?: string;
}

const AudioController = (props: Props) => {
  return (
    <div>
      <Button>></Button>
    </div>
  );
};

export default AudioController;
