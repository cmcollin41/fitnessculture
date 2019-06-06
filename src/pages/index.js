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

        <div className="bg-light p-5">
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

        <div className="py-20 dots">
          <div className="container mx-auto">
            <h3 className="text-center uppercase text-3xl">See the <span className="rustico">Results</span></h3>
            <div className="flex justify-center items-stretch mt-10 h-full">
              <div className="w-full h-full">       
                <Slider arrows={ true } dots={ true } infinite={ true } speed={ 500 } slidesToShow={ 3 } slidesToScroll = { 1 } adaptiveHeight={ true }>
                  {programs.edges.map(program => (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-5 h-full">
                      <img className="w-full" src={program.node.data.hero_image.url} alt="name" />
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                      <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                      </div>
                    </div>
                  ))}
                </Slider>
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
        }
      }
    }
  }
}
`