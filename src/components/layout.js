import React from "react"
import Header from './Header'
import Footer from './Footer'

import '../css/fonts.css'
import '../css/global.css'

export default ({ children }) => (
    <div>
        <Header />
        <div>
            { children }
        </div>
       <Footer />
    </div>
  ) 