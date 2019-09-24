import React, { useState, useContext, useEffect } from 'react'
import StoreContext from '../../context/StoreContext'
import VariantSelector from './VariantSelector'


const ProductForm = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState(product.variants[0])
  const context = useContext(StoreContext)

  const hasVariants = product.variants.length > 1
  const productVariant = context.client.product.helpers.variantForOptions(product, variant) || variant
  const [available, setAvailable] = useState(productVariant.availableForSale)

  useEffect(() => {
    let defaultOptionValues = {}
    product.options.forEach(selector => {
      defaultOptionValues[selector.name] = selector.values[0]
    })
    setVariant(defaultOptionValues)
  }, [])

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant])

  const checkAvailability = productId => {
    context.client.product.fetch(productId).then((product) => {
      // this checks the currently selected variant for availability
      const result = product.variants.filter(
        variant => variant.id === productVariant.shopifyId
      )
      setAvailable(result[0].available)
    })
  }
 
  const handleQuantityChange = event => {
    setQuantity(event.target.value)
  }

  const handleOptionChange = event => {
    const { target } = event
    setVariant(prevState => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const handleAddToCart = () => {
    context.addVariantToCart(productVariant.shopifyId, quantity)
    alert(quantity)
  }

  const variantSelectors = hasVariants
    ? product.options.map((option,i) => {

          return (
            <VariantSelector
              onChange={handleOptionChange}
              key={option.id.toString()}
              option={option}
            />
          )

      })
    : null

  return (
    <>
      <h3 className="mt-2">${productVariant.price}</h3>
      {variantSelectors}
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="quantity">
        Quantity
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        step="1"
        onChange={handleQuantityChange}
        value={quantity}
      />
      <br/>
      <button type="submit" disabled={!available || context.adding} onClick={handleAddToCart} className="px-2 py-4 bg-black text-white uppercase w-full rounded">
        Add to Cart
      </button>
      {!available && <p>This Product is out of Stock!</p>}
    </>
  )
}


export default ProductForm