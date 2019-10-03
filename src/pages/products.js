import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
// import BackgroundImage from 'gatsby-background-image'

import SEO from '../components/seo'

const Programs = ({ data }) => {

  const products = data.allShopifyProduct.edges
  return (
    <Layout>
      <SEO title="Fitness Culture Programs" />

      <div className="pt-10 pb-20">
        <div className="container mx-auto">
          <div className="flex flex-row flex-wrap px-5 lg:px-auto -mx-3 h-full items-stretch justify-center">
            {products.map((product,i) => {
              return (
                <div key={i} className="w-full md:w-1/2 lg:w-1/4 mx-3 rounded mt-10 flex flex-col items-stretch bg-gray-100">
                  <Img fluid={product.node.images[0].localFile.childImageSharp.fluid} />
                  <div className="flex flex-col justify-between flex-grow">
                    <div className="p-5">
                      <h4 className="uppercase text-base">{product.node.title}</h4>
                      <p className="text-sm">{product.subtitle}</p>
                    </div>
                    <div className="p-5">
                      <Link to={"/products/" + product.node.handle} className="uppercase font-bold text-xs bg-gray-900 text-white rounded-full py-2 px-4">See Item</Link>
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
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid_withWebp
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
