import React from "react"



export const Gender = ({step, order, handleChange}) => {



  if (step === order) {
    return (
      <div className="flex flex-row flex-wrap justify-center items-center">
          <div className="w-full flex justify-center">
            <h2 className="mb-6 text-xl">What's your gender?</h2>
          </div>
          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="male"
              name="gender"
              type="radio"
              value="male"
              onChange={handleChange}
            />
            <label htmlFor="male" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Male</label>
          </div>
 
          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="female"
              name="gender"
              type="radio"
              value="female"
              onChange={handleChange}
            />
            <label htmlFor="female" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Female</label>
          </div>
      </div>
    )
  } else {
    return null
  }


}
