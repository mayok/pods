export function requestPiP(setMedia: Function) {
  const video = document.querySelector('#video') as HTMLVideoElement

  video.addEventListener('loadeddata', () => {
    ;(video as any).requestPictureInPicture().catch((e: string) => {
      console.log(e)
    })
  })

  video.addEventListener('leavepictureinpicture', () => {
    setMedia({ url: '', type: '' })
  })

  video.load()
}
