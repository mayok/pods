import React, { useEffect } from 'react'
import styled from 'styled-components'
import { IMedia } from '../interfaces'

interface Props {
  media: IMedia
  setMedia: (media: IMedia) => void
}

const Media = React.memo(({ media, setMedia }: Props) => {
  useEffect(() => {
    if (media.type) {
      // get media element, video or audio
      const _media = document.querySelector('#media') as
        | HTMLVideoElement
        | HTMLAudioElement

      _media.load()

      // play
      _media
        .play()
        .then(() => {
          // if type equals video, use play in pip mode
          if (media.type.split('/')[0] === 'video') {
            ;(_media as any).requestPictureInPicture().catch((e: string) => {
              console.log(e)
            })
          }
        })
        .catch(e => {
          console.log(e)
        })

      // register EventListener
      _media.addEventListener('leavepictureinpicture', () => {
        setMedia({ url: '', type: '' })
      })
    }
  })

  // if media not defined, do nothing
  if (!media.type) {
    return null
  }

  return (
    <Player>
      <MediaContainer>
        {media.type.split('/')[0] === 'video' ? (
          <video id="media" preload="none" src={media.url} />
        ) : (
          <audio id="media" preload="none" src={media.url} />
        )}
      </MediaContainer>

      <Controls>
        <Play className="play" />
        <Rewind className="rewind" />
        <Forward className="rewind" />
      </Controls>
    </Player>
  )
})

export default Media

const Player = styled.div``
const MediaContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: hidden;
  width: 100vw;
  height: 100vh;
  z-index: -1;
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
