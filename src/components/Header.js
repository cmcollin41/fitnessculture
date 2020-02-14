import React, { useContext, useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Toggle from './Toggle'
import logo from '../assets/fc-logo-horizontal-black.png'
import cart from  '../assets/shopping-cart.svg'
import Down from "../assets/chevron-down.svg"
import LineItem from './Cart/LineItemPreview.js'

import StoreContext from '../context/StoreContext'


const Header = () => {
  
  
  const context = useContext(StoreContext)
  const { checkout } = context
  const [quantity, setQuantity] = useState(context.cartQuantity)
  

  const countQuantity = (lineItems) => {
    let items = lineItems.map(item => item.quantity);
    const sum = items.reduce((a, b) => a + b, 0)
    setQuantity(sum)
  }

	useEffect(() => {
    countQuantity(checkout ? checkout.lineItems : []);
  }, [checkout]);

  const hideCart = () => {
    context.setCartPreview(false)
  }
  
  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

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
        collections: allShopifyCollection {
          nodes {
            title
            handle
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
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
  const collections = data.collections
  
  return (
    <>
    <header className="z-50 w-full bg-white sticky top-0 relative">
      <nav className="flex items-center justify-between flex-wrap bg-white px-1 lg:px-4 border-nav-b relative">
        <div className="hidden lg:flex items-center flex-grow text-black py-4" style={{minWidth: "300px"}}>
          <Link to="/" aria-label="Desktop  Fitness Culture Logo"><img alt="Desktop Fitness Culture Logo" src={ logo } width={"200px"} /></Link>
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
              <div className="block mt-4 lg:inline-block lg:mt-0 px-4 py-6 hover:border-black border-b-2 border-transparent showprograms">
                <Link to="/collections/mens" aria-label="Programs" className="uppercase text-black hover:text-blue-500 font-bold">Shop</Link>
                <div className="flex justify-center py-10 bg-white programnav absolute left-0 right-0" style={{top: "79px", zIndex: "-10"}}>
                  <div className="flex flex-row justify-center">
                    {collections.nodes.map((collection, count) => (
                      <Link to={"/collections/" + collection.handle} key={count} className="block mt-4 text-black hover:text-blue-500 w-64 flex flex-col items-center lg:mx-2">
                        <div>
                          <Img
                            fluid={collection.image.localFile.childImageSharp.fluid}
                            key={count}
                            alt={collection.title}
                            className="block h-64 w-full bg-cover bg-center text-center overflow-hidden"
                            style={{minWidth: "300px"}}
                          />
                        </div>
                        <div className="text-center mt-4">
                          {collection.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
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
            <a href="https://app.fitnessculture.com/login" className="inline-block text-sm px-4 py-2 leading-none text-black hover:text-blue-500 mt-4 lg:mt-0 uppercase">Login</a>
            <Link to="/programs" aria-label={"Get Started"} className="inline-block button button-sm button-primary mt-4 lg:mt-0">Get Started</Link>
            <Link to='/cart' className="relative inline-block text-xs px-4 py-2">
              <span className={"bg-red-600 text-white rounded-full h-4 w-4 flex items-center justify-center absolute"} style={{left: "8px", top: "2px"}}>
                {quantity}
              </span>
						  <img alt="Desktop Cart" src={cart} width="24px" className="inline-block" />
					  </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="flex items-center justify-between flex-wrap bg-white px-4 border-nav-b relative z-50">
        <div className="block lg:hidden" onClick={toggleNav}>
          <button className={"hamburger hamburger--slider-r" + (navOpen ? " is-active" : "")} aria-label="Open Menu" type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="flex lg:hidden items-center text-black py-4">
          <Link to="/"><img alt="Mobile Fitness Culture Logo" src={ logo } width={"150px"} /></Link>
        </div>
        <Link to='/cart' className="relative lg:hidden inline-block text-sm pl-4 py-2">
          <span className={"bg-red-600 text-white rounded-full h-4 w-4 flex items-center justify-center absolute"} style={{left: "8px", top: "2px"}}>
            {quantity}
          </span>
          <img alt="Mobile Cart" src={cart} width="24px" className="inline-block" />
        </Link>
      </nav>          
      <div className={"w-full p-4 bg-white absolute block lg:hidden z-10 " + (navOpen ? "slide-down" : "slide-up")} style={{top: "63px"}}>
          <Toggle 
            render={({on, toggle}) => (
              <div>
                <div onClick={toggle} className="block mt-4 lg:mt-0 mr-4 flex justify-start items-center text-black hover:text-blue-500 font-bold">
                  <span className="uppercase mr-2">Programs</span>
                  <img alt="See More Programs Down Arrow" src={Down} width="14px" />
                </div>
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
          <Toggle 
            render={({on, toggle}) => (
              <div>
                <div onClick={toggle} className="block mt-4 lg:mt-0 mr-4 flex justify-start items-center text-black hover:text-blue-500 font-bold">
                  <span className="uppercase mr-2">Shop</span>
                  <img alt="See More Products Down Arrow" src={Down} width="14px" />
                </div>
                {on && 
                  <div className="flex flex-col items-center py-10 w-full">
                    {collections.nodes.map((collection, count) => (
                      <Link to={"/collections/" + collection.handle} key={count} className="flex flex-col w-full items-center my-2">

                        <div className="w-full">
                          <Img
                            fluid={collection.image.localFile.childImageSharp.fluid}
                            key={count}
                            alt={collection.title}
                            className="block h-24 w-full bg-cover bg-center text-center overflow-hidden"
                          />
                        </div>
                        <div className="w-full text-center">
                          <span className="block mb-4 mt-2 text-black hover:text-blue-500">{collection.title}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                }
              </div>
            )}
          />
          <Link to="/about" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-500 font-bold mr-4">About</Link>
          <Link to="/contact" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-500 font-bold mr-4">Contact</Link>
        <div>
          <Link to="/programs" className="inline-block text-sm px-4 py-2 leading-none border text-black border-black hover:border-blue-500 hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 uppercase rounded">Get Started</Link>
        </div>
      </div>
      <div  className={"w-full min-h-screen "  + (context.cartPreview ? "cartDisplay" : "cartHidden")}>
        <div onClick={hideCart} className="absolute w-full h-full inset-0">
        </div>
        <div className={"cart min-h-screen w-4/5 lg:w-2/3 xl:w-1/3"}>
          <div className="border-b bg-white p-3">
            <div className="flex flex-row justify-between items-center">
              <span>
                <span onClick={hideCart} className="mr-6 cursor-pointer text-l font-bold">X</span>
                Your Cart
              </span> 
              <span className="text-xs">{quantity} items in cart.</span>
            </div>
          </div>
          <div className="p-3">
            <div className="py-3">
              <label for="shipping" className="text-sm font-light mb-2">{ (checkout.subtotalPrice > 49.99 ? "Congrats, you've got free shipping! 💪" : `$${(50 - checkout.subtotalPrice)} away from free shipping!`) }</label>
              <progress id="shipping" max="100" value={( (checkout.subtotalPrice/50) * 100)} className="w-full"></progress>
            </div>
            <div className="flex flex-row flex-nowrap lg:flex-wrap overflow-x-scroll lg:overflow-x-hidden scroll-x-mandatory w-full">
            {line_items}
            </div>
            <div className="flex flex-row justify-center -mx-3">
              <button onClick={hideCart} className={"text-center w-1/2 mx-3 text-xs lg:text-l"}>Back to Shopping</button>
              <Link to={"/cart"} className={"btn rounded-sm bg-black text-white text-center w-1/2 mx-3 text-xs lg:text-l"}>Go to Checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </header>



    </>
  )
}

export default Header;