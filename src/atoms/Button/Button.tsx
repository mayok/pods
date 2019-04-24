import * as React from 'react';
// import './button.scss';
const buttonClassnames: ButtonClassNames = require('./button.scss');

export interface ButtonClassNames {
  button?: string;
}

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className={buttonClassnames.button} aria-presses="false">
      {children}
    </button>
  );
};

export default Button;
