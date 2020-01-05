import React from "react"



const UserInfo = ({step, handleChange, values}) => {

  if (step === 2) {
    return (
      <div className="flex flex-row flex-wrap justify-center items-center">
        <div className="w-full flex justify-center">
          <h2 className="mb-6 text-xl">Help us help you</h2>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="height" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Height
            </label>
            <div className="relative">
              <select id="height" name="height" value={values.height} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 mb-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option value=""></option>
                {[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90].map((s, index) => {
                  return <option key={index} value={s}>{parseInt(s/12)}'{parseInt(s%12)}"</option>
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label htmlFor="weight" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Weight</label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="weight"
            name="weight"
            type="text"
            placeholder="Weight"
            value={values.weight}
            onChange={handleChange}
          />
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label htmlFor="age" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Age</label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="age"
            name="age"
            type="text"
            placeholder="Age"
            value={values.age}
            onChange={handleChange}
          />
        </div>

      </div>
    )
  } else {
    return null
  }


}

export default UserInfo;