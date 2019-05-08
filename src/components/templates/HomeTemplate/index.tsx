import * as React from 'react';

export interface Props {
  header: React.ReactNode;
  nav: React.ReactNode;
  content: React.ReactNode;
  props?: React.ReactNode;
}

const HomeTemplate = ({ header, nav, content, ...props }: Props) => {
  return (
    <div>
      {header}
      {nav}
      {content}
    </div>
  );
};

export default HomeTemplate;
