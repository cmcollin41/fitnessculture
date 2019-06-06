import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Slider from "react-slick";

import '../css/font-face.css'
import '../css/global.css'

const Index = ({ data: { homepage, programs } }) => (

  <React.Fragment>
    <Layout>
        <div className="flex flex-col justify-center items-center mx-auto bg-cover bg-top p-5" style={{ backgroundImage: 'url(' + homepage.data.hero_image.url + ')', minHeight: "60" + "vh" }}>
            <h1 className="uppercase rustico text-center text-white text-6xl">{homepage.data.h1.text}</h1>
            <h1 className="text-center text-white">{homepage.data.h2.text}</h1>
            <Link to="/" className="btn-lg btn-red uppercase">Get Started</Link>
        </div>

        <div className="bg-light dots p-5">
          <div className="container mx-auto my-5">
            <div className="flex flex-col lg:flex-row justify-center items-center py-5">
              <div className="w-full lg:w-1/2 flex flex-col">
                <div className="my-5">
                  <h2 className="rustico text-4xl">Training</h2>
                  <p>Our training programs are customized not only to your individual training style but also based on your strength levels. 
                    Every exercise comes complete with video tutorials, correct progressions, and weight calculations so you know there’s no guesswork</p>
                </div>
                <div className="my-5">
                  <h2 className="rustico text-4xl">Nutrition</h2>
                  <p>Our training programs are customized not only to your individual training style but also based on your strength levels. 
                    Every exercise comes complete with video tutorials, correct progressions, and weight calculations so you know there’s no guesswork</p>
                </div>
                <div className="my-5">
                  <h2 className="rustico text-4xl">Mobility</h2>
                  <p>Our training programs are customized not only to your individual training style but also based on your strength levels. 
                    Every exercise comes complete with video tutorials, correct progressions, and weight calculations so you know there’s no guesswork</p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <img src={ homepage.data.phone_img.url } width="100%" alt="name" />
              </div>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="container mx-auto">
            <h3 className="text-center uppercase text-3xl">Our <span className="rustico">Programs</span></h3>
            <div className="flex justify-center items-stretch mt-10 h-full">
              <div className="w-full h-full">       
                <Slider arrows={ true } dots={ true } infinite={ true } speed={ 500 } slidesToShow={ 3 } slidesToScroll = { 1 }>
                  {programs.edges.map(program => (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-5 h-full">
                      <img className="w-full" src={program.node.data.hero_image.url} alt="name" />
                      <div className="px-6 py-4">
                        <h3 className="font-bold text-xl mb-2">{program.node.data.title.text}</h3>
                        <p className="text-gray-700 text-base">
                          {program.node.data.lead.text}
                        </p>
                      </div>
                      <div className="px-6 py-10">
                        <Link to="/" className="btn-lg btn-red shadow-md">Learn More</Link>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-center items-center mt-10 h-full">
              <div className="w-full lg:w-1/2 p-10">       
                <img src={ homepage.data.graph.url } width="100%" alt="name" />
              </div>
              <div className="w-full lg:w-1/3 p-10">       
                  <h2 className="text-3xl">You're all-in-one <span class="rustico">Training App</span></h2>
                  <p>All you need for your training, nutrition, and mobility.</p>
                  <div className="mt-10">
                    <Link to="/" className="btn-lg btn-red shadow-md">Get Started</Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20" style={{ backgroundColor: "#F9F9F9" }}>
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-center items-center mt-10 h-full">
              <div className="w-full lg:w-1/2 p-10">       
                <img src={ homepage.data.owners_image.url } width="100%" alt="name" />
              </div>
              <div className="w-full lg:w-1/3 p-10">       
                  <h2 className="text-3xl">Meet <span className="rustico">Jake and Steve</span></h2>
                  <p>{ homepage.data.owner_lead.text }</p>
                  <div className="mt-10">
                    <Link to="/" className="btn-lg btn-red shadow-md">Watch Video</Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  </React.Fragment>
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
          hero_image{
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