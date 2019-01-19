import React, { useEffect } from "react";
import styled from "styled-components";
import { Item, Channels } from "../interfaces";
import { fetchContents } from "../provider/api";
import Storage from "../provider/storage";
import Loading from "./loading";

interface IContents {
  pod: string;
  channels: Channels;
  setChannels: (channels: Channels) => void;
}

const Contents = ({ pod, channels, setChannels }: IContents) => {
  useEffect(
    () => {
      if (pod && !channels[pod]) {
        // get from storage
        const storage_value = Storage._get(pod);
        if (storage_value) {
          setChannels(Object.assign({}, channels, JSON.parse(storage_value)));
        }

        // fetch from API
        fetchContents(pod).then(v => {
          setChannels(Object.assign({}, channels, v));
          Storage._set(pod, JSON.stringify(v));
        });
      }
    },
    [pod]
  );

  if (pod && channels.hasOwnProperty(pod)) {
    return (
      <Container>
        <Title>{channels[pod].title}</Title>
        <ul>
          {channels[pod].contents.map((c: Item) => (
            <li key={c.title}>
              <h2>{c.title}</h2>
              <span>{c.url}</span>
              <span>{c.date}</span>
              <span>{c.type}</span>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
  return (
    <Container>
      <Loading />
    </Container>
  );
};

export default Contents;

const Container = styled.div`
  padding: 10px;
  width: 740px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5em;
  color: var(--text-active);
  border-bottom: 1px solid var(--black);
`;

const Channel = styled.div``;
