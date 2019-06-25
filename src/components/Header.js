import React from "react"
import { Link } from "gatsby"
import Toggle from "../components/Toggle"
import logo from '../../static/fc-logo-horizontal-black.png'

export default () => (
    <nav className="flex items-center justify-between flex-wrap bg-white mx-5 lg:mx-10 py-4" >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to="/"><img src={ logo } alt="Logo" width={"150px"} /></Link>
        </div>
        <Toggle>
            <div className="block lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/programs/swole" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">Programs</Link>
                    <a href="https://shopify.com" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">Shop</a>
                    <Link to="/pricing" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">Pricing</Link>
                    <Link to="/about" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">About</Link>
                </div>
            </div>
            <div>
                <Link to="/" className="inline-block text-sm px-4 py-2 leading-none border uppercase text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white font-bold">Get the App</Link>
            </div>
        </Toggle>
    </nav>
)