import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import BackgroundImage from 'gatsby-background-image'
import Filter from "../components/Filter"


import SEO from '../components/seo'

import logo1 from '../assets/logo-1.svg'
import logo2 from '../assets/logo-2.svg'
import logo3 from '../assets/logo-3.svg'
import logo4 from '../assets/logo-4.svg'
import logo5 from '../assets/menshealth.png'


const Programs = ({ data }) => {

  const page = data.sanityProgramPage


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
            <img src={ logo1 }  alt="Social Proof 1" width="100px" className="px-2" />
            <img src={ logo2 }  alt="Social Proof 2" width="100px" className="px-2" />
            <img src={ logo4 }  alt="Social Proof 3" width="100px" className="px-2" />
            <img src={ logo3 }  alt="Social Proof 4" width="100px" className="px-2" />
            <img src={ logo5 }  alt="Social Proof 5" width="100px" className="px-2" />
          </div>
        </div>
      </div>


      <div className="pt-10 pb-20">
        <div className="container mx-auto">
           <Filter dataset={page.programs} />
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
      programs {
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
