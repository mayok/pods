import React, { useEffect } from "react";
import { IContents, Channels } from "../interfaces";
import { getContents } from "../provider/remoteprovider";

const Contents = ({ pod, channels, setChannels }: IContents) => {
  useEffect(
    () => {
      /*
      when pod changes
        1. setChannel (channel[pod])
        2. fetch and setChannel (storage if exists)
        3. fetch and setChannel (API)
        4. store in storage
     */
      if (channels[pod]) {
        // setChannels(channels[pod])
      }

      // else if (storage) {
      //   setChannels()
      // }

      // get data from api
      const js = getContents(pod);
      // setChannel(js)
    },
    [pod]
  );

  return (
    <div>
      <h2>{channels[pod].title}</h2>
      <ul>
        {channels[pod].contents.map((c: string) => (
          <li>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contents;
