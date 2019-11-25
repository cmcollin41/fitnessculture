import React from "react"
import Img from "gatsby-image"

const Steps = ({section}) => {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container px-5 lg:mx-auto">
        <h3 className="statement text-white text-left lg:text-center pb-5 lg:pb-10">
          {section.title}
        </h3>
      </div>
      <div className="container px-5 lg:px-auto lg:mx-auto">
        <div className="flex flex-row flex-wrap items-stretch justify-center">
          {section.steps.map((step, i) => (
            <div key={i} className="w-full lg:w-1/3 p-5">
              <div className="text-center">
                <div className="rounded-full border border-white p-4 h-20 w-20 text-center mx-auto">
                  <h5 className="uppercase mt-4 text-white">{step.title}</h5>
                </div>
                <p className="text-white">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Steps;