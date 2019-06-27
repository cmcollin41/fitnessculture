import React from "react"
import { Link } from "gatsby"
import Toggle from "../components/Toggle"
import logo from '../../static/fc-logo-horizontal-black.png'

export default () => (
  <React.Fragment>
    <nav className="bg-white py-4 border-nav-b" >
      <div className="flex items-center justify-between flex-wrap  mx-5 lg:mx-10">
        <div className="flex items-center flex-shrink-0 text-white">
            <Link to="/"><img src={ logo } alt="Logo" width={"150px"} /></Link>
        </div>
       
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
              <Link to="/programs/swole" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">Programs</Link>
              <a href="https://shopify.com" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">Shop</a>
              <Link to="/pricing" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">Pricing</Link>
              <Link to="/about" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">About</Link>
          </div>
        </div>
        <div className="hidden lg:block">
            <Link to="/" className="inline-block text-sm px-4 py-2 leading-none border uppercase text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white font-bold">Get the App</Link>
        </div>
        <Toggle />
      </div>
    </nav>
    <div className="py-4 bg-gray-100 border-nav-b">
      <div className="flex items-center justify-center mx-5 lg:mx-10">
        <p className="uppercase font-light">This is an announcement</p>
      </div>
    </div>
  </React.Fragment>
)