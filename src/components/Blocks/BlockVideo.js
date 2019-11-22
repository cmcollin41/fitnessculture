import React from  "react"

const BlockVideo = ({block}) => {

  return (
    <div className="w-full lg:w-1/2 py-10 lg:mt-auto">
      <video muted playsInline autoPlay loop>
        <source src={block.video.asset.url} />
        Your browser doesn't support video
      </video>
    </div>
  )
}

export default BlockVideo;