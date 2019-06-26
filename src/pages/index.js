import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Carousel from "../components/Carousel"
import Carousel2 from "../components/Carousel2"

import phone from '../../static/workout-phone.png'

// const Index = ({ data: { homepage } }, { data: { programs } }) => (
const Index = ({ data }) => (
  <Layout>
    <div
      className="flex flex-col justify-center items-center bg-cover bg-center p-5 mx-5 lg:mx-10"
      style={{
        backgroundImage: `url(${data.homepage.data.hero_image.url})`,
        minHeight: `60vh`,
      }}
    >
      <span class="flex rounded-full bg-black uppercase px-2 py-1 text-xs text-white">Your #1 Fitness App</span>
      <h1 className="uppercase text-center text-white text-4xl lg:text-6xl mt-4" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)"}}>
        {data.homepage.data.h1.text}
      </h1>
      <p className="text-center text-white mt-5 lg:w-1/2 text-xl w:1-2 hidden lg:block" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5"}}>
        {data.homepage.data.h2.text}
      </p>
      <div className="py-10">
        <Link to="/" className="btn-lg btn-red uppercase">
          Get Started
        </Link>
      </div>
    </div>


    {/* <div className="flex flex-row justify-center items-center pt-10 mx-auto lg:mx-10">
      <div className="text-center">
        <h2 className="my-10 uppercase">Your Fitness App</h2>
      </div>
    </div> */}

    <div className="flex flex-col lg:flex-row justify-end items-center pt-10 pb-20 lg:py-20 mx-auto lg:mx-10 overflow-hidden lg:overflow-auto">
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 p-5 lg:px-20">
        <h2 className="text-4xl uppercase text-center lg:text-left">Look Good</h2>
        <p className="mt-5">Experience how you can increase your 
        explosiveness, improve your speed, and build your 
        best physique with the Athlete program from
        Fitness Culture.
        </p>
        <div className="mt-5 hidden md:block">
          <Link to="/" className="text-red-500 uppercase font-bold">Watch Video</Link>
        </div>
      </div>
      <div 
        className="w-full lg:w-1/2 bg-cover bg-center relative ml-10 md:ml-0" 
        style={{
          backgroundImage: `url(${data.homepage.data.hero_image.url})`,
          minHeight: `500px`
      }}>
          <img
            src={phone}
            alt="App for Workouts"
            width="225px"
            className="absolute right--100 md:right-0 img-center"
          />

          <Link to="/" 
                className="absolute"
                style={{transform: "translate(-50%)", top: "45%", left: "50%"}}><img src="https://img.icons8.com/ios/75/000000/circled-play.png"/></Link>

      </div>
    </div>

    <div className="flex flex-col lg:flex-row justify-start items-center lg:pt-10 pb-20 mx-auto lg:mx-10 overflow-hidden lg:overflow-auto">
      <div 
        className="w-full lg:w-1/2 bg-cover bg-center relative ml-10 md:ml-0 order-2 lg:order-1" 
        style={{
          backgroundImage: `url(${data.homepage.data.hero_image.url})`,
          minHeight: `500px`
      }}>
          <img
            src={phone}
            alt="App for Workouts"
            width="225px"
            className="absolute flip right--100 md:left-0 img-center"
          />

          <Link to="/" 
                className="absolute"
                style={{transform: "translate(-50%)", top: "45%", left: "50%"}}><img src="https://img.icons8.com/ios/75/000000/circled-play.png"/></Link>

      </div>
      <div className="w-full xl:w-1/3 p-5 lg:px-20 order-1 lg:order-2">
        <h2 className="text-4xl uppercase text-center lg:text-left">Feel Better</h2>
        <p className="mt-5">Experience how you can increase your 
        explosiveness, improve your speed, and build your 
        best physique with the Athlete program from
        Fitness Culture.
        </p>
        <div className="mt-5 hidden md:block">
          <Link to="/" className="text-red-500 uppercase font-bold">Watch Video</Link>
        </div>
      </div>
    </div>



    <div className="flex flex-col lg:flex-row justify-end items-center lg:pt-10 pb-20 mx-auto lg:mx-10 overflow-hidden lg:overflow-auto">
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 p-5 lg:px-20">
        <h2 className="text-4xl uppercase text-center lg:text-left">Perform Better</h2>
        <p className="mt-5">Experience how you can increase your 
        explosiveness, improve your speed, and build your 
        best physique with the Athlete program from
        Fitness Culture.
        </p>
        <div className="mt-5 hidden md:block">
          <Link to="/" className="text-red-500 uppercase font-bold">Watch Video</Link>
        </div>
      </div>
      <div 
        className="w-full lg:w-1/2 bg-cover bg-center relative ml-10 lg:ml-auto" 
        style={{
          backgroundImage: `url(${data.homepage.data.hero_image.url})`,
          minHeight: `500px`
      }}>
          <img
            src={phone}
            alt="App for Workouts"
            width="225px"
            className="absolute right--100 md:right-0 img-center"
          />

          <Link to="/" 
                className="absolute"
                style={{transform: "translate(-50%)", top: "45%", left: "50%"}}><img src="https://img.icons8.com/ios/75/000000/circled-play.png"/></Link>

      </div>
    </div>




    {/* <div className="bg-light dots pt-5 pb-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full lg:w-1/2">
            <img
              src={data.homepage.data.phone_img.url}
              alt="checked-icon"
              width={"100%"}
              className="mx-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 p-10">
            <h3 className="uppercase text-3xl">
              Your <span className="rustico">Fitness App</span>
            </h3>
            <p>All you need for your training, nutrition, and mobility.</p>
            <div className="mt-10">
              <Link to="/" className="btn-lg btn-red shadow-md">
                Get Started
              </Link>
            </div>
            <div className="max-w-sm w-full lg:max-w-1/2 flex flex-col lg:flex-row mt-20 shadow-sm">
              <div
                className="hidden lg:block h-48 md:h-auto lg:h-auto w-full lg:w-32 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage:
                    "url(" + data.homepage.data.hero_image.url + ")",
                }}
              ></div>
              <div className="border-r border-b border-l border-t border-gray-400 lg:border-l-0 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="p-2">
                  <p className="text-gray-700 text-xs">
                    "I started Fitness Culture with Jake Hutton because we both
                    have seen the power of a healthy lifestyle and training"
                  </p>
                  <div className="text-gray-900 font-bold text-sm mt-2 rustico">
                    Steve Cook
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    <div className="py-20">
      <div className="container mx-auto">
        <h3 className="text-center uppercase text-3xl pb-5 lg:pb-10">
          Our Programs
        </h3>
        <Carousel programs={data.programs.edges} />
      </div>
    </div>
    {/* <div className="pt-10 pb-20">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-center items-center mt-10 h-full">
              <div className="w-full lg:w-1/2 p-10">       
                <img src={ data.homepage.data.graph.url } width="100%" alt="name" />
              </div>
              <div className="w-full lg:w-1/3 p-10">       
                  <h2 className="text-3xl">Your <span class="rustico">Training App</span></h2>
                  <p>All you need for your training, nutrition, and mobility.</p>
                  <div className="mt-10">
                    <Link to="/" className="btn-lg btn-red shadow-md">Get Started</Link>
                  </div>
              </div>
            </div>
          </div>
        </div> */}


  <div className="py-20" style={{ backgroundColor: "#F9F9F9" }}>
    <div className="container mx-auto">
        <h3 className="text-center uppercase text-3xl pb-5 lg:pb-10">
          See the Results
        </h3>
        <Carousel2 testimonials={data.testimonials.edges} />
      </div>
  </div>


      
    <div className="mx-5 lg:mx-10 pt-10 pb-20 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-start items-center mt-10 h-full">
        <div 
          className="w-full lg:w-1/2 bg-cover bg-center relative" 
          style={{
          backgroundImage: `url(${data.homepage.data.owners_image.url})`,
          minHeight: `500px`
          }}>
        </div>
        <div className="w-full lg:w-1/3 pt-5 lg:p-10">
          <h2 className="text-3xl uppercase">
            Jake and Steve
          </h2>
          <p className="mt-5">{data.homepage.data.owner_lead.text}</p>
          <div className="mt-10">
            <Link to="/" className="btn-lg btn-red shadow-md">
              Watch Video
            </Link>
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
