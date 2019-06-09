import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Slider from "../components/Slider"

// const Index = ({ data: { homepage } }, { data: { programs } }) => (
const Index = ({ data }) => (
  <Layout>
    <div
      className="flex flex-col justify-center items-center mx-auto bg-cover bg-top p-5"
      style={{
        backgroundImage: `url(${data.homepage.data.hero_image.url})`,
        minHeight: `60vh`,
      }}
    >
      <h1 className="uppercase rustico text-center text-white text-4xl">
        {data.homepage.data.h1.text}
      </h1>
      <h1 className="text-center text-white mt-5 text-xl w:1-2">
        {data.homepage.data.h2.text}
      </h1>
      <div className="py-10">
        <Link to="/" className="btn-lg btn-red uppercase">
          Get Started
        </Link>
      </div>
    </div>
    <div className="bg-light dots pt-5 pb-20">
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
    </div>

    <div className="py-20">
      <div className="container mx-auto">
        <h3 className="text-center uppercase text-3xl">
          Our <span className="rustico">Programs</span>
        </h3>
        <Slider programs={data.programs.edges} />
        {/* {programs.edges.map(program => (
                <Program program={ program } />
              ))} */}
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
        <div className="flex flex-col lg:flex-row justify-center items-center mt-10 h-full">
          <div className="w-full lg:w-1/2 p-10">
            <img
              src={data.homepage.data.owners_image.url}
              width="100%"
              alt="name"
              className="shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/3 p-10">
            <h2 className="text-3xl">
              Meet <span className="rustico">Jake and Steve</span>
            </h2>
            <p>{data.homepage.data.owner_lead.text}</p>
            <div className="mt-10">
              <Link to="/" className="btn-lg btn-red shadow-md">
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
          }
        }
      }
    }
  }
`
