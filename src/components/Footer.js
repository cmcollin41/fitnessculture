import React from "react"
import { Link } from "gatsby"
import logo from '../../static/fc-logo-horizontal-white.svg'

export default () => (
    <footer className="w-full footer mt-auto lg:mt-5">
        <div className="container mx-auto px-10 lg:px-auto py-20">
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/4">
                    <Link to="/"><img src={ logo } alt="Logo" width={"175px"} /></Link>
                    <p className="text-white mt-5 font-light">314 N 3050 E Suite B1 <br />St George, Utah 84790</p>
                </div>
                <div className="w-full lg:w-1/4">
                    <h6 className="text-white uppercase">Programs</h6>
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
                    <h6 className="text-white uppercase">Products</h6>
                </div>
                <div className="w-full lg:w-1/4">
                    <h6 className="text-white uppercase">Company</h6>
                </div>
            </div>
        </div>

    </footer>
)