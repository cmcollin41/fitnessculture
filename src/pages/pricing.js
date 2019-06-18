import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

import "../css/global.css"
import { relative } from "upath";

const Index = ({ data: { prismicPricing } }) => (
  <Layout>
    <div
      className="flex flex-col justify-center items-center mx-auto bg-cover bg-top p-5 angle"
      style={{
        backgroundImage: "linear-gradient(to bottom right, #111, #212121)",
        minHeight: "60vh",
        position: relative
      }}
    >
      <h1 className="uppercase text-center text-white text-6xl">
        {prismicPricing.data.h1.text}
      </h1>
      <p className="text-center text-white mt-5">
        {prismicPricing.data.h2.text}
      </p>

      <div className="relative lg:absolute" style={{ left: "0", right: "0", bottom: "-100px" }}>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full lg:w-1/4 mt:auto lg:mt-20">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black flex flex-col justify-between">
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2 text-center">Basic</h3>
                <p className="text-gray-700 text-base text-6xl text-center">$49</p>
                <div>
                  <ul>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                  </ul>
                </div>
              </div>
              <div className="px-6 py-10">
                <Link to="/" className="btn-lg btn-red shadow-md">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-20">
            <div className="text-black max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col justify-between">
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2 text-center">Premium</h3>
                <p className="text-gray-700 text-base text-6xl text-center">$89</p>
                <div>
                  <ul>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                  </ul>
                </div>
              </div>
              <div className="px-6 py-10">
                <Link to="/" className="btn-lg btn-red shadow-md">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-20 mt-30">
        <div className="container mx-auto p-10">
          <h3 className="text-center uppercase text-3xl mb-10">
            Questions and <span className="rustico">Answers</span>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="w-full lg:w-3/4 border-b border-gray-400  bg-white p-4 flex flex-col justify-between leading-normal">
              <div className="py-6">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Question 1
                </div>
                <p className="text-gray-700 text-base">
                  I've lost 32 pounds since I downloaded tha app. The shear
                  presence of it in my pocket has yielded serious results! I
                  highly recommend it.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="w-full lg:w-3/4 border-b border-gray-400  bg-white p-4 flex flex-col justify-between leading-normal">
              <div className="py-6">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Question 1
                </div>
                <p className="text-gray-700 text-base">
                  I've lost 32 pounds since I downloaded tha app. The shear
                  presence of it in my pocket has yielded serious results! I
                  highly recommend it.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="w-full lg:w-3/4 border-b border-gray-400  bg-white p-4 flex flex-col justify-between leading-normal">
              <div className="py-6">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Question 1
                </div>
                <p className="text-gray-700 text-base">
                  I've lost 32 pounds since I downloaded tha app. The shear
                  presence of it in my pocket has yielded serious results! I
                  highly recommend it.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="w-full lg:w-3/4 border-b border-gray-400  bg-white p-4 flex flex-col justify-between leading-normal">
              <div className="py-6">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Question 1
                </div>
                <p className="text-gray-700 text-base">
                  I've lost 32 pounds since I downloaded tha app. The shear
                  presence of it in my pocket has yielded serious results! I
                  highly recommend it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 pb-32" style={{ backgroundColor: "#F9F9F9" }}>
        <div className="container mx-auto p-10">
          <h3 className="text-center mb-6 uppercase text-3xl">
            Join the <span className="rustico">#FitCult</span>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/2">
              <div class="flex flex-col lg:flex-row justify-between items-center border rounded py-6 px-3 shadow bg-white">
                <input
                  className="appearance-none border-none rounded w-auto py-1 px-2 text-gray-700 leading-tight text-xl focus:outline-none"
                  type="email"
                  placeholder="youremail@email.com"
                ></input>
                <Link
                  to="/"
                  className="btn-lg btn-red shadow-md w-auto mt-10 lg:mt-auto"
                >
                  Join the Cult
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
  query pricingQuery {
    prismicPricing {
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
      }
    }
  }
`
