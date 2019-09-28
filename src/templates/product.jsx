import React, { useState, useContext, useEffect } from 'react'
import {graphql} from "gatsby"
import Layout from "../components/layout"
import ProductForm from '../components/ProductForm/index'
import '../css/global.css'

const Product = ({ data }) => {

  const product = data.shopifyProduct
  const node = data.sanityProduct.variants

    
  return (
    <React.Fragment>
      <Layout>
        <div className="container mx-auto px-5 my-10">
          <div className="flex flex-wrap -mx-5">
            <ProductForm product={product} node={node} />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Product


export const pageQuery = graphql`
  query($handle: String!, $shopid: String!) {
    shopifyProduct(handle: { eq: $handle }) {
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

    sanityProduct(shopifyId: {eq: $shopid}) {
      shopifyId
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


