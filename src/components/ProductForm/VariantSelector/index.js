import React from 'react'

const VariantSelector = props => {
  const { option } = props
  return (
    <>
      <label htmlFor={option.name}>{option.name} </label>
      <select
        name={option.name}
        key={option.id}
        onChange={props.onChange}
      >
        {option.values.map(value => {
          return (
            <option
              value={value}
              key={`${option.name}-${value}`}
            >{`${value}`}</option>
          )
        })}
      </select>
      <br/>
    </>
  )
}


export default VariantSelector