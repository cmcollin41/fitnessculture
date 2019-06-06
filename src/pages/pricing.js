import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

import '../css/global.css'

const Index = ({ data: { prismicPricing } }) => (

  <React.Fragment>
    <Layout>
        <div className="flex flex-col justify-center items-center mx-auto bg-cover bg-top p-5" style={{ backgroundImage: 'url(' + prismicPricing.data.hero_image.url + ')', minHeight: "60" + "vh" }}>
            <h1 className="uppercase font-serif text-center text-white text-6xl">{prismicPricing.data.h1.text}</h1>
            <h1 className="text-center text-white">{prismicPricing.data.h2.text}</h1>
            <Link to="/" className="btn btn-red uppercase">Get Started</Link>
        </div>
    </Layout>
  </React.Fragment>
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