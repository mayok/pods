import React, { useEffect, useState } from 'react';
import HomeTemplate from '../../templates/HomeTemplate';

interface Props {}

const Home = (props: Props) => {
  const [list, updateList] = useState();
  useEffect(() => {
    // get initial data from storage, api
  });

  // pass props: NavigationBar onClick, data
  return <HomeTemplate />;
};
export default Home;
