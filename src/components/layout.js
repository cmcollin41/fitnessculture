import React from "react"
import Header from './Header'
import Announcement from './Announcement'
import Footer from './Footer'

import '../css/fonts.css'
import '../css/global.css'

export default ({ children }) => (
    <div id="layout">
        <Header />
        <Announcement />
        <div>
            { children }
        </div>
       <Footer />
    </div>
  ) 