import React, { useEffect } from "react";
import { IContents, Channels } from "../interfaces";
import { fetchContents } from "../provider/api";
import Storage from "../provider/storage";
import Loading from "./loading";

const Contents = ({ pod, channels, setChannels }: IContents) => {
  useEffect(
    () => {
      if (pod && !channels[pod]) {
        // get from storage
        // todo: storage may return empty
        const storage_value = JSON.parse(Storage._get(pod));
        setChannels(Object.assign(channels, storage_value));

        // fetch from API
        const api_value = fetchContents(pod);
        setChannels(Object.assign(channels, api_value));
        Storage._set(pod, JSON.stringify(api_value));
      }
    },
    [pod]
  );

  if (pod && channels[pod]) {
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
  }
  return <Loading />;
};

export default Contents;
