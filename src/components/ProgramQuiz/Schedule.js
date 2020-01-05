import React from "react"



const Schedule = ({step, handleChange}) => {



  if (step === 4) {
    return (
      <div className="flex flex-row flex-wrap justify-center items-center">
          <div className="w-full flex justify-center">
            <h2 className="mb-6 text-xl">Workout days per week?</h2>
          </div>
          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="lose_weight"
              name="days"
              type="radio"
              value="3 Days"
              onChange={handleChange}
            />
            <label htmlFor="lose_weight" className="w-full block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">3 Days</label>
          </div>
 
          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="gain_weight"
              name="days"
              type="radio"
              value="4 Days"
              onChange={handleChange}
            />
            <label htmlFor="gain_weight" className="w-full block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">4 Days</label>
          </div>

          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="build_muscle"
              name="days"
              type="radio"
              value="5 Days"
              onChange={handleChange}
            />
            <label htmlFor="build_muscle" className="w-full block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">5 Days</label>
          </div>
   
          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="flexibility"
              name="days"
              type="radio"
              value="6 Days"
              onChange={handleChange}
            />
            <label htmlFor="flexibility" className="w-full block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">6 Days</label>
          </div>


   
   

      </div>
    )
  } else {
    return null
  }


}

export default Schedule