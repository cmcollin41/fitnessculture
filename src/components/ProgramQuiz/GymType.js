import React from "react"

export const GymType = ({step, order, handleChange}) => {

  if (step === order) {
    return (
      <div className="flex flex-row flex-wrap justify-center items-center">
          <div className="w-full flex justify-center">
            <h2 className="mb-6 text-xl">Where do you workout?</h2>
          </div>
          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="home_body"
              name="gymtype"
              type="radio"
              value="home_body"
              onChange={handleChange}
            />
            <label htmlFor="home_body" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Home, Bodyweight</label>
          </div>
 
          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="home_equip"
              name="gymtype"
              type="radio"
              value="home_equip"
              onChange={handleChange}
            />
            <label htmlFor="home_equip" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Home, Equipment</label>
          </div>

          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="gym"
              name="gymtype"
              type="radio"
              value="gym"
              onChange={handleChange}
            />
            <label htmlFor="gym" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Gym</label>
          </div>

      </div>
    )
  } else {
    return null
  }


}