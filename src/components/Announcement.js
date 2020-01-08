import React from "react"
import { Link } from "gatsby"

export default () => (
  <React.Fragment>
    <div className="bg-white border-nav-b overflow-hidden" style={{zIndex: "-50"}}>
      <div className="py-4 lg:py-6 flex flex-nowrap items-center justify-center lg:mx-10 relative marquee-parent">
        <span className="uppercase font-light text-xs marquee">New 8-Week Challenge: 20 winners. 30K in prizes. <a href="https://challenge.fitnessculture.com/20-for-20" target="_blank" rel="noopener noreferrer">Take the challenge.</a></span>
      </div>
    </div>
  </React.Fragment>
)