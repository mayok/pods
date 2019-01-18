import React, { useEffect } from "react";
import { IContents, Item } from "../interfaces";
import { fetchContents } from "../provider/api";
import Storage from "../provider/storage";
import Loading from "./loading";

const Contents = ({ pod, channels, setChannels }: IContents) => {
  useEffect(
    () => {
      if (pod && !channels[pod]) {
        // get from storage
        const storage_value = JSON.parse(Storage._get(pod));
        if (storage_value) {
          setChannels(Object.assign(channels, storage_value));
        }

        // fetch from API
        fetchContents(pod).then(v => {
          setChannels(Object.assign(channels, v));
          Storage._set(pod, JSON.stringify(v));
        });
      }
    },
    [pod]
  );

  if (pod && channels[pod]) {
    return (
      <div>
        <h2>{channels[pod].title}</h2>
        <ul>
          {channels[pod].contents.map((c: Item) => (
            <li>
              <h2>{c.title}</h2>
              <span>{c.url}</span>
              <span>{c.date}</span>
              <span>{c.type}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <Loading />;
};

export default Contents;
