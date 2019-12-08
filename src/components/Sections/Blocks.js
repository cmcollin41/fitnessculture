import React from "react"
import BlockText from "../Blocks/BlockText"
import BlockImage from "../Blocks/BlockImage"
import BlockVideo from "../Blocks/BlockVideo"
import BlockYouTube from "../Blocks/BlockYouTube"
import DripForm from "../Blocks/DripForm"

const Blocks = ({section,product}) =>{
  
  function getBlockComponent(block,section) {
    switch (block._type) {

      case 'blockText':
        return <BlockText key={block._key} block={block} product={product} />

      case 'blockImage':
        return <BlockImage key={block._key} block={block} />

      case 'blockVideo':
        return <BlockVideo key={block._key} block={block} />
      
      case 'blockYouTube':
        return <BlockYouTube key={block._key} block={block} />

      case 'dripForm':
        return <DripForm key={block._key} block={block} />

      default:
        return <div className="no_block_type" />
    }
  }

  return (
    <div className="py-10 mx-5">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap justify-center items-center h-full w-full">
          {section.blocks.map(block => getBlockComponent(block,product))}
        </div>
      </div>
    </div>
  )
}

export default Blocks;