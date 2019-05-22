import * as React from 'react';
import FilterButton from '../../organisms/FilterButton';
import Header from '../../organisms/Header';
import Thumbnails from '../../organisms/Thubmnails';
import HomeTemplate from '../../templates/HomeTemplate';

export interface Props {
  data: { src: string }[];
}

const Home = (props: Props) => {
  return <HomeTemplate header={<Header />} nav={<FilterButton />} content={<Thumbnails data={props.data} />} />;
};

export default Home;
