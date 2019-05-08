import * as React from 'react';
import RoundButton from '../../molecules/RoundButton';

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
      <RoundButton>></RoundButton>
    </div>
  );
};

export default AudioController;
