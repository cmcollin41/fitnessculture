// import React from 'react'


// const formatPrice = (amount, currency) => {
//   let price = (amount / 100).toFixed(2)
//   let numberFormat = new Intl.NumberFormat(['en-US'], {
//     style: 'currency',
//     currency: currency,
//     currencyDisplay: 'symbol',
//   })
//   return numberFormat.format(price)
// }

// const SkuCard = class extends React.Component {
//   async redirectToCheckout(event, sku, quantity = 1) {
//     event.preventDefault()
//     const { error } = await this.props.stripe.redirectToCheckout({
//       items: [
//         { sku, quantity }
//       ],
//       successUrl: `${window.location.origin}/page-2/`,
//       cancelUrl: `${window.location.origin}/advanced`,
//     })

//     if (error) {
//       console.warn('Error:', error)
//     }
//   }

//   addToCart(event, sku) {
//     event.preventDefault()  
//     let products = [];
//     let count = 0;
//     if(localStorage.getItem('products')){
//         products = JSON.parse(localStorage.getItem('products'));
//     }
//     products.push({'productId' : sku , quantity : 1});
//     localStorage.setItem('products', JSON.stringify(products));

//     // Set Cart Count
//     let newProducts = JSON.parse(localStorage.getItem('products'));
//     count = newProducts.length
//     localStorage.setItem('count', count);
//     console.log(count)
    
//   }

//   render() {
//     const sku = this.props.sku
//     return (
//       <div className="w-full lg:w-1/4 rounded overflow-hidden shadow-lg">
//         <img className="w-full" src={sku.localFiles.id} />
//         <div className="px-6 py-4">
//           <h4>{sku.attributes.name}</h4>
//           <p>Price: {formatPrice(sku.price, sku.currency)}</p>
//           <button onClick={event => this.addToCart(event, sku.id)} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">Add to Cart</button>
//         </div>
//       </div>
//     )
//   }
// }

// export default SkuCard