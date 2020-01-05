import React from "react"



const LiftStyle = ({step, handleChange}) => {



  if (step === 5) {
    return (
      <div className="flex flex-row flex-wrap justify-center items-center">
          <div className="w-full flex justify-center">
            <h2 className="mb-6 text-xl">What's Your Preferred Style?</h2>
          </div>
          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="lose_weight"
              name="style"
              type="radio"
              value="Functional"
              onChange={handleChange}
            />
            <label htmlFor="lose_weight" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Functional</label>
          </div>
 
          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="gain_weight"
              name="style"
              type="radio"
              value="HIIT"
              onChange={handleChange}
            />
            <label htmlFor="gain_weight" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">HIIT Training</label>
          </div>

          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="build_muscle"
              name="style"
              type="radio"
              value="Power Lifting"
              onChange={handleChange}
            />
            <label htmlFor="build_muscle" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Power Lifting</label>
          </div>
   
          <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="checkbox hidden"
              id="flexibility"
              name="style"
              type="radio"
              value="Body Building"
              onChange={handleChange}
            />
            <label htmlFor="flexibility" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Body Building</label>
          </div>
   
   

      </div>
    )
  } else {
    return null
  }


}

export default LiftStyle