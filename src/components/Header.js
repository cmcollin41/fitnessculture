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
        <nav className="flex items-center justify-between flex-wrap bg-white px-4 border-nav-b relative">
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
                <div className="block mt-4 lg:inline-block lg:mt-0 px-4 py-6 hover:border-black border-b-2 border-transparent showprograms">
                  <Link to="#" className="uppercase text-black hover:text-teal-500 font-bold">Programs</Link>
                  <div className="flex justify-center items-center py-6 bg-white programnav border-nav-b absolute left-0 right-0 text-center border-nav-b" style={{top: "79px"}}>
                      {data.programs.edges.map((i, count) => (
                        <Link to={"/programs/" + i.node.uid} key={count} className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 mr-4">{i.node.data.title.text}</Link>
                      ))}
                  </div>
                </div>
                <div className="block mt-4 lg:inline-block lg:mt-0 px-4 py-6 hover:border-black border-b-2 border-transparent">
                  <a href="https://shopify.com" className="uppercase text-black hover:text-teal-500 font-bold">Shop</a>
                </div>
                <div className="block mt-4 lg:inline-block lg:mt-0 px-4 py-6 hover:border-black border-b-2 border-transparent">
                  <Link to="/pricing" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold">Pricing</Link>
                </div>
                <div className="block mt-4 lg:inline-block lg:mt-0 px-4 py-6 hover:border-black border-b-2 border-transparent">
                  <Link to="/about" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold">About</Link>
                </div>
            </div>
          </div>
          <div className="block hidden lg:flex">
            <div>
              <a href="#" className="inline-block text-sm px-4 py-2 leading-none border text-black border-black hover:border-teal-500 hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 uppercase">Get Started</a>
            </div>
          </div>
          <div className="w-full block lg:hidden">

              <div className="showprograms">
                <Link to="/programs/swole" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">Programs</Link>
                <div className="text-sm lg:flex-grow programnav">
                  {data.programs.edges.map((i, count) => (
                    <Link tto={"/programs/" + i.node.uid} key={count} className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 mr-4">{i.node.data.title.text}</Link>
                  ))}
                </div>
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
