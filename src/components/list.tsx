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
        const obj = config.paths
          .map(async path => {
            // use last direcotry name as keyword
            return await fetchList(path.split("/").pop() as string);
          })
          .reduce((acc, val) => Object.assign(acc, val));
        obj.then(v => {
          setList(v);
        });
        Storage._set("list", JSON.stringify(obj));
      }
    },
    [list]
  );

  const handleClick = (evt: React.MouseEvent, group: string, name: string) => {
    // todo: change channel name color
    setPod({ group, name });
  };

  return (
    <Container>
      <Title>Channels</Title>
      {Object.keys(list).map(group => (
        <GroupContainer key={group}>
          <Input type="checkbox" id={group} checked={true} />
          <Label htmlFor={group}>{group}</Label>

          <ListContainer>
            {list[group].channels.map(channel => (
              <ChannelName
                key={`${group}-${channel}`}
                onClick={(e: React.MouseEvent) => handleClick(e, group, channel)}
              >
                {channel}
              </ChannelName>
            ))}
          </ListContainer>
        </GroupContainer>
      ))}
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

const GroupContainer = styled.div``;

const ListContainer = styled.ul`
  padding: 0;
`;

const Input = styled.input`
  display: none;

  &:checked ~ ul {
    display: block;
  }

  &:checked ~ label:before {
    content: "-";
  }

  &:not(:checked) ~ label:before {
    content: "+";
  }
`;

const Label = styled.label``;

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
