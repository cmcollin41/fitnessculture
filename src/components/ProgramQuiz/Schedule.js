import React from "react"



export const Schedule = ({step, order, handleChange}) => {



  if (step === order) {
    return (
      <div className="flex flex-row flex-wrap justify-center items-center">
          <div className="w-full flex justify-center">
            <h2 className="mb-6 text-xl">Workout days per week?</h2>
          </div>
          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="3_days"
              name="days"
              type="radio"
              value="3_days"
              onChange={handleChange}
            />
            <label htmlFor="3_days" className="w-full block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">3-4 Days</label>
          </div>
 

          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="5_days"
              name="days"
              type="radio"
              value="5_days"
              onChange={handleChange}
            />
            <label htmlFor="5_days" className="w-full block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">5-6 Days</label>
          </div>


   
   

      </div>
    )
  } else {
    return null
  }


}
