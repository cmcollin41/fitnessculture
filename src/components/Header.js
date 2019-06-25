import React from "react"
import { Link } from "gatsby"
import logo from '../../static/fc-logo-horizontal-black.png'

export default () => (
    <nav className="flex items-center justify-between flex-wrap bg-white mx-5 lg:mx-10 py-4" >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to="/"><img src={ logo } alt="Logo" width={"150px"} /></Link>
        </div>
        <div className="block lg:flex lg:items-center lg:w-auto hidden lg:block">
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
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
    </nav>
)