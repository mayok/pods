import React, { useEffect } from 'react'
import styled from 'styled-components'
import { IMedia } from '../interfaces'

interface Props {
  media: IMedia
}

const Media = React.memo(({ media }: Props) => {
  useEffect(() => {
    if (media.type) {
      // get media element, video or audio
      const _media = document.querySelector('#media') as
        | HTMLVideoElement
        | HTMLAudioElement

      // if type equals video, use play in pip mode
      if (media.type.split('/')[0] === 'video') {
        ;(_media as any).requestPictureInPicture()
      }

      // play
      _media.play()

      // register EventListener
      _media.addEventListener('leavepictureinpicture', () => {
        // do something
      })
    }
  })

  // if media not defined, do nothing
  if (!media.type) {
    return <></>
  }

  return (
    <Player>
      {media.type.split('/')[0] === 'video' ? (
        <video id="media" src={media.url} />
      ) : (
        <audio id="media" src={media.url} />
      )}

      <Controls>
        <Play className="play" />
        <Rewind className="rewind" />
        <Forward className="rewind" />
      </Controls>
    </Player>
  )
})

export default Media

const Player = styled.div`
  width: 100vw;
  height: 100vw;
`

const Controls = styled.div`
  width: 80vw;
`

const Play = styled.button``
const Rewind = styled.button``
const Forward = styled.button``
