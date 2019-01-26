import React, { useEffect } from 'react'
import styled from 'styled-components'
import { IMedia } from '../interfaces'

interface Props {
  media: IMedia
  setMedia: (media: IMedia) => void
}

const Media = React.memo(({ media, setMedia }: Props) => {
  useEffect(() => {
    if (!!media.type) {
      ;(document.querySelector('#player') as HTMLElement).classList.add(
        'active'
      )

      const video = document.querySelector('#video') as HTMLVideoElement
      video.addEventListener('enterpictureinpicture', () => {
        ;(document.querySelector('#player') as HTMLElement).classList.remove(
          'active'
        )
        video.style.display = 'none'
      })
      video.addEventListener('leavepictureinpicture ', () => {
        video.style.display = 'initial'
        setMedia({ url: '', type: '' })
      })
    }
  }, [media])

  const close = () => {
    ;(document.querySelector('#player') as HTMLElement).classList.remove(
      'active'
    )
    ;(document.querySelector(`#${media.type}`) as HTMLMediaElement).src = ''
    setMedia({ url: '', type: '' })
  }

  return (
    <Player
      id="player"
      onMouseEnter={() => {
        const btn = document.querySelector('#close') as HTMLElement
        btn.classList.add('active')
      }}
      onMouseLeave={() => {
        const btn = document.querySelector('#close') as HTMLElement
        btn.classList.remove('active')
      }}
    >
      <Video id="video" preload="none" controls={true} />
      <audio id="audio" preload="none" />
      <CloseButton id="close" onClick={close}>
        x
      </CloseButton>
    </Player>
  )
})

export default Media

const Player = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 320px;
  height: 180px;
  min-width: 320px;
  min-height: 180px;
  max-width: 640px;
  max-height: 360px;
  z-index: -1;

  &.active {
    z-index: 10;
  }
`

const Video = styled.video`
  width: 100%;
  height: 100%;
`

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: none;

  &.active {
    display: block;
  }
`
