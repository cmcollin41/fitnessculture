import React from "react"
import {Link} from "gatsby"
import BackgroundImage from 'gatsby-background-image'

import logo1 from '../../assets/logo-1.svg'
import logo2 from '../../assets/logo-2.svg'
import logo3 from '../../assets/logo-3.svg'
import logo4 from '../../assets/logo-4.svg'

const HeroContained = ({section}) => {

  return (
    <div className="bg-gray-100 curve">
      <div className="container mx-auto md:pt-10 lg:pt-20">
        <div className="flex flex-row flex-wrap items-end w-full">
          <BackgroundImage Tag="section"
            className={`w-full lg:w-2/3 bg-gray-200 relative shadow bg-cover text-center overflow-hidden h-third lg:h-half`}
            fluid={section.backgroundImage.asset.fluid}
            backgroundColor={`#111`}
          >
          </BackgroundImage>
          <div className="w-full lg:w-1/3 px-5 lg:pl-6 mt-10 lg:mt-auto">
            <h1 className="text-2xl max-w-sm">You've put in the Work. Now get the results.</h1>
            <p className="text-lg font-light">Expert-written strength and conditioning training, nutrition, and mobility programs <mark>designed around your goals&mdash;all in one app.</mark></p>
            <div className="mt-10 flex">
              <Link to="/programs" className="font-bold py-4 px-4 bg-black text-white w-full text-center shadow rounded-sm">Get Your Program</Link>
            </div>

            <h2 className="text-base font-bold max-w-sm mt-10">Start in <mark>3 minutes.</mark></h2>
            <p className="text-sm font-light">Select a program based on your goals. Download the app. Start working and see the results you deserve. </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap w-full">
          <div className="w-full lg:w-2/3 flex flex-row justify-center items-center lg:justify-start">
            <img src={ logo1 } alt="Mens Fitness" width="100px" className="ml-5 md:ml-auto pr-4 sm:pr-4 md:pr-6 lg:pr-10 py-10"  />
            <img src={ logo2 } alt="Train" width="100px" className="pr-4 sm:pr-4 md:pr-6 lg:pr-10 py-10" />
            <img src={ logo4 } alt="BodyBuilding.com" width="100px" className="pr-4 sm:pr-4 md:pr-6 lg:pr-10 py-10"  />
            <img src={ logo3 } alt="Muscle and Fitness" width="100px" className="pr-10 py-10 hidden lg:block" />
            <div className="flex-grow">
              <hr className="bg-black w-full" style={{height: "2px"}}/>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HeroContained;


