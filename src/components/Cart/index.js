import React, { useContext } from 'react'

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem.js'

import visa from '../../assets/visa.svg'
import amex from '../../assets/american-express.svg'
import mastercard from '../../assets/mastercard.svg'
import discover from '../../assets/discover.svg'

const Cart = () => {
  const context = useContext(StoreContext)
  const { checkout } = context
  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }
  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <div className="container mx-auto my-20">
      <div className="flex flex-row -mx-5">
        <div className="w-full lg:w-2/3 px-5">
          {line_items}
        </div>
        <div className="w-full lg:w-1/3 px-5">
          <div className="bg-gray-100 shadow p-5">
            <h1 className="text-1xl font-bold uppercase">Order Summary</h1>
            <hr/>
            <div className="flex justify-between items-center">
              <p className="uppercase text-xs font-bold">Subtotal</p>
              <p>$ {checkout.subtotalPrice}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="uppercase text-xs font-bold">Taxes</p>
              <p>$ {checkout.totalTax}</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="uppercase text-base">Total</h2>
              <p className="text-1xl font-bold">$ {checkout.totalPrice}</p>
            </div>
            <button onClick={handleCheckout} className="mb-4 px-2 py-4 bg-black text-white uppercase w-full rounded">Check out</button>  
            <span className="uppercase text-xs">
              Payment Methods
            </span>
            <div className="flex flex-row items-center">
              <img src={visa} />
              <img src={amex} />
              <img src={mastercard} />
              <img src={discover} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart