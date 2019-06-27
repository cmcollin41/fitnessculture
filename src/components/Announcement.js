import React from "react"
import { Link } from "gatsby"

export default () => (
  <React.Fragment>
    <div className="py-4 bg-gray-100 border-nav-b">
      <div className="flex items-center justify-center mx-5 lg:mx-10">
        <Link to="/" className="uppercase font-light text-sm">This is an announcement</Link>
      </div>
    </div>
  </React.Fragment>
)