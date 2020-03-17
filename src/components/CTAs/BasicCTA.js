import React from "react"
import {Link} from "gatsby"

const BasicCTA = ({cta}) => {
  return (
    <a href={cta.link} className={"button button-lg button-primary"}>
        {cta.action}
    </a>
  )
}

export default BasicCTA;