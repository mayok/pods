import React, { useEffect } from 'react'
import styled from 'styled-components'
import { IMedia } from '../interfaces'

interface Props {
  media: IMedia
  setMedia: (media: IMedia) => void
}

const Media = React.memo(({ media, setMedia }: Props) => {
  // useEffect(() => {
  //   if (media.type) {
  //     const _media = document.querySelector(
  //       `#${media.type}`
  //     ) as HTMLMediaElement
  //     _media.src = media.url
  //     _media.load()

  //     // _media.play()
  //   }
  // }, [media])

  return (
    <Player>
      <MediaContainer>
        <video id="video" preload="none" src="" />
        <audio id="audio" preload="none" src="" />
      </MediaContainer>

      {media.type ? (
        <Controls>
          <Play className="play" />
          <Rewind className="rewind" />
          <Forward className="rewind" />
        </Controls>
      ) : null}
    </Player>
  )
})

export default Media

const Player = styled.div``
const MediaContainer = styled.div`
  /*
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  visibility: hidden;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  */
`

const Controls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 80vw;
  height: 90px;
`

const Play = styled.button``
const Rewind = styled.button``
const Forward = styled.button``
