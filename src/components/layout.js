import React from "react"
import { Link } from "gatsby"
import logo from '../../static/fc-logo-horizontal-white.svg'
import {Helmet} from "react-helmet";

import '../css/fonts.css'
import '../css/global.css'

class Application extends React.Component {
    render () {
      return (
          <div className="application">
              <Helmet>
                <meta charSet="utf-8" />
                <title>Fitness Culture</title>
                <link rel="canonical" href="http://fitnessculture.com" />
                <script type="text/javascript" src="https://static.cdn.prismic.io/prismic.min.js"></script>
                <script>
                window.prismic = {{ endpoint: 'https://fitness-culture.cdn.prismic.io/api/v2'}};
                </script>
            </Helmet>
        </div>
      );
    }
  };
  

export default ({ children }) => (
    <div>
        <nav className="flex items-center justify-between flex-wrap bg-black p-6" >
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link to="/"><img src={ logo } alt="Logo" width={"125px"} /></Link>
            </div>
            <div className="block lg:flex lg:items-center lg:w-auto hidden lg:block">
                <div className="text-sm lg:flex-grow">
                <Link to="/programs/swole" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Programs</Link>
                <a href="" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Shop</a>
                <Link to="/pricing" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Pricing</Link>
                <Link to="/about" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">About</Link>
                
                </div>
            </div>
            <div>
                <Link to="/" className="inline-block text-sm px-4 py-2 leading-none border uppercase text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white">Get the App</Link>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
        </nav>
        <div>
            { children }
        </div>
        <footer className="w-full footer mt-auto lg:mt-5">
            <div className="container mx-auto px-10 lg:px-auto py-20">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/4">
                        <Link to="/"><img src={"../fc-logo-horizontal-white.svg"} alt="Logo" width={"175px"} /></Link>
                        <p className="text-white mt-5">314 N 3050 E Suite B1 <br />St George, Utah 84790</p>
                    </div>
                    <div className="w-full lg:w-1/4">
                        <h6 className="text-white">Programs</h6>
                        <ul className="mt-5">
                            <li>
                                <Link to="/program/swole" className="text-white">Swole</Link>
                            </li>
                            <li>
                                <Link to="/program/power" className="text-white">Power</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/4">
                        <h6 className="text-white">Products</h6>
                    </div>
                    <div className="w-full lg:w-1/4">
                        <h6 className="text-white">Company</h6>
                    </div>
                </div>
            </div>

        </footer>
    </div>
  ) 