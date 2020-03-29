import React from "react"



export const UserName = ({step, order, handleChange, values}) => {

  if (step === order) {
    return (
      <div className="flex flex-row flex-wrap justify-center items-center">
        <div className="w-full flex justify-center">
          <h2 className="mb-6 text-xl">What's your name?</h2>
        </div>
        <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
          <label htmlFor="first_name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">First Name</label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="first_name"
            name="first_name"
            type="text"
            placeholder="First Name"
            value={values.first_name}
            onChange={handleChange}
          />
        </div>
        {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label htmlFor="last_name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Last Name</label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="last_name"
            name="last_name"
            type="text"
            placeholder="Last Name"
            value={values.last_name}
            onChange={handleChange}
          />
        </div> */}

      </div>
    )
  } else {
    return null
  }


}