import React, { useState } from "react";
import List from "./list";
import Contents from "./contents";
import { Channel } from "../interfaces";

const App = () => {
  const [list, setList] = useState<string[]>([]);
  const [channel, setChannel] = useState<Channel[]>([]);
  const [pod, setPod] = useState("");

  return (
    <div>
      <List list={list} setList={setList} setPod={setPod} />
      <Contents pod={pod} channel={channel} setChannel={setChannel} />
    </div>
  );
};

export default App;
