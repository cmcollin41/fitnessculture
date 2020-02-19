// React is installed in the studio and should be treated as a peer dependency
import React from 'react'
import fcLogo from "./fc-logo-horizontal-white.svg"
// We recommend using SVGs as they have both a small footprint and scale well
const Logo = () => (
  <img src={fcLogo} width="115px" />
)

export default Logo
