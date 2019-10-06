import React, { useState, useContext, useEffect } from 'react'
import StoreContext from '../../context/StoreContext'
import VariantSelector from './VariantSelector'
import Toggle from "../../components/Toggle"
import Img from "gatsby-image"
import Down from "../../assets/chevron-down.svg"
import BlockContent from '@sanity/block-content-to-react'


const ProductForm = ({ product, node }) => {
  const serializers = {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
    }
  }

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

  
  const checkAvailability = hasVariants ? (productId) => {
    context.client.product.fetch(productId).then((product) => {
      // this checks the currently selected variant for availability
      const result = product.variants.filter(
        variant => variant.id === productVariant.shopifyId
      )
      setAvailable(result[0].available)
    })
  } : setAvailable(productVariant.availableForSale)
 
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

    function chosenVariant(value) {
      return n => n.optionName === value
    }
    
    const filteredVariants = node.variants ? node.variants.filter(chosenVariant(variant.Color)) : product
    

  return (
    <>
      <div className="w-full lg:w-2/3 flex flex-row flex-nowrap lg:flex-wrap overflow-x-scroll lg:overflow-x-hidden scroll-x-mandatory -mx-1">
        {filteredVariants.map((n, i) => (
          <div className="w-full md:w-1/2 snap-align-center p-1">
            <Img
              fluid={n.image.asset.fluid}
              key={i}
              alt={n.optionName}
              className="w-full"
              style={{minWidth: "300px"}}
            />
          </div>
        ))}
      </div>

      <div className="w-full lg:w-1/3 px-5">
        <h1 className="text-2xl uppercase mt-6">{product.title}</h1>
        <div className="mt-2" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
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
        <div className="mt-10">
          <Toggle 
            render={({on, toggle}) => (
              <div>
                <div onClick={toggle} className="block mt-4 lg:mt-0 text-black py-4 border-b border-gray-300 cursor-pointer">
                  <div className="flex justify-between">
                    <span className="text-sm uppercase">Description</span>
                    <img src={Down} width="14px" />
                  </div>
                  {on && 
                    <>
                      <BlockContent blocks={node._rawDescription} serializers={serializers} />
                    </>
                  }
                </div>
              </div>
            )}
          />
          <Toggle 
            render={({on, toggle}) => (
              <div>
                <div onClick={toggle} className="block mt-4 lg:mt-0 text-black py-4 border-b border-gray-300 cursor-pointer">
                  <div className="flex justify-between">
                    <span className="text-sm uppercase">Sizing Guide</span>
                    <img src={Down} width="14px"/>
                  </div>
                  {on && 
                    <>
                      <BlockContent blocks={node._rawSizing} serializers={serializers} />
                    </>
                  }
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </>
  )
}


export default ProductForm