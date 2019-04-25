import * as React from 'react';
import Button from '../../atoms/button/Button';

const VerticalButtons = ({ text }: { text: string[] }) => {
  return (
    <div>
      {text.map(t => (
        <Button>{t}</Button>
      ))}
    </div>
  );
};

export default VerticalButtons;
