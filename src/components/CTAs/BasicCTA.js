import React from "react"
import {Link} from "gatsby"

const BasicCTA = ({cta}) => {
  return (
    <Link to={cta.link} className={"px-4 py-4 bg-blue-500 shadow-lg text-white uppercase w-full rounded-sm"}>
        {cta.action}
    </Link>
  )
}

export default BasicCTA;