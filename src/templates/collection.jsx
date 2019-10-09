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
          <div className="flex flex-row flex-wrap px-5 lg:px-auto -mx-3 h-full items-stretch justify-center">
            {collection.products.map((product,i) => {
              return (
                <div key={i} className="w-full md:w-1/2 lg:w-1/4 mx-3 rounded mt-10 flex flex-col items-stretch bg-gray-100">
                  <Img fluid={product.images[0].localFile.childImageSharp.fluid} />
                  <div className="flex flex-col justify-between flex-grow">
                    <div className="p-5">
                      <h4 className="uppercase text-base">{product.title}</h4>
                      <p className="text-sm">{product.description}</p>
                    </div>
                    <div className="p-5">
                      <Link to={"/products/" + product.handle} className="uppercase font-bold text-xs bg-gray-900 text-white rounded-full py-2 px-4">See Item</Link>
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