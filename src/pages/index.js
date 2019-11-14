import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import SEO from "../components/seo"

// Sections
import Hero from "../components/Sections/Hero"
import SocialProof from "../components/Sections/SocialProof"
import Programs from "../components/Sections/Programs"
import HomeTabs from "../components/HomeTabs"

import circles from '../assets/circles.svg'



const Index = ({ data }) => {
  const home = data.sanityHome


  
  return (
    <Layout>
      <SEO title="Home" image={home.heroImage.asset.url} />
      <Hero section={home} />

      {/* <div className="flex flex-col justify-center items-center p-5 relative h-full overflow-hidden" style={{minHeight: "70vh"}}>
        <span className="hidden lg:flex rounded-full bg-black uppercase px-2 py-1 text-xs text-white">Your #1 Fitness App</span>
        <video muted playsInline autoPlay loop poster={home.heroImage.asset.url} className="hero-video bg-black lazy">
          <source src={home.heroVideo.asset.url} />
        </video>
        <h1 className="statement text-center text-white text-4xl lg:text-5xl mt-4 font-bold" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)"}}>
          {home.title}
        </h1>
        <p className="text-center text-white mt-5 lg:w-1/2 xl:w-1/3 text-xl hidden lg:block" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5"}}>
          {home.subtitle}
        </p>
        <div className="py-10">
          <Link to={home.heroLink} className="btn-lg text-white rounded-sm shadow-lg" style={{backgroundColor: home.heroColor.hex}}>
            {home.heroCta}
          </Link>
        </div>
      </div> */}

      <SocialProof />


      <div className="w-full py-10 lg:py-20 relative">
        <div className="container mx-auto">
          <HomeTabs program={home} />
        </div>
        <img src={ circles } alt="circles texture" width="250px" className="hidden lg:block absolute left-0" style={{ bottom: "-100px", transform: "scaleX(-1)"}} />
      </div>


      <Programs section={home} />



    <div className="py-20 bg-gray-900">
      <div className="container px-5 lg:mx-auto">
        <h3 className="statement text-white text-3xl pb-5 lg:pb-10">
          Join the <span className="px-2 bg-blue-500">#FitCult</span> Family
        </h3>
      </div>
      <div className="flex flex-row overflow-scroll lg:overflow-hidden scroll-x-mandatory">
        {home.testimonials.map((i, count) => (
          <div key={count} className="flex flex-col justify-between rounded-sm p-5 w-64 mx-3 bg-gray-600 snap-align-center" style={{ minWidth: "275px"}}>
            <p className="text-white text-xs italic">"{i.quote}"</p>
            <div className="flex flex-row items-center mt-6">
              <Img fixed={i.memberImage.asset.fixed} alt="member photo" width="50px" height="50px" className="rounded-full" />
              <div className="pl-2">
                <h6 className="statement text-sm">{i.member}</h6>
                <span className="text-black text-xs">{i.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container mx-auto mt-10 text-center">
        <Link to="/programs" className="uppercase font-bold text-xs text-white border border-white rounded-sm py-2 px-4">Join the Family</Link>
      </div>
    </div>

    
    <div className="pt-10 pb-20 lg:py-20 mx-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-start items-center mt-10 h-full">
          <Img
            className="w-full lg:w-1/2 shadow-lg" 
            fluid={home.aboutImage.asset.fluid}/>
          <div className="w-full lg:w-1/2 pt-5 lg:p-10 mx-auto">
            <h6 className="statement mt-6 text-left mb-2 text-gray-400">About Us</h6>
            <h2 className="text-lg lg:text-3xl statement">
              {home.aboutTitle}
            </h2>
            <p className="mt-5">{home.aboutDescription}</p>
            <div className="mt-10">
              <Link to="/about" className="btn text-blue-500 border border-blue-500 rounded-sm">
                Our Story
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </Layout>

  )
}

export default Index

export const pageQuery = graphql`
  query IndexPage{
    sanityHome {
        id
        title
        subtitle
        heroCta
        heroLink
        heroColor {
          hex
        }
        heroImage {
          asset {
            fluid(maxWidth: 1625) {
              ...GatsbySanityImageFluid_withWebp
            }
            url
          }
        }
        heroVideo {
          asset {
            url 
          }
        }
        trainingTitle
        trainingDescription
        trainingImage {
          asset {
            fluid(maxWidth: 595) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
        }
        nutritionTitle
        nutritionDescription
        nutritionImage {
          asset {
            fluid(maxWidth: 595) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
        }
        mobilityTitle
        mobilityDescription
        mobilityImage {
          asset {
            fluid(maxWidth: 595) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
        }
        aboutTitle
        aboutDescription
        aboutImage {
          asset {
            fluid(maxWidth: 768) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
        }
        personalTrainerTitle
        personalTrainerDescription
        personalTrainerImage {
          asset {
            fluid(maxWidth: 768) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
        }
        testimonials {
          quote
          member
          memberImage {
            asset {
              fixed(width: 50) {
                ...GatsbySanityImageFixed_withWebp
              }
            }
          }
          location
        }
        programs {
          active
          title
          subtitle
          gender
          slug {
            current
          }
          heroImage {
            asset {
              fluid(maxWidth: 300) {
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
