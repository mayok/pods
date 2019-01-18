import React, { useState } from "react";
import List from "./list";
import Contents from "./contents";
import { Channels } from "../interfaces";

const App = () => {
  const [list, setList] = useState<string[]>([]);
  const [channels, setChannels] = useState<Channels>({});

  // todo: set last seen as initial value
  const [pod, setPod] = useState("");

  return (
    <div>
      <List list={list} setList={setList} setPod={setPod} />
      <Contents pod={pod} channels={channels} setChannels={setChannels} />
    </div>
  );
};

export default App;
