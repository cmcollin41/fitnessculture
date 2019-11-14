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
      )
    }
  }

  return (
    <div className="w-full lg:w-1/2 pt-5 lg:p-10 mx-auto">
      <h3 className="text-lg lg:text-3xl statement">{block.title}</h3>
      <BlockContent className="mt-5" blocks={block._rawBody} serializers={serializers} />
      <div className="mt-10">
        <Link to={section.link} className="btn text-blue-500 border border-blue-500 rounded-sm">{section.link}</Link>
      </div>
    </div>
  )
}

export default BlockText;