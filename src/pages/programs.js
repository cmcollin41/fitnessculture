import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import BackgroundImage from 'gatsby-background-image'

import SEO from '../components/seo'

import logo1 from '../../static/logo-1.svg'
import logo2 from '../../static/logo-2.svg'
import logo3 from '../../static/logo-3.svg'
import logo4 from '../../static/logo-4.svg'
import logo5 from '../../static/menshealth.png'


const Programs = ({ data }) => {
  const home = data.allSanityHome.nodes[0]
  return (
    <Layout>
      <SEO title="Fitness Culture Programs" />
      <BackgroundImage
      className={'flex flex-col justify-center items-center bg-cover bg-top p-5'}
      style={{minHeight: "60vh"}}
      fluid={home.heroImage.asset.fluid}
      >
        <h1 className="uppercase text-center text-white text-4xl lg:text-6xl mt-4" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)"}}>
          Fitness Culture Programs
        </h1>
        <p className="text-center text-white mt-5 lg:w-1/2 text-xl w:1-2 hidden lg:block" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5"}}>
          {home.subtitle}
        </p>
        <div className="py-10">
          <Link to="/" className="btn-lg text-white rounded-full shadow-lg bg-blue-500">
            Get Started
          </Link>
        </div>
      </BackgroundImage>
      <div className="w-full bg-gray-100 pt-4 pb-2">
        <div className="container mx-auto">
          <p className="text-black uppercase text-xs text-center pt-2">Programs Engineered by Experts Featured in:</p>
          <div className="flex flex-row justify-between items-center h-full overflow-scroll lg:overflow-hidden">
            <img src={ logo1 } width="100px" className="px-2" />
            <img src={ logo2 } width="100px" className="px-2" />
            <img src={ logo4 } width="100px" className="px-2" />
            <img src={ logo3 } width="100px" className="px-2" />
            <img src={ logo5 } width="100px" className="px-2" />
          </div>
        </div>
      </div>


      <div className="pt-10 pb-20">
        <div className="container mx-auto">
            <div className="flex flex-row flex-wrap -mx-3 h-full items-stretch">

            {
                home.programs.map((program,i) => {
                return (
                  <div className="w-full md:w-1/2 lg:w-1/4 px-3 h-full">
                    <div className="rounded bg-gray-900 mt-10 flex flex-col justify-between">
                      <div
                          className="block h-64 w-full bg-cover bg-center rounded-t text-center overflow-hidden"
                          style={{
                          backgroundImage:
                              "url(" +
                              program.heroImage.asset.url +
                              ")",
                          }}
                      ></div>
      
                      <div className="p-5">
                      <h4 className="uppercase text-2xl" style={{ color: program.colorTwo.hex }}>{program.title}</h4>
                      <p className="text-white text-sm mt-2">{program.subtitle}</p>
                      </div>
                      <div className="p-5">
                      <Link to="/" className="uppercase font-bold text-xs text-white border border-white rounded-full py-2 px-4">Learn More</Link>
                      </div>
                    </div>
                  </div>
                )
                })
            }
            </div>
        </div>
      </div>



    {/* <div className="py-20 bg-gray-900">
      <div className="container px-5 lg:mx-auto">
        <h3 className="uppercase text-white text-3xl pb-5 lg:pb-10">
          Join the <span className="px-2 bg-blue-500">#FitCult</span> Family
        </h3>
      </div>
      <div className="flex flex-row overflow-scroll lg:overflow-hidden">
        {home.testimonials.map((i, count) => (
          <div key={count} className="flex flex-col justify-between rounded p-5 w-64 mx-3 bg-gray-600" style={{ minWidth: "275px"}}>
            <p className="text-white text-xs italic">"{i.quote}"</p>
            <div className="flex flex-row items-center mt-6">
              <img src={ i.memberImage.asset.url} alt="member photo" width="50px" height="50px" className="rounded-full" />
              <div className="pl-2">
                <h6 className="uppercase">{i.member}</h6>
                <p className="text-black text-xs">{i.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container mx-auto mt-10 text-center">
        <Link to="/" className="uppercase font-bold text-xs text-white border border-white rounded-full py-2 px-4">Join the Family</Link>
      </div>
    </div> */}

    </Layout>

  )
}

export default Programs

export const pageQuery = graphql`
  query ProgramsPage{
    allSanityHome {
      nodes {
        id
        title
        subtitle
        slug {
          current
        }
        heroImage {
          asset {
            fluid(maxWidth: 1425) {
              ...GatsbySanityImageFluid
            }
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
        programs {
          title
          subtitle
          heroImage {
            asset {
              url
            }
          }
          colorOne {
            hex
          }
          colorTwo {
            hex
          }
        }
      }
    }

  }
`
