import React, { useEffect } from "react";
import styled from "styled-components";
import Storage from "../provider/storage";
import { fetchList } from "../provider/api";

interface IList {
  list: string[];
  setList: (list: string[]) => void;
  setPod: (pod: string) => void;
}

// use memo
const List = ({ list, setList, setPod }: IList) => {
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

  return (
    <Container>
      <Title>Channels</Title>
      <ul>
        {list.map((l: string) => (
          <li key={l} onClick={() => setPod(l)}>
            {l}
          </li>
        ))}
      </ul>
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
