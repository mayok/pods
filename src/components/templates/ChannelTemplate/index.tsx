import * as React from 'react';

export interface Props {
  header: React.ReactNode;
  nav: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
  props?: React.ReactNode;
}

const ChannelTemplate = ({ header, nav, content, footer, ...props }: Props) => {
  return (
    <div>
      {header}
      {nav}
      {content}
      {footer}
    </div>
  );
};

export default ChannelTemplate;
