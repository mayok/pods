import React, { useEffect } from 'react'
import styled from 'styled-components'
import config = require('../config.json')
import { IList, IPods } from '../interfaces'
import { fetchList } from '../provider/api'
import Storage from '../provider/storage'

interface Props {
  list: IList
  setList: (list: IList) => void
  setPod: (pod: IPods) => void
}

// use memo
const List = ({ list, setList, setPod }: Props) => {
  useEffect(() => {
    if (Object.keys(list).length === 0) {
      // get from storage
      const storage = Storage._get('list')
      if (storage && storage !== JSON.stringify(list)) {
        setList(JSON.parse(storage))
      }

      // fetch from api
      const obj = Promise.all(
        config.paths.map(async path =>
          fetchList(path.split('/').pop() as string)
        )
      ).then(lists =>
        lists.reduce((acc, val) => Object.assign({}, acc, val), {})
      )

      obj.then(v => {
        Storage._set('list', JSON.stringify(v))
        if (Object.keys(v).length > 0) {
          setList(v)
        }
      })
    }
  }, [list])

  const handleClick = (evt: React.MouseEvent, group: string, name: string) => {
    // todo: change channel name color
    setPod({ group, name })
  }

  return (
    <Container>
      <Title>Channels</Title>
      {Object.keys(list).map(group => (
        <GroupContainer key={group}>
          <Input type="checkbox" id={group} defaultChecked={true} />
          <Label htmlFor={group}>{group}</Label>

          <ListContainer>
            {list[group].channels.map(channel => (
              <ChannelName
                key={`${group}-${channel}`}
                onClick={(e: React.MouseEvent) =>
                  handleClick(e, group, channel)
                }
              >
                {channel}
              </ChannelName>
            ))}
          </ListContainer>
        </GroupContainer>
      ))}
    </Container>
  )
}

export default List

const Container = styled.div`
  padding: 0;
  width: 220px;
  height: calc(100vh - 60px);
  overflow-y: auto;
  overflow-x: hidden;
`

const Title = styled.h1`
  position: sticky;
  top: 0;
  display: block;
  margin: 0 0 32px;
  padding: 0 24px;
  width: 220px;
  height: 62px;
  line-height: 60px;
  font-size: 1.5em;
  color: var(--text-active);
  background: var(--dark);
  border-bottom: 1px solid var(--black);
  z-index: 5;
`

const GroupContainer = styled.div`
  position: relative;
  margin: 0 24px;
`

const ListContainer = styled.ul`
  display: none;
  padding: 0;
`

const Input = styled.input`
  display: none;

  &:checked ~ ul {
    display: block;
  }

  &:checked ~ label:before {
    content: '-';
  }

  &:not(:checked) ~ label:before {
    content: '+';
  }
`

const Label = styled.label`
  margin-left: 0.9em;
  color: var(--text);
  font-size: 1.1em;
  font-weight: bold;

  &:before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0.9em;
  }
`

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
`
