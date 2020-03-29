import React from "react"



export const LiftStyle = ({step, order, handleChange}) => {



  if (step === order) {
    return (
      <div className="flex flex-row flex-wrap justify-center items-center">
          <div className="w-full flex justify-center">
            <h2 className="mb-6 text-xl">What's Your Preferred Style?</h2>
          </div>
          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="functional"
              name="style"
              type="radio"
              value="functional"
              onChange={handleChange}
            />
            <label htmlFor="functional" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Functional</label>
          </div>
 
          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="hiit"
              name="style"
              type="radio"
              value="hiit"
              onChange={handleChange}
            />
            <label htmlFor="hiit" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">HIIT Training</label>
          </div>

          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="power_lifting"
              name="style"
              type="radio"
              value="power_lifting"
              onChange={handleChange}
            />
            <label htmlFor="power_lifting" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Power Lifting</label>
          </div>
   
          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="body_building"
              name="style"
              type="radio"
              value="body_building"
              onChange={handleChange}
            />
            <label htmlFor="body_building" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Body Building</label>
          </div>

          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="dont_know"
              name="style"
              type="radio"
              value="dont_know"
              onChange={handleChange}
            />
            <label htmlFor="dont_know" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">I Don't Know</label>
          </div>
   
   

      </div>
    )
  } else {
    return null
  }


}
