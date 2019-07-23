import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Toggle from './Toggle'
import logo from '../../static/fc-logo-horizontal-black.png'

class Header extends React.Component {

  render() {

    const { data } = this.props; 

    return (
     
      <React.Fragment>
        <header>
          <nav className="flex items-center justify-between flex-wrap bg-white px-4 border-nav-b relative">
            <div className="hidden lg:flex items-center flex-grow text-black py-4" style={{minWidth: "300px"}}>
              <Link to="/"><img src={ logo } alt="Logo" width={"150px"} /></Link>
            </div>
            <div className="w-full block hidden flex-grow lg:flex lg:justify-center lg:items-center lg:ml-auto lg:w-auto">
              <div className="text-sm lg:flex-grow">
                  <div className="block mt-4 lg:inline-block lg:mt-0 px-4 py-6 hover:border-black border-b-2 border-transparent showprograms">
                    <Link to="#" className="uppercase text-black hover:text-teal-500 font-bold">Programs</Link>
                    <div className="flex justify-center items-center py-6 bg-white programnav border-nav-b absolute left-0 right-0 text-center border-nav-b z-50" style={{top: "79px"}}>
                        {data.programs.edges.map((i, count) => (
                          <Link to={"/programs/" + i.node.uid} key={count} className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 mr-4">{i.node.data.title.text}</Link>
                        ))}
                    </div>
                  </div>
                  <div className="block mt-4 lg:inline-block lg:mt-0 px-4 py-6 hover:border-black border-b-2 border-transparent">
                    <Link to="/shop" className="uppercase text-black hover:text-teal-500 font-bold">Shop</Link>
                  </div>
                  <div className="block mt-4 lg:inline-block lg:mt-0 px-4 py-6 hover:border-black border-b-2 border-transparent">
                    <Link to="/shop" className="uppercase text-black hover:text-teal-500 font-bold">Blog</Link>
                  </div>
                  <div className="block mt-4 lg:inline-block lg:mt-0 px-4 py-6 hover:border-black border-b-2 border-transparent">
                    <Link to="/about" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold">About</Link>
                  </div>
              </div>
            </div>
            <div className="block hidden lg:flex justify-end content-center align-center" style={{minWidth: "300px"}}>
              <div>
                <a href="https://app.fitnessculture.com/login" className="inline-block text-sm px-4 py-2 leading-none text-black  hover:text-teal-500 mt-4 lg:mt-0 uppercase">Login</a>
                <Link to="/" className="inline-block text-sm px-4 py-2 leading-none border text-black border-black hover:border-teal-500 hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 uppercase rounded-full">Get Started</Link>
                {/* <Cart/> */}
              </div>
            </div>
          </nav>
            
          <Toggle render={({on, toggle}) => (
            <nav className="flex items-center justify-between flex-wrap bg-white px-4 border-nav-b relative">
              <div className="flex lg:hidden items-center flex-grow text-black py-4">
                <Link to="/"><img src={ logo } alt="Logo" width={"150px"} /></Link>
              </div>
              <div className="block lg:hidden py-4">
                <button onClick={toggle} className="flex items-center px-3 py-2 border text-black border-black">
                  <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
              </div>
              { on && 
                <div className={"w-full " + (on ? "block" : "hidden")}>
                    <Toggle 
                      render={({on, toggle}) => (
                        <div>
                          <div onClick={toggle} className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">Programs &#x2304;</div>
                          {on && 
                            <div className="text-sm lg:flex-grow">
                              {data.programs.edges.map((i, count) => (
                                <Link to={"/programs/" + i.node.uid} key={count} className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 mr-4">{i.node.data.title.text}</Link>
                              ))}
                            </div>
                          }
                        </div>
                      )}
                    />

                    <a href="https://shopify.com" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">Shop</a>
                    <Link to="/pricing" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">Pricing</Link>
                    <Link to="/about" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 font-bold mr-4">About</Link>
                  <div>
                    <a href="#" className="inline-block text-sm px-4 py-2 leading-none border text-black border-black hover:border-teal-500 hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 uppercase">Get Started</a>
                  </div>
                </div>
              }
            </nav>
          )}
          />
            
        </header>

        
      </React.Fragment>
    )
  }
}

export default props => (

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
    

    render={data => <Header data={data} {...props} />}

  />

);