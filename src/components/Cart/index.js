import React, { useContext } from 'react'

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem.js'
import ReactTooltip from 'react-tooltip'

import visa from '../../assets/visa.svg'
import amex from '../../assets/american-express.svg'
import mastercard from '../../assets/mastercard.svg'
import discover from '../../assets/discover.svg'
import paypal from '../../assets/paypal.svg'
import applepay from '../../assets/applepay.svg'


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
    <div className="container mx-auto px-5 my-20">
      <div className="flex flex-row flex-wrap -mx-5">
        <div className="w-full lg:w-2/3 order-1 lg:order-0 px-5 mt-10 lg:mt-0">
          {line_items}
        </div>
        <div className="w-full lg:w-1/3 order-0 lg:order-1 px-5">
          <div className="bg-gray-100 shadow p-5">
            <h1 className="text-1xl font-bold uppercase">Order Summary</h1>
            <hr/>
            <div className="flex justify-between items-center">
              <p className="uppercase text-xs font-bold flex flex-row">Subtotal <span data-tip data-for="subtotal"> <span data-tip data-for="estimated taxes"><img width="16px" className="ml-2" src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABPElEQVRIid2UP0oDURDGfyhJIUbQ2lK8g94gFrphjSk8hafQBI9gp9hbewStdf2zjR5AiFopxuLNyvKY2XmJXQY+Ft58880/dmDerQ0MgEugAD4EhbwdCGcmy4ESmDh4BnrTCC8CpwnCMUbAQkoCTfxFOuoIMsKYYt7QE88N8TWFuyq+mJ9Z4m30mefi3wFeBV156yv8J4zFDxTyhDASRLjeFcCKEdOvROtL2TM6G0vQuuJbNmJUrQejmhhfNYEjg1M0VerhUPhbwKfBGc+a4Ey4G8BbA09NkDKiTeFeO7y/EdWXfKtljayU77bDu9ESXCUk+CZUuOTwVK0W4SeZ9gbFKGm4sD0nuDLL/wPsOt0x+keCY08cwl6GTida5ScknuvKMtJ28oh9ZlxrEQ7XBXAPvAvugHNgXzhzbL8LTecFDGMDDgAAAABJRU5ErkJggg=="}/></span></span></p>
              <ReactTooltip id="subtotal" className='w-32' aria-haspopup='true' role='tooltip' effect='solid'>
                <span>The subtotal reflects the total price of your order before any applicable discounts. It does not include shipping costs and taxes.</span>
              </ReactTooltip>
              <p>$ {checkout.subtotalPrice}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="uppercase text-xs font-bold flex flex-row">Estimated Taxes <span data-tip data-for="estimated taxes"><img width="16px" className="ml-2" src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABPElEQVRIid2UP0oDURDGfyhJIUbQ2lK8g94gFrphjSk8hafQBI9gp9hbewStdf2zjR5AiFopxuLNyvKY2XmJXQY+Ft58880/dmDerQ0MgEugAD4EhbwdCGcmy4ESmDh4BnrTCC8CpwnCMUbAQkoCTfxFOuoIMsKYYt7QE88N8TWFuyq+mJ9Z4m30mefi3wFeBV156yv8J4zFDxTyhDASRLjeFcCKEdOvROtL2TM6G0vQuuJbNmJUrQejmhhfNYEjg1M0VerhUPhbwKfBGc+a4Ey4G8BbA09NkDKiTeFeO7y/EdWXfKtljayU77bDu9ESXCUk+CZUuOTwVK0W4SeZ9gbFKGm4sD0nuDLL/wPsOt0x+keCY08cwl6GTida5ScknuvKMtJ28oh9ZlxrEQ7XBXAPvAvugHNgXzhzbL8LTecFDGMDDgAAAABJRU5ErkJggg=="}/></span></p>
              <ReactTooltip id="estimated taxes" className='w-32' aria-haspopup='true' role='tooltip' effect='solid'>
                <span>The actual tax will be calculated based on your shipping address using the applicable state and local sales taxes.</span>
              </ReactTooltip>
              <p>--</p>
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
              <img src={paypal} width="35px" />
              <img src={applepay}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart