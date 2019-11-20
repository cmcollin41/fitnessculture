import React from "react"

import HomeTabs from "../../components/HomeTabs"

// Images
import circles from '../../assets/circles.svg'

const Tabs =({section}) => {

  return (
    <div className="w-full py-10 lg:py-20 relative">
      <div className="container mx-auto">
        <HomeTabs program={section} />
      </div>
      <img src={ circles } alt="circles texture" width="250px" className="hidden lg:block absolute left-0" style={{ bottom: "-100px", transform: "scaleX(-1)"}} />
    </div>
  )
}

export default Tabs;