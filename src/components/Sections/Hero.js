import React from "react"
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import BlockContent from '@sanity/block-content-to-react'

const Hero = ({section}) => {
  return (
    <BackgroundImage
    className={'flex flex-col justify-center items-center bg-cover bg-top p-5'}
    style={{minHeight: "60vh"}}
    fluid={section.image.asset.fluid}
    >
      <span className="hidden lg:flex rounded-full bg-black uppercase px-2 py-1 text-xs text-white">Your #1 Fitness App</span>
      <h1 className="statement text-center text-white text-4xl lg:text-5xl mt-4 font-bold" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)"}}>
        {section.title}
      </h1>
      <p className="text-center text-white mt-5 lg:w-1/2 xl:w-1/3 text-xl hidden lg:block" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5"}}>
        <BlockContent className="mt-5" blocks={section._rawDescription} serializers={serializers} />
      </p>
      <div className="py-10">
        <Link to={section.link} className="btn-lg text-white rounded shadow-lg">
          {section.link}
        </Link>
      </div>
    </BackgroundImage>
  )
}

export default Hero;