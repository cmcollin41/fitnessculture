import React from "react"

export const Experience = ({step, order, values, handleChange}) => {



  if (step === order) {
    return (
      <div className="flex flex-row flex-wrap justify-center items-center">
          <div className="w-full flex justify-center">
            <h2 className="mb-6 text-xl">How much training experience do you have?</h2>
          </div>
          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="beginner"
              name="experience"
              type="radio"
              value="Beginner"
              onChange={handleChange}
            />
            <label htmlFor="beginner" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">0-1 years</label>
          </div>
 
          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="intermediate"
              name="experience"
              type="radio"
              value="Intermediate"
              onChange={handleChange}
            />
            <label htmlFor="intermediate" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">2-4 years</label>
          </div>

          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="advanced"
              name="experience"
              type="radio"
              value="Advanced"
              onChange={handleChange}
            />
            <label htmlFor="advanced" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">5 or more</label>
          </div>

      </div>
    )
  } else {
    return null
  }


}