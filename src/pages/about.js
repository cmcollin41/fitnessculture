import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import '../css/global.css'

const About = ({ data }) => {
  const about = data.allSanityAbout.nodes[0]
  return (
    <Layout>
      <SEO title={about.title} description={about.subtitle} image={about.heroImage.asset.url} />
      <BackgroundImage
      className={'flex flex-col justify-center items-center bg-cover bg-top p-5'}
      style={{minHeight: "60vh"}}
      fluid={about.heroImage.asset.fluid}
      >
        <h1 className="uppercase text-center text-white text-4xl lg:text-6xl mt-4" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)"}}>
          {about.title}
        </h1>
        <p className="text-center text-white mt-5 lg:w-1/2 text-xl w:1-2 hidden lg:block" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5"}}>
          {about.subtitle}
        </p>
        <div className="py-10">
          <Link to="/programs" className="btn-lg text-white rounded-full shadow-lg bg-blue-500">
            Get Started
          </Link>
        </div>
      </BackgroundImage>
        <div className="container mx-auto py-20 px-5">
          <div className="w-full lg:w-2/3 mx-auto">
            <p>One of the main reasons we wanted to start Fitness Culture was because we knew how much training smart changed our lives. We were struggling in my own lives and couldn't seem to find our way out. That's when we started training and training smart with discipline and intensity.</p>
            <p className="mt-10">It really got us out of a bad place and back on track not just physically, but also mentally. It was in that moment we knew we wanted to develop a way for people to experience the impact of training and how it can change their mental outlook. </p>
            <p className="mt-10">That's why we started Fitness Culture. You can get real coaching, real training programs designed around your goal, along with nutrition and mobility to help you change your life and get results.</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-full lg:w-2/3 mt-20 lg:flex shadow-md">
              <Img
                className={'h-64 lg:h-auto w-full lg:w-1/2 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center'} 
                fluid={about.trainingImage.asset.fluid}
              />
              <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-5 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <h3 className="uppercase font-bold text-xl mb-2">{about.trainingTitle}</h3>
                  <p className="text-gray-700 text-base">{about.trainingDescription}</p>
                </div>
                <Link to="/programs" className="btn-lg bg-blue-500 shadow-md text-center text-white rounded-sm">
                  Get Started
                </Link>
              </div> 
            </div> 
            <div className="w-full lg:w-2/3 mt-10 lg:flex shadow-md">
              <Img 
                className={'h-64 lg:h-auto lg:w-1/2 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'} 
                fluid={about.mobilityImage.asset.fluid}
              />
              <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-5 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <h3 className="uppercase font-bold text-xl mb-2">{about.mobilityTitle}</h3>
                  <p className="text-gray-700 text-base">{about.mobilityDescription}</p>
                </div>
                <Link to="/programs" className="btn-lg bg-blue-500 shadow-md text-center text-white rounded-sm">
                  Get Started
                </Link>
              </div> 
            </div> 
            <div className="w-full lg:w-2/3 mt-10 lg:flex shadow-md">
              <Img 
                className={"h-64 lg:h-auto lg:w-1/2 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"} f
                fluid={about.nutritionImage.asset.fluid}
              />
              <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-5 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <h3 className="uppercase font-bold text-xl mb-2">{about.nutritionTitle}</h3>
                  <p className="text-gray-700 text-base">{about.nutritionDescription}</p>
                </div>
                <Link to="/programs" className="btn-lg bg-blue-500 shadow-md text-center text-white rounded-sm">
                  Get Started
                </Link>
              </div> 
            </div> 
          </div>
        </div>

    </Layout>
)}

export default About



export const aboutQuery = graphql`
  {
    allSanityAbout {
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
            url
          }
        }
        trainingTitle
        trainingDescription
        trainingImage {
          asset {
            fluid(maxWidth: 1425) {
              ...GatsbySanityImageFluid
            }
          }
        }
        mobilityTitle
        mobilityDescription
        mobilityImage {
          asset {
            fluid(maxWidth: 1425) {
              ...GatsbySanityImageFluid
            }
          }
        }
        nutritionTitle
        nutritionDescription
        nutritionImage {
          asset {
            fluid(maxWidth: 1425) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
