import React from "react"
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import BlockContent from '@sanity/block-content-to-react'

const Hero = ({section}) => {


  const serializers = {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
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
    <BackgroundImage
    className={'flex flex-col justify-center items-center bg-cover bg-top p-5'}
    style={{minHeight: "60vh"}}
    fluid={section.image.asset.fluid}
    >
      <div className="flex flex-row flex-wrap justify-center items-center w-full">
        <div className="w-full lg:w-1/2">
          <h1 className="statement text-white text-center text-3xl lg:text-4xl mt-4 font-bold" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)"}}>
            {section.title}
          </h1>
          <BlockContent className="mt-5 w-full" blocks={section._rawDescription} serializers={serializers} />
          <div className="py-10 text-center">
            <Link to={section.link} className="btn-lg bg-blue-500 text-white rounded shadow-lg">
              {section.cta}
            </Link>
          </div>
        </div>
        {/* <div className="w-full lg:w-1/2">
        </div> */}
      </div>
    </BackgroundImage>
  )
}

export default Hero;