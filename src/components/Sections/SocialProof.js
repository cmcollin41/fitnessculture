import React from "react"
import logo1 from '../../assets/logo-1.svg'
import logo2 from '../../assets/logo-2.svg'
import logo3 from '../../assets/logo-3.svg'
import logo4 from '../../assets/logo-4.svg'
import logo5 from '../../assets/menshealth.svg'

const SocialProof = () => (
  <div className="w-full bg-gray-100 pt-4 pb-2">
    <div className="container mx-auto">
      <p className="text-black uppercase text-xs text-center">Programs Engineered by Experts Featured in:</p>
      <div className="flex flex-row justify-between items-center h-full overflow-scroll lg:overflow-hidden">
        <img src={ logo1 } alt="Mens Fitness" width="100px" className="px-2" />
        <img src={ logo2 } alt="Train" width="100px" className="px-2" />
        <img src={ logo4 } alt="BodyBuilding.com" width="100px" className="px-2" />
        <img src={ logo3 } alt="Muscle and Fitness" width="100px" className="px-2" />
        <img src={ logo5 } alt="Mens Health" width="100px" className="px-2" />
      </div>
    </div>
  </div>
)




export default SocialProof