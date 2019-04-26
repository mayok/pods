import * as React from 'react';
const buttonClassnames: ButtonClassNames = require('./_button.scss');

export interface ButtonClassNames {
  button?: string;
}

const Button = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
  return (
    <button onClick={onClick} className={buttonClassnames.button} aria-pressed="false">
      {children}
    </button>
  );
};

export default Button;
