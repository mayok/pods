import React, { useEffect, useContext } from 'react';
import AppTemplate from '../templates/AppTemplate';
import { RootStore } from '../..';
import Home from './Home';
import Channel from './Channel';

interface Props {}

const App = (props: Props) => {
  const store = useContext(RootStore);

  useEffect(() => {});

  return (
    <>{store.appStore.component === 'home' ? <AppTemplate Component={Home} /> : <AppTemplate Component={Channel} />}</>
  );
};

export default App;
