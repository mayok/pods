import React, { useEffect } from "react";
import styled from "styled-components";
import { IChannelItem, IChannels, IPods } from "../interfaces";
import { fetchContents } from "../provider/api";
import Storage from "../provider/storage";
import Loading from "./loading";

interface Props {
  pod: IPods;
  channels: IChannels;
  setChannels: (channels: IChannels) => void;
}

const Contents = ({ pod, channels, setChannels }: Props) => {
  useEffect(
    () => {
      if (pod.name && channels.hasOwnProperty(pod.name)) {
        // get from storage
        const storage_value = Storage._get(pod.name);
        if (storage_value) {
          setChannels(Object.assign({}, channels, JSON.parse(storage_value)));
        }

        // fetch from API
        fetchContents(pod.group, pod.name).then(v => {
          setChannels(Object.assign({}, channels, v));
          Storage._set(pod.name, JSON.stringify(v));
        });
      }
    },
    [pod]
  );

  if (pod.name && channels.hasOwnProperty(pod.name)) {
    return (
      <Container>
        <Title>{channels[pod.name].title}</Title>
        <Channels>
          {channels[pod.name].contents.map((c: IChannelItem) => (
            <Channel key={c.title}>
              <ChannelName>{c.title}</ChannelName>
              <Link as="a" href={c.url}>
                {c.url}
              </Link>
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

const Link = styled.a`
  color: var(--text);
  text-decoration: none;

  &:hover {
    color: var(--text-active);
    text-decoration: underline;
  }
`;
