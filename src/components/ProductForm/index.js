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
  }, [product.options])
  

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant])


  const checkAvailability = (productId) => {
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
    // setTimeout(() => {
    //   context.setCartPreview(false)
    // }, 10000);
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
    
    const filteredVariants = node.variants ? node.variants.filter(chosenVariant(variant.Color ? variant.Color : variant.Time)) : product
  

  return (
    <>
      <div className="w-full lg:w-2/3 flex flex-row flex-nowrap lg:flex-wrap overflow-x-scroll lg:overflow-x-hidden scroll-x-mandatory -mx-1">
        {filteredVariants.map((n, i) => (
          <div className="w-full md:w-1/2 snap-align-center p-1">
            <Img
              fluid={n.image.asset.fluid}
              key={i}
              alt={n.optionName}
              className="block w-full bg-cover bg-center text-center overflow-hidden"
              style={{minWidth: "300px", height: "500px"}}
            />
          </div>
        ))}
      </div>

      <div className="w-full lg:w-1/3 px-5">
        <h1 className="text-xl uppercase mt-6 statement">{product.title}</h1>
        <h3 className="my-4">${Math.floor(productVariant.price)}</h3>
        {variantSelectors}
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="quantity">
          Quantity
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="number"
          id="quantity"
          name="quantity"
          min="0"
          step="1"
          onChange={handleQuantityChange}
          value={quantity}
        />
        <br/>
        <button type="submit" disabled={!available || context.adding} onClick={handleAddToCart} className={"px-2 py-4 bg-black text-white uppercase w-full rounded-sm " + (!available ? "bg-gray-500 cursor-auto" : "" || context.adding ? "bg-green-500 cursor-not-allowed" : "")}>
          {!available ? "Out of Stock!" : context.adding ? "Adding to cart..." : "Add to Cart"}
        </button>
       
        <div className="mt-10">
          {node._rawDescription && 
            <Toggle 
              render={({on, toggle}) => (
                <div>
                  <div onClick={toggle} className="block mt-4 lg:mt-0 text-black py-4 border-b border-gray-300 cursor-pointer">
                    <div className="flex justify-between">
                      <span className="text-sm uppercase">Description</span>
                      <img alt="Description Down Arrow" src={Down} width="14px" />
                    </div>
                    {on && 
                      <div style={{fontSize: "0.75rem"}}>
                        <BlockContent blocks={node._rawDescription} serializers={serializers} />
                      </div>
                    }
                  </div>
                </div>
              )}
            />
          }
          {node._rawSizing && 
            <Toggle 
              render={({on, toggle}) => (
                <div>
                  <div onClick={toggle} className="block mt-4 lg:mt-0 text-black py-4 border-b border-gray-300 cursor-pointer">
                    <div className="flex justify-between">
                      <span className="text-sm uppercase">Sizing Guide</span>
                      <img alt="Sizing Guide Down Arrow" src={Down} width="14px"/>
                    </div>
                    {on && 
                      <div style={{fontSize: "0.75rem"}}>
                        <BlockContent blocks={node._rawSizing} serializers={serializers} />
                      </div>
                    }
                  </div>
                </div>
              )}
            />
          }
          {node._rawShipping &&
            <Toggle 
              render={({on, toggle}) => (
                <div>
                  <div onClick={toggle} className="block mt-4 lg:mt-0 text-black py-4 border-b border-gray-300 cursor-pointer">
                    <div className="flex justify-between">
                      <span className="text-sm uppercase">Shipping & Returns</span>
                      <img alt="Shipping and Returns Down Arrow" src={Down} width="14px"/>
                    </div>
                    {on && 
                      <div style={{fontSize: "0.75rem"}}>
                        <BlockContent blocks={node._rawShipping} serializers={serializers} />
                      </div>
                    }
                  </div>
                </div>
              )}
            />
          }
        </div>
      </div>
    </>
  )
}


export default ProductForm