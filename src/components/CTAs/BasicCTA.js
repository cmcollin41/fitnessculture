import React from "react"
import {Link} from "gatsby"

const BasicCTA = ({cta}) => {
  return (
    <Link to={cta.link} className={"button button-lg button-primary"}>
        {cta.action}
    </Link>
  )
}

export default BasicCTA;