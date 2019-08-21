import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Toggle from './Toggle'
import logo from '../assets/fc-logo-horizontal-black.png'


const Header = () => {

  const data = useStaticQuery(
    graphql`
      query HeadingQuery {
        men: allSanityProgram(filter: {gender: { eq: "men"}, active: {eq: true}}) {
          nodes {
            id
            title
            subtitle
            gender
            slug {
              current
            }
            colorOne {
              hex
            }
            colorTwo {
              hex
            }
            heroImage {
              asset {
                url
              }
            }
            testimonials {
              quote
              member
              memberImage {
                asset {
                  url
                }
              }
              location
            }
      
          }
        }
        women: allSanityProgram(filter: {gender: { eq: "women"}, active: {eq: true}}) {
          nodes {
            id
            title
            subtitle
            gender
            slug {
              current
            }
            colorOne {
              hex
            }
            colorTwo {
              hex
            }
            heroImage {
              asset {
                url
              }
            }
            testimonials {
              quote
              member
              memberImage {
                asset {
                  url
                }
              }
              location
            }
      
          }
        }
      }
    `
  )

  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const men = data.men
  const women = data.women
  
  return (
    <>
    <header className="z-50 w-full bg-white sticky top-0">
      <nav className="flex items-center justify-between flex-wrap bg-white px-1 lg:px-4 border-nav-b">
        <div className="hidden lg:flex items-center flex-grow text-black py-4" style={{minWidth: "300px"}}>
          <Link to="/" aria-label="Fitness Culture Logo"><img src={ logo } alt="Logo" width={"200px"} /></Link>
        </div>
        <div className="w-full block hidden flex-grow lg:flex lg:justify-center lg:items-center lg:ml-auto lg:w-auto">
          <div className="text-sm lg:flex-grow">
              <div className="block mt-4 lg:inline-block lg:mt-0 px-4 py-6 hover:border-black border-b-2 border-transparent showprograms">
                <Link to="/programs" aria-label="Programs" className="uppercase text-black hover:text-blue-500 font-bold">Programs</Link>
                <div className="flex justify-center py-10 bg-white programnav absolute left-0 right-0" style={{top: "79px", zIndex: "-10"}}>
                  <div className="flex flex-row justify-center">
                    <div className="w-64 flex flex-col items-center">
                      <div className="text-left">
                        <h6>Men</h6>
                        {men.nodes.map((i, count) => (
                          <Link to={"/programs/" + i.gender + "/" + i.slug.current} aria-label={i.title} key={count} className="block mt-4 text-black hover:text-blue-500">{ i.title}</Link>
                        ))}
                      </div>
                    </div>
                    <div className="w-64 flex flex-col items-center">
                      <div className="text-left">
                        <h6>Women</h6>
                        {women.nodes.map((i, count) => (
                          <Link to={"/programs/" + i.gender + "/" + i.slug.current}  aria-label={i.title} key={count} className="block mt-4 text-black hover:text-blue-500">{ i.title}</Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block mt-4 lg:inline-block lg:mt-0 px-4 py-6 hover:border-black border-b-2 border-transparent">
                <a href="https://fitnessculture.merchlabs.com" target="_blank" rel="noopener noreferrer" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-500 font-bold">Shop</a>
              </div>
              <div className="block mt-4 lg:inline-block lg:mt-0 px-4 py-6 hover:border-black border-b-2 border-transparent">
                <Link to="/about" aria-label={"About"} className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-500 font-bold">About</Link>
              </div>
              <div className="block mt-4 lg:inline-block lg:mt-0 px-4 py-6 hover:border-black border-b-2 border-transparent">
                <Link to="/contact" aria-label={"Contact"} className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-500 font-bold">Contact</Link>
              </div>
          </div>
        </div>
        <div className="block hidden lg:flex justify-end content-center align-center" style={{minWidth: "300px"}}>
          <div>
            <a href="https://app.fitnessculture.com/login" className="inline-block text-sm px-4 py-2 leading-none text-black  hover:text-blue-500 mt-4 lg:mt-0 uppercase">Login</a>
            <Link to="/programs" aria-label={"Get Started"} className="inline-block text-sm px-4 py-2 leading-none border text-black border-black hover:border-blue-500 hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 uppercase rounded-full">Get Started</Link>
            {/* <Cart/> */}
          </div>
        </div>
      </nav>
        
      {/* Mobile Nav */}
      <nav className="flex items-center justify-between flex-wrap bg-white px-4 border-nav-b relative z-50">
        <div className="flex lg:hidden items-center flex-grow text-black py-4">
          <Link to="/"><img src={ logo } alt="Logo" width={"150px"} /></Link>
        </div>
        <div className="block lg:hidden" onClick={toggleNav}>
          <button className={"hamburger hamburger--slider-r" + (navOpen ? " is-active" : "")} aria-label="Open Menu" type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </nav>          
    </header>
   
    <div className={"w-full p-4 bg-white absolute z-10 " + (navOpen ? "slide-down" : "slide-up")} style={{top: "63px"}}>
        <Toggle 
          render={({on, toggle}) => (
            <div>
              <div onClick={toggle} className="uppercase block mt-4 lg:mt-0 text-black hover:text-blue-500 font-bold mr-4">Programs &#x2304;</div>
              {on && 
                <>
                <div className="flex flex-row justify-center py-10">
                  <div className="w-64 flex flex-col items-center">
                    <div className="text-left">
                      <h6 className="uppercase">Men</h6>
                      {men.nodes.map((i, count) => (
                        <Link to={"/programs/" + i.gender + "/" + i.slug.current} key={count} className="block mt-4 text-black hover:text-blue-500">{ i.title}</Link>
                      ))}
                    </div>
                  </div>
                  <div className="w-64 flex flex-col items-center">
                    <div className="text-left">
                      <h6 className="uppercase">Women</h6>
                      {women.nodes.map((i, count) => (
                        <Link to={"/programs/" + i.gender + "/" + i.slug.current} key={count} className="block mt-4 text-black hover:text-blue-500">{ i.title}</Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-64 flex flex-col items-center">
                  <Link to="/programs" className="block text-black hover:text-blue-500">See All Programs</Link>
                </div>
                </>
              }
            </div>
          )}
        />

        <a href="https://fitnessculture.merchlabs.com" target="_blank" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-500 font-bold mr-4">Shop</a>
        <Link to="/about" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-500 font-bold mr-4">About</Link>
        <Link to="/contact" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-500 font-bold mr-4">Contact</Link>
      <div>
        <Link to="/programs" className="inline-block text-sm px-4 py-2 leading-none border text-black border-black hover:border-blue-500 hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 uppercase">Get Started</Link>
      </div>
    </div>

    </>
  )
}

export default Header;