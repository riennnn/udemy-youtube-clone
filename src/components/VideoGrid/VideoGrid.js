import React from 'react'
import Style from './VideoGrid.module.scss'

const VideoGrid = ({chidlren}) => {
  return (
    <div className={Style.container}>
      {chidlren}
    </div>
  )
}

export default VideoGrid

