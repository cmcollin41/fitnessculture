import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

import Tabz from "../components/Tabz"
import SEO from '../components/seo'

import kyle from '../../static/kylewilliford.png'
import steveCollage from '../../static/nike-collage.jpg'
import circles from '../../static/circles.webp'
import logo1 from '../../static/logo-1.svg'
import logo2 from '../../static/logo-2.svg'
import logo3 from '../../static/logo-3.svg'
import logo4 from '../../static/logo-4.svg'
import logo5 from '../../static/menshealth.png'


// const Index = ({ data: { homepage } }, { data: { programs } }) => (
const Index = ({ data }) => (
  <Layout>
    <SEO title="Fitness Culture" />
    <div
      className="flex flex-col justify-center items-center bg-cover bg-center p-5"
      style={{
        backgroundImage: `url(${data.homepage.data.hero_image.url})`,
        minHeight: `60vh`,
      }}
    >
      <span className="flex rounded-full bg-black uppercase px-2 py-1 text-xs text-white">Your #1 Fitness App</span>
      <h1 className="uppercase text-center text-white text-4xl lg:text-6xl mt-4" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)"}}>
        {data.homepage.data.h1.text}
      </h1>
      <p className="text-center text-white mt-5 lg:w-1/2 text-xl w:1-2 hidden lg:block" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5"}}>
        {data.homepage.data.h2.text}
      </p>
      <div className="py-10">
        <Link to="/" className="uppercase font-bold text-xs text-white bg-red-500 border border-red-500 rounded-full py-4 px-6 shadow-lg">
          Get Started
        </Link>
      </div>
    </div>
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



    <div className="w-full py-10 lg:py-20 relative">
      <div className="container mx-auto">
        <Tabz />
      </div>
      <img src={ circles } width="250px" className="hidden lg:block absolute left-0" style={{ bottom: "-100px", transform: "scaleX(-1)"}} />
    </div>


    <div className="py-20 bg-gray-100">
      <div className="container lg:mx-auto mx-5">
        <h3 className="uppercase text-3xl pb-5 lg:pb-10">
          Our Programs
        </h3>
      </div>
      <div className="flex flex-row flex-nowrap overflow-x-scroll">

        {
          data.programs.edges.map((program,i) => {
            return (
              <div className="rounded w-64 mx-3 bg-gray-800 mt-10" style={{minWidth: "300px"}}>
                <div
                  className="block h-64 w-full bg-cover bg-center rounded-t text-center overflow-hidden"
                  style={{
                    backgroundImage:
                      "url(" +
                      program.node.data.hero_image.url +
                      ")",
                  }}
                ></div>
                <div className="p-5 flex flex-col justify-between h-100">
                  <div>
                    <h4 className="uppercase text-3xl" style={{ color: program.node.data.bg_col_gradient_2 }}>{program.node.data.title.text}</h4>
                    <p className="text-white text-sm mt-2">{program.node.data.lead.text}</p>
                  </div>
                  <div className="mt-6">
                    <Link to="/" className="uppercase font-bold text-xs text-white border border-white rounded-full py-2 px-4">Learn More</Link>
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>
    </div>


  <div className="py-20">
    <div className="container mx-auto">
      <img
        src={ steveCollage }
        alt="App for Workouts"
        width="100%"
        className="mx-auto"
      />
      <div className="text-center mt-10">
        <h3 className="uppercase text-3xl">Fitness Changes Everything</h3>
      </div>
      <div className="text-center mt-10">
        <Link to="/" className="py-2 px-4 rounded-full border border-red-500 text-red-500">Watch Video</Link>
      </div>
    </div>
  </div>


  <div className="py-20 bg-gray-800">
    <div className="container mx-5 lg:mx-auto">
      <h3 className="uppercase text-white text-3xl pb-5 lg:pb-10">
        Join the <span className="text-red-500">#FitCult</span> Family
      </h3>
      {/* <Carousel2 testimonials={data.testimonials.edges} /> */}
    </div>
    <div className="flex flex-row overflow-scroll lg:overflow-hidden">
      <div className="rounded p-5 w-64 mx-3" style={{backgroundColor: "#9e9e9e", minWidth: "275px"}}>
        <p className="text-white text-xs italic">"Fitness Culture made me realize that nutrition is the most important thing. I heard Steve Cook say in one of his videos that "you can't out train a bad diet" that is 100% true."</p>
        <div className="flex flex-row items-center mt-6">
          <img src={ kyle } width="50px" height="50px" className="rounded-full" />
          <div className="pl-2">
            <h6 className="uppercase">Kyle Williford</h6>
            <p className="text-black text-xs">Chester, South Carolina</p>
          </div>
        </div>
      </div>
      <div className="rounded p-5 w-64 mx-3" style={{backgroundColor: "#9e9e9e", minWidth: "275px"}}>
        <p className="text-white text-xs italic">"Fitness Culture made me realize that nutrition is the most important thing. I heard Steve Cook say in one of his videos that "you can't out train a bad diet" that is 100% true."</p>
        <div className="flex flex-row items-center mt-6">
          <img src={ kyle } width="50px" height="50px" className="rounded-full" />
          <div className="pl-2">
            <h6 className="uppercase">Kyle Williford</h6>
            <p className="text-black text-xs">Chester, South Carolina</p>
          </div>
        </div>
      </div>
      <div className="rounded p-5 w-64 mx-3" style={{backgroundColor: "#9e9e9e", minWidth: "275px"}}>
        <p className="text-white text-xs italic">"Fitness Culture made me realize that nutrition is the most important thing. I heard Steve Cook say in one of his videos that "you can't out train a bad diet" that is 100% true."</p>
        <div className="flex flex-row items-center mt-6">
          <img src={ kyle } width="50px" height="50px" className="rounded-full" />
          <div className="pl-2">
            <h6 className="uppercase">Kyle Williford</h6>
            <p className="text-black text-xs">Chester, South Carolina</p>
          </div>
        </div>
      </div>
      <div className="rounded p-5 w-64 mx-3" style={{backgroundColor: "#9e9e9e", minWidth: "275px"}}>
        <p className="text-white text-xs italic">"Fitness Culture made me realize that nutrition is the most important thing. I heard Steve Cook say in one of his videos that "you can't out train a bad diet" that is 100% true."</p>
        <div className="flex flex-row items-center mt-6">
          <img src={ kyle } width="50px" height="50px" className="rounded-full" />
          <div className="pl-2">
            <h6 className="uppercase">Kyle Williford</h6>
            <p className="text-black text-xs">Chester, South Carolina</p>
          </div>
        </div>
      </div>
      <div className="rounded p-5 w-64 mx-3" style={{backgroundColor: "#9e9e9e", minWidth: "275px"}}>
        <p className="text-white text-xs italic">"Fitness Culture made me realize that nutrition is the most important thing. I heard Steve Cook say in one of his videos that "you can't out train a bad diet" that is 100% true."</p>
        <div className="flex flex-row items-center mt-6">
          <img src={ kyle } width="50px" height="50px" className="rounded-full" />
          <div className="pl-2">
            <h6 className="uppercase">Kyle Williford</h6>
            <p className="text-black text-xs">Chester, South Carolina</p>
          </div>
        </div>
      </div>
      <div className="rounded p-5 w-64 mx-3" style={{backgroundColor: "#9e9e9e", minWidth: "275px"}}>
        <p className="text-white text-xs italic">"Fitness Culture made me realize that nutrition is the most important thing. I heard Steve Cook say in one of his videos that "you can't out train a bad diet" that is 100% true."</p>
        <div className="flex flex-row items-center mt-6">
          <img src={ kyle } width="50px" height="50px" className="rounded-full" />
          <div className="pl-2">
            <h6 className="uppercase">Kyle Williford</h6>
            <p className="text-black text-xs">Chester, South Carolina</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto mt-10 text-center">
      <Link to="/" className="uppercase font-bold text-xs text-white border border-white rounded-full py-2 px-4">Join the Family</Link>
    </div>
  </div>


      
  <div className="pt-10 pb-20 lg:py-20 mx-5">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-start items-center mt-10 h-full">
        <div 
          className="w-full lg:w-1/2 bg-cover bg-center relative shadow-lg" 
          style={{
          backgroundImage: `url(${data.homepage.data.owners_image.url})`,
          minHeight: `500px`
          }}>
        </div>
        <div className="w-full lg:w-1/2 pt-5 lg:p-10 mx-auto">
          <h6 className="uppercase mt-6 text-left mb-2 text-gray-400">About Us</h6>
          <h2 className="text-3xl uppercase">
            Jake and Steve
          </h2>
          <p className="mt-5">{data.homepage.data.owner_lead.text}</p>
          <div className="mt-10">
            <Link to="/" className="uppercase font-bold text-xs text-red-500 border border-red-500 rounded-full py-4 px-6">
              Watch Video
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  </Layout>
)

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        hero_image {
          url
        }
        h1 {
          text
        }
        h2 {
          text
        }
        phone_img {
          url
        }
        graph {
          url
        }
        owners_image {
          url
        }
        owner_intro {
          text
        }
        owner_lead {
          text
        }
      }
    }
    programs: allPrismicProgram {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            hero_image {
              url
            }
            lead {
              text
            }
            bg_col_gradient_2 
          }
        }
      }
    }
    testimonials: allPrismicTestimonial{
      edges {
        node {
          uid
          data {
            title {
              text
            }
            image {
              url
            }
            lead {
              text
            }
          }
        }
      }
    }
  }
`
