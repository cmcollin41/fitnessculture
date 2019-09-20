import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ProductForm from '../components/ProductForm/index'
import '../css/global.css'

const Product = ({ data }) => {

  const product = data.shopifyProduct

  return (
    <React.Fragment>
      <Layout>
        <div className="container mx-auto">
          {product.images.map(x => (
            <Img
              fluid={x.localFile.childImageSharp.fluid}
              key={x.id}
              alt={product.title}
            />
          ))}
          <h1>{product.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
          <ProductForm product={product} />
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Product


export const pageQuery = graphql`
  query($handle: String!) {
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
  }
`


