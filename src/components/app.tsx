import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import List from "./list";
import Contents from "./contents";
import { Channels } from "../interfaces";

const App = () => {
  const [list, setList] = useState<string[]>([]);
  const [channels, setChannels] = useState<Channels>({});

  // todo: set last seen as initial value
  const [pod, setPod] = useState("");

  return (
    <>
      <GlobalStyle />
      <Container>
        <List list={list} setList={setList} setPod={setPod} />
        <Contents pod={pod} channels={channels} setChannels={setChannels} />
      </Container>
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 30px 0;
    width: 100vw;
    height: 100vh;
    background: var(--black);
  }

  :root {
    --text: #99aab5;
    --text-hover: #A3B2BC;
    --text-active: #fefefe;
    --text-active-hover: #fff;
    --black: #23272a;
    --dark: #2c2f33;
    --dark-hover: #414345;
  }

  * {
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  margin: auto;
  display: flex;
  width: 960px;
  height: calc(100vh - 60px);
  background: var(--dark);
`;
