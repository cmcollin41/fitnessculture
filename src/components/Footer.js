import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import logo from '../../static/fc-logo-horizontal-white.svg'

export default () => (
  <StaticQuery
    query = {graphql`
      query FooterPrograms {
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
    render = {data => (

      <footer className="w-full footer mt-auto">
        <div className="container mx-auto px-10 lg:px-auto py-20">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/4">
                <Link to="/"><img src={ logo } alt="Logo" width={"175px"} /></Link>
                <p className="text-white mt-5 font-light">314 N 3050 E Suite B1 <br />St George, Utah 84790</p>
            </div>
            <div className="w-full lg:w-1/4 mt-10 lg:mt-0">
                <h6 className="text-white uppercase">Programs</h6>
                <div className="flex flex-col pb-2 left-0 right-0">
                  {data.allSanityProgram.nodes.map((i, count) => (
                    <Link to={"/programs/" + i.id} key={count} className="uppercase block mt-5 lg:inline-block text-white hover:text-teal-500 mr-4 text-sm">{i.title}</Link>
                  ))}
              </div>
            </div>
            <div className="w-full lg:w-1/4 mt-10 lg:mt-0">
                <h6 className="text-white uppercase">Products</h6>
            </div>
            <div className="w-full lg:w-1/4 mt-10 lg:mt-0">
                <h6 className="text-white uppercase">Company</h6>
            </div>
          </div>
        </div>
      </footer>
    )}
  />
)