export function requestPiP(setMedia: Function) {
  const video = document.querySelector('#video') as HTMLVideoElement

  console.log(
    'document.pictureInPictureEnabled',
    // @ts-ignore
    document.pictureInPictureEnabled
  )
  // @ts-ignore
  console.log('video.disablePictureInPicture', video.disablePictureInPicture)
  console.log(
    'document.pictureInPictureElement',
    // @ts-ignore
    document.pictureInPictureElement
  )

  video.addEventListener('loadedmetadata', () => {
    // @ts-ignore: video does not have requestPictureInPicture API yet
    video.requestPictureInPicture()
  })

  video.addEventListener('leavepictureinpicture', () => {
    setMedia({ url: '', type: '' })
  })

  video.load()
}
