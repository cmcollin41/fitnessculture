import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'

import SEO from '../components/seo'

import logo1 from '../../static/logo-1.svg'
import logo2 from '../../static/logo-2.svg'
import logo3 from '../../static/logo-3.svg'
import logo4 from '../../static/logo-4.svg'
import logo5 from '../../static/menshealth.png'

const $gender = "Men"

const Programs = ({ data }) => {
  const page = data.sanityProgramPage
  console.log(page)
  const programs = data.allSanityProgram.nodes
  return (
    <Layout>
      <SEO title="Fitness Culture Programs" />
      <BackgroundImage
      className={'flex flex-col justify-center items-center bg-cover bg-center p-5'}
      style={{minHeight: "60vh"}}
      fluid={page.heroImage.asset.fluid}
      >
        <h1 className="uppercase text-center text-white text-4xl lg:text-6xl mt-4" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)"}}>
          {page.title}
        </h1>
        <p className="text-center text-white mt-5 lg:w-1/2 text-xl w:1-2 hidden lg:block" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5"}}>
          {page.subtitle}
        </p>
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
            <div className="flex flex-row flex-wrap px-5 lg:px-auto -mx-3 h-full items-stretch justify-center">
            {
                programs.map((program,i) => {
                return (
                  <div key={i} className="w-full md:w-1/2 lg:w-1/4 mx-3 rounded bg-gray-900 mt-10 flex flex-col items-stretch">
                    <Img
                        className="block h-64 w-full bg-cover bg-center rounded-t text-center overflow-hidden"
                        fluid={program.heroImage.asset.fluid}
                      
                    />
                    <div className="flex flex-col justify-between flex-grow">
                      <div className="p-5">
                        <h4 className="uppercase text-2xl" style={{ color: program.colorTwo.hex }}>{program.title}</h4>
                        <p className="text-white text-sm mt-2">{program.subtitle}</p>
                      </div>
                      <div className="p-5">
                        <Link to={"/programs/" + program.gender + "/" + program.slug.current} className="uppercase font-bold text-xs text-white border border-white rounded-full py-2 px-4">See {program.title}</Link>
                      </div>
                    </div>
                  </div>
                )
                })
            }
            </div>
        </div>
      </div>

    </Layout>

  )
}

export default Programs

export const pageQuery = graphql`
  query ProgramsPage {
    sanityProgramPage {
      id
      title
      subtitle
      heroImage {
        asset {
          fluid(maxWidth: 1425) {
            ...GatsbySanityImageFluid_withWebp
          }
        }
      }
    }
    allSanityProgram {
      nodes {
        title
        subtitle
        gender
        slug {
          current
        }
        heroImage {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid_withWebp
            }
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
`
