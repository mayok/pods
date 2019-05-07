import * as React from 'react';

export interface Props {
  header: React.ReactNode;
  nav: React.ReactNode;
  children: React.ReactNode;
  props?: React.ReactNode;
}

const HomeTemplate = ({ header, nav, children, ...props }: Props) => {
  return (
    <div>
      {header}
      {nav}
      {children}
    </div>
  );
};
