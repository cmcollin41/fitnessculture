import React from 'react'
import {graphql} from "gatsby"
import Layout from "../components/layout"
import ProductForm from '../components/ProductForm/index'
import '../css/global.css'

const Product = ({ data }) => {

  const product = data.shopifyProduct
  const page = data.sanityProduct


    
  return (
    <React.Fragment>
      <Layout>
        <div className="container mx-auto px-5 my-0 lg:my-10">
          <div className="flex flex-wrap -mx-5 relative">
            <ProductForm product={product} node={page} />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Product


export const pageQuery = graphql`
  query($shopifyId: String!, $strippedId: String!) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      id
      title
      handle
      productType
      descriptionHtml
      shopifyId

      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }

    sanityProduct(shopifyId: {eq: $strippedId}) {
      shopifyId
      _rawDescription
      _rawSizing
      _rawShipping
      metaTitle
      metaDescription
      metaKeywords
      variants {
        optionName
        image {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
        }
      }
    }
  }
`


