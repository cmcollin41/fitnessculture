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
          <nav className="flex items-center justify-between flex-wrap px-4 border-nav-b relative" style={{zIndex: 10}}>
            <div className="hidden lg:flex items-center flex-grow text-black py-4" style={{minWidth: "300px"}}>
              <Link to="/"><img src={ logo } alt="Logo" width={"200px"} /></Link>
            </div>
            <div className="w-full block hidden flex-grow lg:flex lg:justify-center lg:items-center lg:ml-auto lg:w-auto">
              <div className="text-sm lg:flex-grow">
                  <div className="block mt-4 lg:inline-block lg:mt-0 px-4 py-6 hover:border-black border-b-2 border-transparent showprograms">
                    <Link to="#" className="uppercase text-black hover:text-blue-500 font-bold">Programs</Link>
                    <div className="flex justify-center items-center py-6 bg-white programnav absolute left-0 right-0 text-center" style={{top: "79px", zIndex: "-4"}}>
                        {data.allSanityProgram.nodes.map((i, count) => (
                          <Link to={"/programs/" + i.slug.current} key={count} className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-500 mr-4">{i.title}</Link>
                        ))}
                    </div>
                  </div>
                  <div className="block mt-4 lg:inline-block lg:mt-0 px-4 py-6 hover:border-black border-b-2 border-transparent">
                    <a href="https://shop.fitnessculture.com" target="_blank" className="uppercase text-black hover:text-blue-500 font-bold">Shop</a>
                  </div>
                  <div className="block mt-4 lg:inline-block lg:mt-0 px-4 py-6 hover:border-black border-b-2 border-transparent">
                    <Link to="/about" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-500 font-bold">About</Link>
                  </div>
              </div>
            </div>
            <div className="block hidden lg:flex justify-end content-center align-center" style={{minWidth: "300px"}}>
              <div>
                <a href="https://app.fitnessculture.com/login" className="inline-block text-sm px-4 py-2 leading-none text-black  hover:text-blue-500 mt-4 lg:mt-0 uppercase">Login</a>
                <Link to="/" className="inline-block text-sm px-4 py-2 leading-none border text-black border-black hover:border-blue-500 hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 uppercase rounded-full">Get Started</Link>
                {/* <Cart/> */}
              </div>
            </div>
          </nav>
            
          <Toggle render={({on, toggle, active}) => (
            <nav className="flex items-center justify-between flex-wrap bg-white px-4 border-nav-b relative">
              <div className="flex lg:hidden items-center flex-grow text-black py-4">
                <Link to="/"><img src={ logo } alt="Logo" width={"150px"} /></Link>
              </div>
              <div className="block lg:hidden">
                <button onClick={toggle} className="flex items-center p-1 text-black">
                  <svg className={"ham hamRotate ham1 " + (active ? "active" : "")} viewBox="0 0 100 100" width="50">
                    <path
                          className="line top"
                          d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                    <path
                          className="line middle"
                          d="m 30,50 h 40" />
                    <path
                          className="line bottom"
                          d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                  </svg>
                </button>
              </div>
              { on && 
                <div className={"w-full pb-10 block animateNav " + (on ? "navActive" : "")}>
                    <Toggle 
                      render={({on, toggle}) => (
                        <div>
                          <div onClick={toggle} className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-500 font-bold mr-4">Programs &#x2304;</div>
                          {on && 
                            <div className="text-sm lg:flex-grow">
                              {data.allSanityProgram.nodes.map((i, count) => (
                                <Link to={"/programs/" + i.slug.current} key={count} className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-500 mr-4">{i.title}</Link>
                              ))}
                            </div>
                          }
                        </div>
                      )}
                    />

                    <a href="https://shopify.com" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-500 font-bold mr-4">Shop</a>
                    <Link to="/about" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-500 font-bold mr-4">About</Link>
                  <div>
                    <a href="#" className="inline-block text-sm px-4 py-2 leading-none border text-black border-black hover:border-blue-500 hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 uppercase">Get Started</a>
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
        allSanityProgram {
          nodes {
            id
            title
            subtitle
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
    `}
    

    render={data => <Header data={data} {...props} />}

  />

);