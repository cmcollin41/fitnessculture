import React from "react"
import Header from './Header'
// import Announcement from './Announcement'
import Footer from './Footer'
import SiteMetadata from './seo'


import '../css/fonts.css'
import '../css/global.css'

export default ({ children }) => (
  <React.Fragment>
    <SiteMetadata title="Fitness Culture" />
    <Header />
    {/* <Announcement /> */}
    { children }
    <Footer />
  </React.Fragment>
) 