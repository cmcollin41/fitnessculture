import React from  "react"
import BlockContent from '@sanity/block-content-to-react'
import DownloadCTA from '../CTAs/DownloadCTA'
import BasicCTA from '../CTAs/BasicCTA'


const BlockText = ({block,product}) => {

  const serializers = {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
    marks: {
      color: props => (
        <span style={{color: props.mark.hex}}>
          {props.children}
        </span>
      )
    }
  }

  function getBlockComponent(cta, product) {
    switch (cta._type) {

      case 'downloadCTA':
        return <DownloadCTA key={cta._key} cta={cta} product={product} />

      case 'basicCTA':
        return <BasicCTA key={cta._key} cta={cta} />

      default:
        return <div className="no_block_type" />
    }
  }


  return (
    <div className={`w-full lg:w-1/2 lg:px-10 mx-auto ` + block.alignment}>
      <BlockContent className="mt-5" blocks={block._rawText} serializers={serializers} />
      <div className="mt-10">
        {block.ctas.map(cta => getBlockComponent(cta,product))}
      </div>
    </div>
  )
}

export default BlockText;