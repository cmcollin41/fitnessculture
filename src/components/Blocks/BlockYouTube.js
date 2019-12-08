import React from  "react"
import YouTube from "../YouTube"

const BlockYouTube = ({block}) => {

  return (
    <div className="w-full lg:w-1/2 lg:mt-auto py-10">
      <YouTube youtubeId={block.youtubeid} />
    </div>
  )
}

export default BlockYouTube;