import React from "react"
import Img from "gatsby-image"


const Guarantees = ({section}) => {

  return(
    <div className="py-20 bg-gray-300">
      <div className="container px-5 lg:mx-auto">
        <h3 className="statement text-black text-left lg:text-center pb-5 lg:pb-10">
         {section.title}
        </h3>
      </div>
      <div className="container px-5 lg:px-auto lg:mx-auto">
        <div className="flex flex-row flex-wrap items-stretch justify-center">
          {section.guarantees.map((guarantee, i) => (
            <div key={i} className="w-full lg:w-1/3 p-5">
              <div className="bg-gray-900 p-10 rounded-sm h-full w-full text-center">
                {/* <Img alt={guarantee.title} fixed={guarantee.icon.asset.fixed} /> */}
                <h5 className="statment text-white uppercase mb-5">{guarantee.title}</h5>
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