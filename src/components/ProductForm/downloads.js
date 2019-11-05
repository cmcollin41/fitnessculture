import React, {useContext} from 'react'
import StoreContext from '../../context/StoreContext'




const Downloads = ({ product}) => {

  const context = useContext(StoreContext)
 
  const handleAddToCart = () => {
    context.addVariantToCart(product.variants[0].shopifyId, 1)
    setTimeout(() => {
      context.setCartPreview(false)
    }, 5000);
  }
  
  

  return (
    <>
      <div className="w-full flex">
        <button type="submit" disabled={context.adding} onClick={handleAddToCart} className={"px-2 py-4 bg-black text-white uppercase w-full rounded-sm " + (context.adding ? "bg-green-500 cursor-not-allowed" : "")}>
            ${Math.floor(product.variants[0].price) + " " + "-" + " " + (context.adding ? "Adding to cart..." : "Add to Cart")}
        </button>
      </div>
    </>
  )
}


export default Downloads