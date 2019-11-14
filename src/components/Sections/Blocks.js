import React from "react"
import BlockText from "../Blocks/BlockText"
import BlockImage from "../Blocks/BlockImage"

const Blocks = ({section}) =>{
  
  function getBlockComponent(block,section) {
    switch (block._type) {

      case 'blockText':
        return <BlockText key={block._key} block={block} section={section} />

      case 'blockImage':
        return <BlockImage key={block._key} block={block} />

      default:
        return <div className="no_block_type" />
    }
  }

  return (
    <div className="pt-10 pb-20 lg:py-20 mx-5">
      <div className="container mx-auto">
        <h6 className="statement text-3xl text-center text-black pb-5 lg:pb-10">{section.title}</h6>
        <div className="flex flex-row flex-wrap justify-center items-center mt-10 h-full w-full">
          {section.blocks.map(block => getBlockComponent(block,section))}
        </div>
      </div>
    </div>
  )
}

export default Blocks;