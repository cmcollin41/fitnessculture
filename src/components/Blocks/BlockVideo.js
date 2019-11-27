import React from  "react"

const BlockVideo = ({block}) => {

  return (
    <div className="w-full lg:w-1/2 lg:mt-auto py-10">
      <video muted playsInline autoPlay loop controls width="100%">
        <source src={block.video.asset.url} />
        Your browser doesn't support video
      </video>
    </div>
  )
}

export default BlockVideo;