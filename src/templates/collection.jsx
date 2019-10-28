import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
// import BackgroundImage from 'gatsby-background-image'

import SEO from '../components/seo'

const Collection = ({ data }) => {

  const collection = data.shopifyCollection
  return (
    <Layout>
      <SEO title="Fitness Culture Programs" />

      <div className="pt-10 pb-20">
        <div className="container mx-auto">
          <div>
            <h1 className="statement text-center text-4xl">{collection.title}</h1>
            <p className="text-center text-l">{collection.description}</p>
          </div>
          <div className="flex flex-row flex-wrap lg:px-auto mx-0 lg:-mx-3 h-full items-stretch lg:justify-center">
            {collection.products.map((product,i) => {
              return (
                <Link to={"/products/" + product.handle} key={i} className="w-1/2 lg:w-1/4 px-3 lg:mx-3 rounded mt-10 flex flex-col items-stretch">
                  <Img 
                    fluid={product.images[0].localFile.childImageSharp.fluid}
                    className="block h-64 w-full bg-cover bg-center text-center overflow-hidden"
                  />
                  <div className="flex flex-col justify-between flex-grow">
                    <div className="px-1 py-2 text-center">
                      <h4 className="text-xs lg:text-sm text-black">{product.title}</h4>
                      <p className="text-xs lg:text-sm text-black">${(product.priceRange.minVariantPrice.amount * 1).toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

    </Layout>

  )
}

export default Collection

export const pageQuery = graphql`
query AllCollections($shopifyId: String!) {
  shopifyCollection(shopifyId: {eq: $shopifyId}) {
    title
    description
    handle
    shopifyId
    products {
      title
      description
      handle
      priceRange {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
      images {
        localFile {
          childImageSharp {
            fluid(maxWidth: 600){
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
}
`