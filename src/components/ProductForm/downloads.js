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
      <div className="w-full lg:w-1/3 px-5">
        <h1 className="text-xl uppercase mt-6">{product.title}</h1>
        <h3 className="my-4">${product.variants[0].price}</h3>
   
        <button type="submit" disabled={context.adding} onClick={handleAddToCart} className={"px-2 py-4 bg-black text-white uppercase w-full rounded " + (context.adding ? "bg-green-500 cursor-not-allowed" : "")}>
          {context.adding ? "Adding to cart..." : "Add to Cart"}
        </button>
      </div>
    </>
  )
}


export default Downloads