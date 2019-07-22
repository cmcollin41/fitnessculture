import React from 'react';


const CartItems = (props) => {
  const items = props.items
  const count = props.count
  const arr = []

  const formatPrice = (amount, currency) => {
    let price = (amount / 100).toFixed(2)
    let numberFormat = new Intl.NumberFormat(['en-US'], {
      style: 'currency',
      currency: currency,
      currencyDisplay: 'symbol',
    })
    return numberFormat.format(price)
  }
  

  Object.keys(items).forEach(function(key){
    arr.push(items[key]);
  });


  return (
    <React.Fragment>
      <div className="flex flex-row border p-5 my-3">
        <p className="mx-auto">
          You have <span className="rounded-full bg-indigo-500 px-2 py-1 text-xs text-white font-bold">{count} items</span> in your cart
        </p>
      </div>
      {arr.map(item => 
        <div className="flex flex-row items-center border my-3">
          <img src={item.image} width="150ox" />
          <div className="flex flex-row content-center justify-between w-full ml-3 mr-4">
            <div className="p-2">
              <h6>{item.name}</h6> 
              <p>{formatPrice(item.price, 'USD')}</p>
              <small>{item.id}</small>  
            </div>
            <div className="p-5 border flex flex-col justify-center">
              {item.quantity}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )


}

export default CartItems;