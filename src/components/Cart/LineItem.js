import React, { useContext } from 'react'
import { Link } from "gatsby"
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
      className="block w-full bg-cover bg-center text-center overflow-hidden px-5"
    />
  ) : null

  const selectedOptions = line_item.variant.selectedOptions ? (
    <>{line_item.variant.selectedOptions.map(option => {
      return (
        <p className="text-xs">{`${option.name}: ${option.value}`}</p>
      )
    })}</>
  ) : null

  const handleRemove = () => {
    context.removeLineItem(context.client, context.checkout.id, line_item.id)
  }

  return (
    <div className="flex flex-wrap w-full mb-10">
      <div className="w-full lg:w-1/4 mt-4">
        {variantImage}
      </div>
      <div className="w-full lg:w-3/4 flex flex-row justify-between mt-4">
        <div>
          <span className="font-bold text-sm">
            <Link to={`/products/` + (line_item.title.replace(/\s+/g, '-').toLowerCase())}>{line_item.title}</Link>
            {`  `}
            {line_item.variant.title === ! 'Default Title' ? line_item.variant.title : ''}
          </span>
          {selectedOptions}
          <button onClick={handleRemove} className="text-xs">Remove</button>
        </div>
        <div>
          {line_item.quantity}
        </div>
      </div>
    </div>
  )
}

export default LineItem
