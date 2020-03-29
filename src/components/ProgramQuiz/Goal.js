import React from "react"



export const Goal = ({step, order, values, handleChange}) => {



  if (step === order) {
    switch(values.gymtype) {
      case "home_body":
        return(
          <div className="flex flex-row flex-wrap justify-center items-center">
            <div className="w-full flex justify-center">
              <h2 className="mb-6 text-xl">What's your main fitness goal?</h2>
            </div>
            <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
              <input
                className="checkbox hidden"
                id="lose_weight"
                name="goal"
                type="radio"
                value="lose_weight"
                onChange={handleChange}
              />
              <label htmlFor="lose_weight" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Lose Weight</label>
            </div>

            <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
              <input
                className="checkbox hidden"
                id="maintain_mass"
                name="goal"
                type="radio"
                value="maintain_mass"
                onChange={handleChange}
              />
              <label htmlFor="maintain_mass" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Maintain Mass</label>
            </div>
    
          </div>
        )
      case "home_equip":
        return(
          <div className="flex flex-row flex-wrap justify-center items-center">
            <div className="w-full flex justify-center">
              <h2 className="mb-6 text-xl">What's your main fitness goal?</h2>
            </div>
            <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
              <input
                className="checkbox hidden"
                id="lose_weight"
                name="goal"
                type="radio"
                value="lose_weight"
                onChange={handleChange}
              />
              <label htmlFor="lose_weight" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Lose Weight</label>
            </div>

            <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
              <input
                className="checkbox hidden"
                id="maintain_mass"
                name="goal"
                type="radio"
                value="maintain_mass"
                onChange={handleChange}
              />
              <label htmlFor="maintain_mass" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Maintain Mass</label>
            </div>

            <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
              <input
                className="checkbox hidden"
                id="build_muscle"
                name="goal"
                type="radio"
                value="build_muscle"
                onChange={handleChange}
              />
              <label htmlFor="build_muscle" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Build Muscle</label>
            </div>
    
            <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
              <input
                className="checkbox hidden"
                id="get_lean"
                name="goal"
                type="radio"
                value="get_lean"
                onChange={handleChange}
              />
              <label htmlFor="get_lean" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Get Lean</label>
            </div>

            <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
              <input
                className="checkbox hidden"
                id="athleticism"
                name="goal"
                type="radio"
                value="athleticism"
                onChange={handleChange}
              />
              <label htmlFor="athleticism" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Improve Athleticism</label>
            </div>
          </div>

        )
      case "gym":
        return(
          <div className="flex flex-row flex-wrap justify-center items-center">
            <div className="w-full flex justify-center">
              <h2 className="mb-6 text-xl">What's your main fitness goal?</h2>
            </div>
            <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
              <input
                className="checkbox hidden"
                id="lose_weight"
                name="goal"
                type="radio"
                value="lose_weight"
                onChange={handleChange}
              />
              <label htmlFor="lose_weight" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Lose Weight</label>
            </div>

            <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
              <input
                className="checkbox hidden"
                id="maintain_mass"
                name="goal"
                type="radio"
                value="maintain_mass"
                onChange={handleChange}
              />
              <label htmlFor="maintain_mass" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Maintain Mass</label>
            </div>

            <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
              <input
                className="checkbox hidden"
                id="build_muscle"
                name="goal"
                type="radio"
                value="build_muscle"
                onChange={handleChange}
              />
              <label htmlFor="build_muscle" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Build Muscle</label>
            </div>
    
            <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
              <input
                className="checkbox hidden"
                id="get_lean"
                name="goal"
                type="radio"
                value="get_lean"
                onChange={handleChange}
              />
              <label htmlFor="get_lean" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Get Lean</label>
            </div>

            <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
              <input
                className="checkbox hidden"
                id="athleticism"
                name="goal"
                type="radio"
                value="athleticism"
                onChange={handleChange}
              />
              <label htmlFor="athleticism" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Improve Athleticism</label>
            </div>
            <div className="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
              <input
                className="checkbox hidden"
                id="bikini_body"
                name="goal"
                type="radio"
                value="bikini_body"
                onChange={handleChange}
              />
              <label htmlFor="bikini_body" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-white p-4 bg-gray-200 rounded-full text-center">Bikini Body</label>
            </div>
          </div>

        )

      default:
        // code block
    }
  } else {
    return null
  }


}
