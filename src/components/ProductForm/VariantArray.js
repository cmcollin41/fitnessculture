import React from 'react'

const VariantArray = ({option, product}) => {
  return (
    <>
      <label htmlFor={option.name} class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">{option.name}</label>

      <div class="flex">
        {product.variants.map(v => {
         
          return (
            <img 
              src={v}
              id={option.name} 
              name={option.name}
              onClick={option.onChange}
             />
          )
        })}
      </div>
      <br/>
    </>
  )
}


export default VariantArray