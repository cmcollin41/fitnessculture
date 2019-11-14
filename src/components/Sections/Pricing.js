import React from "react"

// Images
import circles from '../../assets/circles.svg'
import square from '../../assets/square-circles.svg'

const Pricing = ({section}) => {
  return (
    <div className="py-20 relative" id="pricing">
      <img src={square} alt="square texture" width="100px" height="100%" className="absolute" style={{top: "-25px", zIndex: "-1"}} />
      <div className="flex flex-col lg:flex-row justify-center items-center px-5">
        {section.pricing.map((price, i) => (
          <div key={i} className="order-2 lg:order-1 w-full md:w-1/2 lg:w-1/4 mt-20 lg:mt:auto">
            <div className="rounded-sm overflow-hidden shadow-lg bg-white text-black flex flex-col justify-between">
              {/* <div className="h-2 w-full" style={{backgroundImage: 'linear-gradient(to right, ' + program.colorOne.hex + ',' + program.colorTwo.hex + ')'}}>
              </div> */}
              <div className="p-4 text-center mx-auto">
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 uppercase">{price.title}</span>
                <h6 className="text-black text-6xl mt-5 relative"><span className="absolute text-xl" style={{left: "-10px", top: "10px"}}>$</span>{price.number}</h6>
                <span className="text-black text-sm mt-5 uppercase">per month</span>
              </div>
              <div>
                <ul className="pricing">
                  {price.benefits.map((benefit, i) => (
                    <li>{benefit.description}</li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-10">
                <a href={section.link || ""} className="uppercase font-bold text-white rounded-sm px-4 py-2">Start Program</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src={ circles } alt="circles texture" width="250px" height="100%" className="block absolute right-0" style={{ bottom: "-150px", zIndex: "-10"}} />
    </div>
  )
}

export default Pricing;