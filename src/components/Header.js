import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import logo from '../../static/fc-logo-horizontal-black.png'

export default () => (
  <StaticQuery
    query = {graphql`
      query HeadingQuery {
        programs: allPrismicProgram {
          edges {
            node {
              uid
              data {
                title {
                  text
                }
              }
            }
          }
        }
      }
    `}
    render = {data => (
      <header>
        <nav className="flex items-center justify-between flex-wrap bg-white p-4 border-nav-b">
          <div className="flex items-center flex-grow text-black">
            <Link to="/"><img src={ logo } alt="Logo" width={"150px"} /></Link>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className="w-full block hidden flex-grow lg:flex lg:justify-center lg:items-center lg:ml-auto lg:w-auto">
            <div className="text-sm lg:flex-grow">
                {data.programs.edges.map((i, count) => (
                  <Link to={"/programs/" + i.node.uid} key={count} className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">{i.node.data.title.text}</Link>
                ))}
                <a href="https://shopify.com" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">Shop</a>
                <Link to="/pricing" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">Pricing</Link>
                <Link to="/about" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">About</Link>
            </div>
          </div>
          <div className="block hidden lg:flex">
            <div>
              <a href="#" className="inline-block text-sm px-4 py-2 leading-none border text-black border-black hover:border-teal-500 hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 uppercase">Get Started</a>
            </div>
          </div>
          <div className="w-full block lg:hidden">
              <Link to="/programs/swole" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">Programs</Link>
              <div className="text-sm lg:flex-grow hidden">
                {data.programs.edges.map((i, count) => (
                  <Link tto={"/programs/" + i.node.uid} key={count} className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">{i.node.data.title.text}</Link>
                ))}
              </div>
              <a href="https://shopify.com" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">Shop</a>
              <Link to="/pricing" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">Pricing</Link>
              <Link to="/about" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">About</Link>
            <div>
              <a href="#" className="inline-block text-sm px-4 py-2 leading-none border text-black border-black hover:border-teal-500 hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 uppercase">Get Started</a>
            </div>
          </div>
        </nav>
      </header>
    )}
  />
)
