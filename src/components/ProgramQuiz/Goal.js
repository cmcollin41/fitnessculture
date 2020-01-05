import React from "react"



const Goal = ({step, handleChange}) => {



  if (step === 3) {
    return (
      <div className="flex flex-row flex-wrap justify-center items-center">
          <div className="w-full flex justify-center">
            <h2 className="mb-6 text-xl">What's your goal?</h2>
          </div>
          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="lose_weight"
              name="goal"
              type="radio"
              value="Lose Weight"
              onChange={handleChange}
            />
            <label htmlFor="lose_weight" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Lose Weight</label>
          </div>
 
          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="gain_weight"
              name="goal"
              type="radio"
              value="Gain Weight"
              onChange={handleChange}
            />
            <label htmlFor="gain_weight" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Gain Weight</label>
          </div>

          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="build_muscle"
              name="goal"
              type="radio"
              value="Build Muscle"
              onChange={handleChange}
            />
            <label htmlFor="build_muscle" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Build Muscle</label>
          </div>
   
          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="flexibility"
              name="goal"
              type="radio"
              value="Increase Flexibility"
              onChange={handleChange}
            />
            <label htmlFor="flexibility" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Increase Flexibility</label>
          </div>

          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="athleticism"
              name="goal"
              type="radio"
              value="Improve Athleticism"
              onChange={handleChange}
            />
            <label htmlFor="athleticism" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Improve Athleticism</label>
          </div>
   
   

      </div>
    )
  } else {
    return null
  }


}

export default Goal