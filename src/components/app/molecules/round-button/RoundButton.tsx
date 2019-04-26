import * as React from 'react';
const buttonClassnames: ButtonClassNames = require('./round-button.scss');

export interface ButtonClassNames {
  button?: string;
}

const RoundButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className={buttonClassnames.button} aria-pressed="false">
      {children}
    </button>
  );
};

export default RoundButton;
