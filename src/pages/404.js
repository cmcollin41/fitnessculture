import React from "react"
import Layout from "../components/layout"
import SEO from '../components/seo'
import '../css/global.css'



const Error = () => {

  return (
    <Layout>
      <SEO title="Thank You" description="Thanks for downloading our PDF"  />

      <div className="container mx-auto text-center py-20 px-5">
        <h1 className="mb-10 uppercase text-3xl text-center">Oops!</h1>
        <p className="w-full lg:w-1/2 mx-auto text-xl text-center">It looks like we've misplaced a page.</p>
      </div>

    </Layout>
)}

export default Error