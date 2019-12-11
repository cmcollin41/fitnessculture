import React, {useContext} from 'react'
import StoreContext from '../../context/StoreContext'

const DownloadCTA = ({cta, product}) => {

  const context = useContext(StoreContext)
 
  const handleAddToCart = () => {
    context.addVariantToCart(product.variants[0].shopifyId, 1)
    // setTimeout(() => {
    //   context.setCartPreview(false)
    // }, 10000);
  }
  
  return (
    <button type="submit" disabled={context.adding} onClick={handleAddToCart} className={"px-4 py-4 bg-black text-white uppercase rounded-sm shadow-lg " + (context.adding ? "bg-green-500 cursor-not-allowed" : "")}>
        ${Math.floor(product.variants[0].price) + " - " + (context.adding ? "Adding to cart..." : cta.action)}
    </button>
  )
}


export default DownloadCTA;