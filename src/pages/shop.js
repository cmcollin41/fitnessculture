import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import '../css/global.css'

const Shop = ({ data }) => {
  const shop = data.sanityShop
  return (
    <Layout>
      <SEO title={shop.title} description={shop.subtitle} image={shop.heroImage.asset.url} />
      <BackgroundImage
      className={'flex flex-col justify-center items-center bg-cover bg-top p-5'}
      style={{minHeight: "60vh"}}
      fluid={shop.heroImage.asset.fluid}
      >
        <h1 className="uppercase text-center text-white text-4xl lg:text-6xl mt-4" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)"}}>
          {shop.title}
        </h1>
        <p className="text-center text-white mt-5 lg:w-1/2 text-xl w:1-2 hidden lg:block" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5"}}>
          {shop.subtitle}
        </p>
      </BackgroundImage>
        <div className="container mx-auto py-20 px-5">
          <div className="flex flex-col lg:flex-row justify-center items-center items-stretch">
            <div className="w-full lg:w-2/3 mt-10 lg:flex shadow-md mx-3 flex-grow">
              <Img
                className={'h-64 lg:h-auto w-full lg:w-1/2 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center'} 
                fluid={shop.ebookImage.asset.fluid}
              />
              <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-5 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <h3 className="uppercase font-bold text-xl mb-2">{shop.ebookTitle}</h3>
                  <p className="text-gray-700 text-base">{shop.ebookSubtitle}</p>
                </div>
 
              </div> 
            </div> 
            <div className="w-full lg:w-2/3 mt-10 lg:flex shadow-md mx-3 flex-grow">
              <Img 
                className={'h-64 lg:h-auto lg:w-1/2 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'} 
                fluid={shop.apparelImage.asset.fluid}
              />
              <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-5 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <h3 className="uppercase font-bold text-xl mb-2">{shop.apparelTitle}</h3>
                  <p className="text-gray-700 text-base">{shop.apparelSubtitle}</p>
                </div>
   
              </div> 
            </div>  
          </div>
        </div>

    </Layout>
)}

export default Shop



export const aboutQuery = graphql`
  {
    sanityShop {      
      id
      title
      subtitle
      heroImage {
        asset {
          fluid(maxWidth: 1425) {
            ...GatsbySanityImageFluid_withWebp
          }
          url
        }
      }
      apparelTitle
      apparelSubtitle
      apparelImage {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid_withWebp
          }
        }
      }
      ebookTitle
      ebookSubtitle
      ebookImage {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid_withWebp
          }
        }
      }      
    }
  }
`



