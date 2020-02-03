import React from "react"
import { Link } from "gatsby"

export default () => (
  <React.Fragment>
    <div className="bg-white border-nav-b overflow-hidden" style={{zIndex: "-50"}}>
      <div className="py-4 lg:py-6 flex flex-nowrap items-center justify-center lg:mx-10 relative marquee-parent">
        <span className="uppercase font-light text-xs marquee">RECEIVE FULL WORKOUTS, TECHNIQUE TIPS, AND MORE... <Link to="/downloads/subscribe">CLICK HERE</Link></span>
      </div>
    </div>
  </React.Fragment>
)