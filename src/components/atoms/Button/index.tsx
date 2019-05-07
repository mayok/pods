import React from 'react';

export interface ButtonClassNames {
  button?: string;
}

export interface ButtonProps {
  classNames?: ButtonClassNames;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const classNames = props.classNames || {};
  const { children = undefined, onClick = undefined, ...rest } = props;

  return (
    <button onClick={onClick} className={classNames.button} aria-pressed="false">
      {children}
    </button>
  );
};

export default Button;
