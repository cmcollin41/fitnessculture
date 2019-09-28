import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
// import BackgroundImage from 'gatsby-background-image'

import SEO from '../components/seo'

import logo1 from '../assets/logo-1.svg'
import logo2 from '../assets/logo-2.svg'
import logo3 from '../assets/logo-3.svg'
import logo4 from '../assets/logo-4.svg'
import logo5 from '../assets/menshealth.png'


const Programs = ({ data }) => {

  const products = data.allShopifyProduct.edges
  return (
    <Layout>
      <SEO title="Fitness Culture Programs" />
      <div
      className={'flex flex-col justify-center items-center bg-cover bg-center p-5'}
      style={{minHeight: "60vh"}}
      >
        <h1 className="uppercase text-center text-white text-4xl lg:text-6xl mt-4" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)"}}>
          Products
        </h1>
        <p className="text-center text-white mt-5 lg:w-1/2 text-xl w:1-2 hidden lg:block" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5"}}>
          Buy our products
        </p>
      </div>
      <div className="w-full bg-gray-100 pt-4 pb-2">
        <div className="container mx-auto">
          <p className="text-black uppercase text-xs text-center pt-2">Programs Engineered by Experts Featured in:</p>
          <div className="flex flex-row justify-between items-center h-full overflow-scroll lg:overflow-hidden">
            <img src={ logo1 }  alt="Social Proof 1" width="100px" className="px-2" />
            <img src={ logo2 }  alt="Social Proof 2" width="100px" className="px-2" />
            <img src={ logo4 }  alt="Social Proof 3" width="100px" className="px-2" />
            <img src={ logo3 }  alt="Social Proof 4" width="100px" className="px-2" />
            <img src={ logo5 }  alt="Social Proof 5" width="100px" className="px-2" />
          </div>
        </div>
      </div>

      <div className="pt-10 pb-20">
        <div className="container mx-auto">
          <div className="flex flex-row flex-wrap px-5 lg:px-auto -mx-3 h-full items-stretch justify-center">
            {products.map((product,i) => {
              return (
                <div key={i} className="w-full md:w-1/2 lg:w-1/4 mx-3 rounded bg-gray-900 mt-10 flex flex-col items-stretch">
                  <Img fluid={product.node.images[0].localFile.childImageSharp.fluid.srcSetWebp} />
                  <div className="flex flex-col justify-between flex-grow">
                    <div className="p-5">
                      <h4 className="text-white uppercase text-2xl">{product.node.title}</h4>
                      <p className="text-white text-sm mt-2">{product.subtitle}</p>
                    </div>
                    <div className="p-5">
                      <Link to={"/products/" + product.node.handle} className="uppercase font-bold text-xs text-white border border-white rounded-full py-2 px-4">See Item</Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

    </Layout>

  )
}

export default Programs

export const pageQuery = graphql`
query AllProducts {
  allShopifyProduct {
    edges {
      node {
        title
        description
        handle
        shopifyId
        images {
          localFile {
            childImageSharp {
              fluid {
                srcSetWebp
              }
            }
          }
        }
        variants {
          price
          title
          sku
          shopifyId
        }
      }
    }
  }
}
`