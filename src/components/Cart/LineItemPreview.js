import React, { useContext } from 'react'
// import { Link } from "gatsby"

import StoreContext from '../../context/StoreContext'

const LineItemPreview = props => {
  
  const context = useContext(StoreContext)
  const { line_item } = props


  const selectedOptions = line_item.variant.selectedOptions ? (
    <>{line_item.variant.selectedOptions.map(option => {
      return (
        <p className="text-xs">{`${option.name}: ${option.value}`}</p>
      )
    })}</>
  ) : null
 
  const handleQuantityChange = event => {
    context.updateLineItem(context.client, context.checkout.id, line_item.id, event.target.value)
  }

  const handleRemove = () => {
    context.removeLineItem(context.client, context.checkout.id, line_item.id)
  }


  return (
    <div className="flex flex-wrap w-full mb-10 border border-gray-200 rounded-sm bg-white snap-align-center mx-2" style={{minWidth: "275px"}}>
      <div className="w-full lg:w-1/4 h-48 block bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${line_item.variant.image.src})`}} title={line_item.title}>
      </div>
      <div className="w-full lg:w-3/4 flex flex-col lg:flex-row justify-between items-start py-4 px-3 ">
        <div className="w-full flex-grow">
          <span className="font-bold text-sm">

            {/* <Link to={`/products/` + (line_item.title.replace(/\s+/g, '-').toLowerCase())}>{line_item.title}</Link> */}
            {line_item.title}
            {`  `}
            {line_item.variant.title === ! 'Default Title' ? line_item.variant.title : ''}
          </span>
          {selectedOptions}
          <button onClick={handleRemove} className="text-xs mt-auto hidden lg:block">Remove</button>
        </div>
        <div className="flex justify-between items-center lg:justify-end w-full">
          <button onClick={handleRemove} className="text-xs block lg:hidden">Remove</button>
          <input
          className="appearance-none w-24 text-center block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          step="1"
          onChange={handleQuantityChange}
          value={line_item.quantity} 
        />
        </div>
      </div>
    </div>
  )
}

export default LineItemPreview
