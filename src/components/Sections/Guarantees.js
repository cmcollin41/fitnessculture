import React from "react"
import Img from "gatsby-image"


const Guarantees = ({program}) => {

  return(
    <div className="py-20 bg-gray-900">
      <div className="container px-5 lg:mx-auto">
        <h3 className="statement text-white text-left lg:text-center text-3xl pb-5 lg:pb-10">
          Joining is <span className="px-2" style={{backgroundImage: 'linear-gradient(to right, ' + program.colorOne.hex + ',' + program.colorTwo.hex + ')'}}>Stress</span> Free
        </h3>
      </div>
      <div className="container px-5 lg:px-auto lg:mx-auto">
        <div className="flex flex-row flex-wrap items-stretch justify-center">
          {program.guarantees.map((guarantee, i) => (
            <div key={i} className="w-full lg:w-1/3 p-5">
              <div className="bg-gray-600 p-5 mt-10 rounded-sm h-full w-full text-center">
                <Img width="50px" alt={guarantee.title} fixed={guarantee.icon.asset.fixed} />
                <h5 className="uppercase mb-5">{guarantee.title}</h5>
                <p className="text-white">{guarantee.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Guarantees;