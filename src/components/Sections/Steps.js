import React from "react"

const Steps = ({program}) => {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container px-5 lg:mx-auto">
        <h3 className="statement text-white text-left lg:text-center text-3xl pb-5 lg:pb-10">
          Get Started in 3 Steps
        </h3>
      </div>
      <div className="container px-5 lg:px-auto lg:mx-auto">
        <div className="flex flex-row flex-wrap items-stretch justify-center">
          {program.steps.map((step, i) => (
            <div key={i} className="w-full lg:w-1/3 p-5">
              <div className="text-center">
                {/* <Img width="50px"  alt={step.title} fixed={step.icon.asset.fixed} /> */}
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