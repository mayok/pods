import React, { useEffect } from 'react'
import styled from 'styled-components'
import { IMedia } from '../interfaces'

interface Props {
  media: IMedia
  setMedia: (media: IMedia) => void
}

const Media = React.memo(({ media, setMedia }: Props) => {
  let p1 = 0
  let p2 = 0
  let p3 = 0
  let p4 = 0
  let dragging = false

  useEffect(() => {
    if (!!media.type) {
      ;(document.querySelector('#player') as HTMLElement).classList.add(
        'active'
      )
    }
  }, [media])

  const handleClick = () => {
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
      <Video
        id="video"
        preload="none"
        controls={true}
        onMouseDown={e => {
          dragging = true
          p3 = e.clientX
          p4 = e.clientY
        }}
        onMouseMove={e => {
          // use ref
          if (!dragging) return
          const element = document.querySelector(`#player`) as HTMLElement
          p1 = p3 - e.clientX
          p2 = p4 - e.clientY
          element.style.top =
            parseInt((element.style.top || '0px').slice(0, -2)) - p1 + 'px'
          element.style.left =
            parseInt((element.style.left || '0px').slice(0, -2)) - p2 + 'px'
        }}
        onMouseUp={e => {
          dragging = false
        }}
      />
      <audio id="audio" preload="none" />
      <CloseButton id="close" onClick={handleClick}>
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
