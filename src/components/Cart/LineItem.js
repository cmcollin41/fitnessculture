import React, { useState, useContext } from 'react'
import { Link } from "gatsby"

import StoreContext from '../../context/StoreContext'

const LineItem = props => {
  
  const context = useContext(StoreContext)
  const { line_item } = props
  console.log(line_item)
  const [quantity, setQuantity] = useState(line_item.quantity)

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

 
  const handleQuantityChange = event => {
    setQuantity(event.target.value)
    context.updateLineItem(context.client, context.checkout.id, line_item.id, event.target.value)
  }

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
          <input
          className="appearance-none w-24 text-center block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          step="1"
          onChange={handleQuantityChange}
          value={quantity}
        />
        </div>
      </div>
    </div>
  )
}

export default LineItem
