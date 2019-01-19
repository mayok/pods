import React, { useEffect } from "react";
import styled from "styled-components";
import Storage from "../provider/storage";
import { fetchList } from "../provider/api";

interface Props {
  list: string[];
  setList: (list: string[]) => void;
  setPod: (pod: string) => void;
}

// use memo
const List = ({ list, setList, setPod }: Props) => {
  useEffect(
    () => {
      if (list.length === 0) {
        // get from storage
        const storage_value = Storage._get("list");
        if (storage_value) {
          setList(JSON.parse(storage_value));
        }

        // fetch from api
        fetchList().then(v => {
          setList(v);
          Storage._set("list", JSON.stringify(v));
        });
      }
    },
    [list]
  );

  const handleClick = (evt: React.MouseEvent, channel: string) => {
    // todo: change channel name color
    setPod(channel);
  };

  return (
    <Container>
      <Title>Channels</Title>
      <ListContainer>
        {list.map((l: string) => (
          <ChannelName key={l} onClick={(e: React.MouseEvent) => handleClick(e, l)}>
            {l}
          </ChannelName>
        ))}
      </ListContainer>
    </Container>
  );
};

export default List;

const Container = styled.div`
  padding: 12px 24px;
  width: 220px;
  height: calc(100vh - 60px);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5em;
  color: var(--text-active);
  border-bottom: 1px solid var(--black);
`;

const ListContainer = styled.ul`
  padding: 0;
`;

const ChannelName = styled.li`
  padding: 4px 4px 4px 1.1em;
  list-style-type: none;
  font-size: 1.1em;
  color: var(--text);
  border-radius: 3px;

  &:hover {
    color: var(--text-hover);
    background: var(--dark-hover);
  }
`;
