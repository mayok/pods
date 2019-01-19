import React, { useEffect } from "react";
import styled from "styled-components";
import { IChannelItem, IChannels } from "../interfaces";
import { fetchContents } from "../provider/api";
import Storage from "../provider/storage";
import Loading from "./loading";

interface Props {
  pod: string;
  channels: IChannels;
  setChannels: (channels: IChannels) => void;
}

const Contents = ({ pod, channels, setChannels }: Props) => {
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
        <Channels>
          {channels[pod].contents.map((c: IChannelItem) => (
            <Channel key={c.title}>
              <ChannelName>{c.title}</ChannelName>
              <span>{c.url}</span>
            </Channel>
          ))}
        </Channels>
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
  padding: 12px 24px;
  width: 740px;
  background: var(--daight);
  overflow-y: auto;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5em;
  color: var(--text-active);
  border-bottom: 1px solid var(--black);
`;

const Channels = styled.ul`
  margin: 24px;
  padding: 0;

  & li:not(:first-child) {
    margin: 20px 0 0;
  }
`;
const Channel = styled.li`
  padding: 8px 8px 32px;
  list-style-type: none;
  color: var(--text);
  border-bottom: 1px solid var(--dark);
`;

const ChannelName = styled.h2`
  margin: 0;
  font-size: 1.3em;
`;
