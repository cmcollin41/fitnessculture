import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import '../css/global.css'

const Shop = () => {

  return (
    <Layout>
      <SEO title="Fitness Culture Shop" description="Buy eBooks, apparel, and supplements" />
      
        <div className="container mx-auto py-20 px-5">
          <h1 className="uppercase text-center text-3xl">Shop</h1>
        </div>

    </Layout>
)}

export default Shop