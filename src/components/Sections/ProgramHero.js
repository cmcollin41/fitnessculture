import React from 'react'
import BlockText from "../Blocks/BlockText"
import BlockImage from "../Blocks/BlockImage"
import BlockVideo from "../Blocks/BlockVideo"
import DripForm from "../Blocks/DripForm"


// Images
import circles from '../../assets/circles.svg'

const ProgramHero = ({section, page, product}) => {

  function getBlockComponent(block,product) {
    switch (block._type) {

      case 'blockText':
        return <BlockText key={block._key} block={block} product={product} />

      case 'blockImage':
        return <BlockImage key={block._key} block={block} />

      case 'blockVideo':
        return <BlockVideo key={block._key} block={block} />

      case 'dripForm':
        return <DripForm key={block._key} block={block} />

      default:
        return <div className="no_block_type" />
    }
  }
  
  return (
    <>
      <div className="h-2 w-full" style={{backgroundImage: 'linear-gradient(to right, ' + page.colorOne.hex + ',' + page.colorTwo.hex + ')'}}></div>
      <div className="py-10 lg:py-20 relative">
        <div className="absolute h-full bottom-0 left-0 overflow-x-hidden" style={{zIndex: "-10"}}>
          <img src={circles} alt="circles" width="200px" height="100%" style={{transform: "scale(-1)"}}/>
        </div>
        <div className="hidden lg:block absolute h-full" style={{transform: "translate(-35%, 50%)"}}>
          <h2 className="uppercase text-gray-300 text-3xl font-bold" style={{transform: "rotate(90deg)"}}>Fitness Program</h2>
        </div>
        <div className="container mx-auto px-5 pb-5 pt-3">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            {section.blocks.map(block => getBlockComponent(block, product))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProgramHero;
