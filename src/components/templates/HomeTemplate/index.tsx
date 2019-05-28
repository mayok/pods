import * as React from 'react';
import Header from '../../organisms/Header';
import Navigationbar from '../../organisms/NavigationBar';
import ThumbnailList from '../../organisms/ThubmnailList';
import TLayout from '../../atoms/TLayout';

export interface Props {
  data?: any;
}

const HomeTemplate = ({ data }: Props) => {
  return (
    <TLayout>
      <Header />
      <Navigationbar />
      <ThumbnailList data={[]} />
    </TLayout>
  );
};

export default HomeTemplate;
