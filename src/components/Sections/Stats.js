import React from "react"

const Stats = ({section}) => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container px-5 lg:mx-auto">
        <h3 className="statement text-left lg:text-center text-3xl pb-5 lg:pb-10">
          By the Numbers
        </h3>
      </div>
      <div className="container px-5 lg:px-auto lg:mx-auto">
        <div className="flex flex-row flex-wrap items-stretch justify-center">
          {section.stats.map((stat, i) => (
            <div key={i} className="w-full lg:w-1/3 px-5">
              <div className="p-5 mt-10 rounded-sm h-full w-full text-center">
                <h5 className="uppercase mb-5 text-6xl statement">{stat.number}</h5>
                <p>{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats;