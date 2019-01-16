import React, { useEffect } from "react";
import { IContents, Channel } from "../interfaces";

const Contents = ({ pod, channel, setChannel }: IContents) => {
  useEffect(
    () => {
      /*
      when pod changes
        1. setChannel (channel[pod])
        2. fetch and setChannel (storage if exists)
        3. fetch and setChannel (API)
        4. store in storage
     */
    },
    [pod]
  );

  return (
    <div>
      <h2>title</h2>
      <ul>
        {channel.map((c: Channel) => (
          <li>{c.item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contents;
