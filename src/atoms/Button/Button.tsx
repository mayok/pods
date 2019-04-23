import * as React from 'react';
import './button.scss';

const Button = ({ children }: { children: React.ReactNode }) => {
  return <button>{children}</button>;
};

export default Button;
