import React, { useEffect } from "react";
import styled from "styled-components";
import Storage from "../provider/storage";
import { fetchList } from "../provider/api";
import { IList, IPods } from "../interfaces";
import config = require("../config.json");

interface Props {
  list: IList;
  setList: (list: IList) => void;
  setPod: (pod: IPods) => void;
}

// use memo
const List = ({ list, setList, setPod }: Props) => {
  useEffect(
    () => {
      if (Object.keys(list).length === 0) {
        // get from storage
        const storage_value = Storage._get("list");
        if (storage_value) {
          setList(JSON.parse(storage_value));
        }

        // fetch from api
        config.paths.map(path => {
          // use last direcotry name as keyword
          fetchList(path.split("/").pop() as string).then(v => {
            setList(v);
            Storage._set("list", JSON.stringify(v));
          });
        });
      }
    },
    [list]
  );

  const handleClick = (evt: React.MouseEvent, group: string, name: string) => {
    // todo: change channel name color
    setPod({group, name});
  };

  return (
    <Container>
      <Title>Channels</Title>
      <ListContainer>
        {Object.keys(list).map(group =>
          list[group].channels.map(channel => (
            <ChannelName key={`${group}-${channel}`} onClick={(e: React.MouseEvent) => handleClick(e, group, channel)}>
              {channel}
            </ChannelName>
          ))
        )}
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
