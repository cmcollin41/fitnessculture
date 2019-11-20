import React from  "react";
import Img from "gatsby-image"


const BlockImage = ({block}) => {

  return (
    <div className="w-full lg:w-1/2 mt-10">
      <Img className="w-full" fluid={block.image.asset.fluid}/>
    </div>
  )
}

export default BlockImage;