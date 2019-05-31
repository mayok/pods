import React, { useContext, useEffect } from 'react';
import { MyContext, RootStore } from '../../..';
import HomeTemplate from '../../templates/HomeTemplate';

interface Props {}

const Home = (props: Props) => {
  const context = useContext(MyContext);
  const store = useContext(RootStore);

  const onClick = (channel: string) => {
    //
  };

  useEffect(() => {
    // initialize
    store.homeStore.setList(context.repository.list());

    const api_list = context.provider.list();
    const _api_item_count = Object.keys(api_list).reduce((acc, val) => acc + api_list[val].length, 0);

    if (_api_item_count != store.homeStore.itemCount) {
      store.homeStore.setList(
        Object.keys(api_list)
          .map(key =>
            api_list[key].map(name => ({
              group: key,
              title: name,
              thumbnail: '',
            }))
          )
          .reduce((acc, val) => [...acc, ...val], [])
      );
    }
  });

  return <HomeTemplate data={store.homeStore.list} onClick={onClick} filter={store.homeStore.filter} />;
};

export default Home;
