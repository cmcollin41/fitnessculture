import React from "react"
import BackgroundImage from 'gatsby-background-image'
import BlockText from "../Blocks/BlockText"
import BlockImage from "../Blocks/BlockImage"
import BlockVideo from "../Blocks/BlockVideo"

const Hero = ({section}) => {

  function getBlockComponent(block,section) {
    switch (block._type) {

      case 'blockText':
        return <BlockText key={block._key} block={block} section={section} />

      case 'blockImage':
        return <BlockImage key={block._key} block={block} />

      case 'blockVideo':
        return <BlockVideo key={block._key} block={block} />

      default:
        return <div className="no_block_type" />
    }
  }

  return (
    <BackgroundImage
      className={'flex flex-col justify-center items-center bg-cover bg-top'}
      style={{minHeight: "60vh"}}
      fluid={section.backgroundImage.asset.fluid}
    >
      <div className="container mx-auto py-20 px-5">
        <div className="flex flex-row flex-wrap justify-center items-center w-full">
          {section.blocks.map(block => getBlockComponent(block,section))}
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero;