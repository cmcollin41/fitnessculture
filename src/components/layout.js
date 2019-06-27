import React from "react"
import Navbar from './Navbar'
import Footer from './Footer'

import '../css/fonts.css'
import '../css/global.css'

export default ({ children }) => (
    <div>
        <Navbar />
        <div>
            { children }
        </div>
       <Footer />
    </div>
  ) 