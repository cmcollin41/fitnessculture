import React from  "react"
import { Link } from "gatsby"
import BlockContent from '@sanity/block-content-to-react'


const BlockText = ({block, section}) => {

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


  return (
    <div className={`w-full lg:w-1/2 lg:px-10 mx-auto ` + block.alignment}>
      <BlockContent className="mt-5" blocks={block._rawText} serializers={serializers} />
      <div className="mt-10">
        <Link to={section.link} className="btn text-white bg-blue-500 rounded-sm shadow-lg">{section.cta}</Link>
      </div>
    </div>
  )
}

export default BlockText;