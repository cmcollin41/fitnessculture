import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

import "../css/global.css"

const Index = ({ data: { prismicPricing } }) => (
  <Layout>
    <div
      className="flex flex-col justify-center items-center mx-auto bg-cover bg-top p-5"
      style={{
        backgroundImage: "linear-gradient(to bottom right, #000, #212121)",
        minHeight: "60vh",
      }}
    >
      <h1 className="uppercase text-center text-white text-6xl">
        {prismicPricing.data.h1.text}
      </h1>
      <p className="text-center text-white mt-5">
        {prismicPricing.data.h2.text}
      </p>
    </div>
    <div className="flex flex-col lg:flex-row justify-center items-stretch mt-10">
      <div className="w-full lg:w-1/4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white h-full flex flex-col justify-between">
          <div className="px-6 py-4">
            <h3 className="font-bold text-xl mb-2">Basic</h3>
            <p className="text-gray-700 text-base text-6xl">$49</p>
            <div>
              <ul>
                <li></li>
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
      <div className="w-full lg:w-1/4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white h-full flex flex-col justify-between">
          <div className="px-6 py-4">
            <h3 className="font-bold text-xl mb-2">Premium</h3>
            <p className="text-gray-700 text-base text-6xl">$89</p>
          </div>
          <div className="px-6 py-10">
            <Link to="/" className="btn-lg btn-red shadow-md">
              Learn More
            </Link>
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
