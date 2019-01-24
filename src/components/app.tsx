import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { IChannels, IList, IPods } from '../interfaces'
import Contents from './contents'
import List from './list'

const App = () => {
  const [list, setList] = useState<IList>({})
  const [channels, setChannels] = useState<IChannels>({})

  // todo: set last seen as initial value
  const [pod, setPod] = useState<IPods>({ group: '', name: '' })

  return (
    <>
      <GlobalStyle />
      <Container>
        <List list={list} setList={setList} setPod={setPod} />
        <Contents pod={pod} channels={channels} setChannels={setChannels} />
      </Container>
    </>
  )
}

export default App

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
    --dark-hover: #3e424f;
    --daight: #353840
  }

  * {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(128, 128, 128, 0.5);
  }
`

const Container = styled.div`
  display: flex;
  position: relative;
  margin: auto;
  width: 960px;
  height: calc(100vh - 60px);
  min-height: 50vh;
  overflow-y: hidden;
  background: var(--dark);
`
