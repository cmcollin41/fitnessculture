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
      return (
        <p>{`${option.name}: ${option.value}`}</p>
      )
    })}</>
  ) : null

  const handleRemove = () => {
    context.removeLineItem(context.client, context.checkout.id, line_item.id)
  }

  return (
    <div className="flex flex-wrap justify-between items-start">
      <div style={{maxWidth: "125px"}}>
        {variantImage}
      </div>
      <div>
        <span className="font-bold text-xl">
          {line_item.title}
          {`  `}
          {line_item.variant.title === ! 'Default Title' ? line_item.variant.title : ''}
        </span>
        {selectedOptions}
      </div>
      <div>
        {line_item.quantity}
      </div>
      <div>
        <button onClick={handleRemove} className="text-xs">Remove</button>
      </div>
    </div>
  )
}

export default LineItem
