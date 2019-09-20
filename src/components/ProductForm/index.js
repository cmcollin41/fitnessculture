import React, { useState, useContext, useEffect } from 'react'
import StoreContext from '../../context/StoreContext'
import VariantSelector from './VariantSelector/index'

const ProductForm = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState(product.variants[0])
  const context = useContext(StoreContext)

  console.log(context.client)

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
    ? product.options.map(option => {
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
      <h3>${productVariant.price}</h3>
      {variantSelectors}
      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        step="1"
        onChange={handleQuantityChange}
        value={quantity}
      />
      <br/>
      <button type="submit" disabled={!available || context.adding} onClick={handleAddToCart}>
        Add to Cart
      </button>
      {!available && <p>This Product is out of Stock!</p>}
    </>
  )
}


export default ProductForm