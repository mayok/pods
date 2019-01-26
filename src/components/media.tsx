import React, { useEffect } from 'react'
import styled from 'styled-components'
import { IMedia } from '../interfaces'

interface Props {
  media: IMedia
}

const Media = React.memo(({ media }: Props) => {
  useEffect(() => {
    if (!!media.type) {
      ;(document.querySelector('#player') as HTMLElement).classList.add(
        'active'
      )
      const _media = document.querySelector(
        `#${media.type}`
      ) as HTMLMediaElement
      const progress = document.querySelector('#progress') as HTMLInputElement
      // progress.value = `${_media.currentTime / _media.duration}`

      _media.addEventListener('timeupdate', () => {
        progress.value = `${_media.currentTime / _media.duration}`
      })
    }
    return function cleanup() {
      ;(document.querySelector('#player') as HTMLElement).classList.remove(
        'active'
      )
    }
  }, [media])

  return (
    <Player id="player">
      <video id="video" preload="none" />
      <audio id="audio" preload="none" />
      <Controls id="controls">
        <ControlsTimeButtons>
          <Play
            id="play"
            className="playing"
            onClick={() => {
              ;(document.querySelector(
                '#play'
              ) as HTMLElement).classList.toggle('playing')
            }}
          />
          <Rewind id="rewind" />
          <Forward id="forward" />
        </ControlsTimeButtons>
        <Progress
          id="progress"
          type="range"
          min="0"
          max="100"
          step="0.01"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const _media = document.querySelector(
              `#${media.type}`
            ) as HTMLMediaElement
            _media.currentTime =
              parseInt(e.currentTarget.value) * _media.duration
          }}
        />
        <ControlsWindowButtons>
          <Pip />
        </ControlsWindowButtons>
      </Controls>
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

const Controls = styled.div`
  position: relative;
  display: none;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
`

const ControlsTimeButtons = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 220px;
  height: 62px;
`
const ControlsWindowButtons = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  width: 62px;
  height: 40px;
`

const Play = styled.button`
  position: relative;
  width: 62px;
  height: 62px;

  &:after {
    content: |>;
    letter-spacing: 0;
    font-weight: bold;
  }
  &.playing:after {
    content: '||';
    font-weight: bold;
  }
`
const Rewind = styled.button`
  position: relative;
  width: 62px;
  height: 62px;
`
const Forward = styled.button`
  position: relative;
  width: 62px;
  height: 62px;
`

const Progress = styled.input`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80%;
`
const Pip = styled.button`
  width: 62px;
  height: 30px;
`
