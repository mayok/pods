import React, { useEffect } from 'react'
import styled from 'styled-components'
import { IChannelItem, IChannels, IMedia, IPods } from '../interfaces'
import { fetchContents } from '../provider/api'
import Storage from '../provider/storage'
import Loading from './loading'

interface Props {
  pod: IPods
  channels: IChannels
  setChannels: (channels: IChannels) => void
  setMedia: (media: IMedia) => void
}

const Contents = React.memo(
  ({ pod, channels, setChannels, setMedia }: Props) => {
    useEffect(() => {
      if (pod.name && !channels.hasOwnProperty(pod.name)) {
        // get from storage
        Storage._get(pod.name).then(v => {
          if (v) {
            setChannels(Object.assign({}, channels, JSON.parse(v)))
          }
        })

        // fetch from API
        fetchContents(pod.group, pod.name).then(v => {
          setChannels(Object.assign({}, channels, v))
          Storage._set(pod.name, JSON.stringify(v))
        })
      }
    }, [pod])

    if (pod.name && channels.hasOwnProperty(pod.name)) {
      return (
        <Container>
          <Title>{channels[pod.name].title}</Title>
          <Channels>
            {channels[pod.name].contents.map((c: IChannelItem) => (
              <Channel key={c.title}>
                <ChannelName>{c.title}</ChannelName>
                <Button
                  onClick={() => {
                    const type = c.type.split('/')[0]
                    const _media = document.querySelector(
                      `#${type}`
                    ) as HTMLMediaElement
                    _media.src = c.url
                    _media.load()
                    _media.play().then(() => {
                      setMedia({ url: c.url, type })
                    })
                  }}
                >
                  Play
                </Button>
              </Channel>
            ))}
          </Channels>
        </Container>
      )
    }

    if (pod.name && !channels.hasOwnProperty(pod.name)) {
      return (
        <Container>
          <Loading />
        </Container>
      )
    }

    // todo: first view
    return (
      <Container>
        <Loading />
      </Container>
    )
  }
)

export default Contents

const Container = styled.div`
  position: relative;
  padding: 0;
  width: 740px;
  background: var(--daight);
  overflow-y: auto;
  overflow-x: hidden;
`

const Title = styled.h1`
  position: sticky;
  top: 0;
  display: block;
  margin: 0;
  padding: 0 24px;
  width: 740px;
  height: 62px;
  line-height: 60px;
  font-size: 1.5em;
  color: var(--text-active);
  background: var(--daight);
  border-bottom: 1px solid var(--black);
  z-index: 5;
`

const Channels = styled.ul`
  margin: 24px;
  padding: 0;

  & li:not(:first-child) {
    margin: 20px 0 0;
  }
`
const Channel = styled.li`
  padding: 8px 8px 32px;
  list-style-type: none;
  color: var(--text);
  border-bottom: 1px solid var(--dark);
`

const ChannelName = styled.h2`
  margin: 0;
  font-size: 1.3em;
`

const Button = styled.span`
  cursor: pointer;
`
