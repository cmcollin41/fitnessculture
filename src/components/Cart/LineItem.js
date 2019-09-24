import React, { useContext } from 'react'
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

import StoreContext from '../../context/StoreContext'

const LineItem = props => {
  
  const context = useContext(StoreContext)
  const { line_item } = props
  // const image = useStaticQuery(graphql`
  //   query{
  //     file(relativePath: { eq: "line_item.variant.image"}) {
  //       childImageSharp {
  //         # Specify the image processing specifications right in the query.
  //         # Makes it trivial to update as your page's design changes.
  //         fluid(maxWidth: 1000) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title}`}
      height="60px"
    />
  ) : null

  const selectedOptions = line_item.variant.selectedOptions ? (
    <>{line_item.variant.selectedOptions.map(option => {
      return `${option.name}: ${option.value} `
    })}</>
  ) : null

  const handleRemove = () => {
    context.removeLineItem(context.client, context.checkout.id, line_item.id)
  }

  return (
    <div className="flex flex-wrap justify-between items-center">
      <div style={{maxWidth: "300px"}}>
        {variantImage}
      </div>
      <div>
        <p>
          {line_item.title}
          {`  `}
          {line_item.variant.title === ! 'Default Title' ? line_item.variant.title : ''}
        </p>
      </div>
      <div>
        {selectedOptions}
      </div>
      <div>
        {line_item.quantity}
      </div>
      <div>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  )
}

export default LineItem
