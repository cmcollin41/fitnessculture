import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Sku from '../components/Products/Sku'

const Shop = ({ data }) => (
  <Layout>
    <SEO title="Shop" />
    <SEO title="Fitness Culture" />
    <div
      className="flex flex-col justify-center items-center bg-cover bg-center p-5"
      style={{
        backgroundImage: `url()`,
        minHeight: `60vh`,
      }}
    >
      <span className="flex rounded-full bg-black uppercase px-2 py-1 text-xs text-white">Your #1 Fitness App</span>
      <h1 className="uppercase text-center text-white text-4xl lg:text-6xl mt-4" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)"}}>
        Shop
      </h1>
      <p className="text-center text-white mt-5 lg:w-1/2 text-xl w:1-2 hidden lg:block" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5"}}>
        Let's Shop
      </p>
      <div className="py-10">
        <Link to="/" className="btn-lg btn-red uppercase shadow-lg">
          Get Started
        </Link>
      </div>
    </div>
    <div className="container mx-auto mt-10 mb-20">
      <Sku />
    </div>
    
  </Layout>
)

export default Shop