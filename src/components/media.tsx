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
      // if media == video:
      //   media.requestpip()
      // media.play()
    }
  })

  // if media not defined, do nothing
  if (!media.type) {
    return <></>
  }

  return (
    <>
      {media.type === 'video' ? (
        <video src={media.url} />
      ) : (
        <audio src={media.url} />
      )}

      <Controls />
    </>
  )
})

export default Media

const Controls = styled.div`
  width: 80vw;
`
