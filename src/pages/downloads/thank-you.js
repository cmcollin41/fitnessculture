import React from "react"
import Layout from "../../components/layout"
import SEO from '../../components/seo'
import '../../css/global.css'



const ThankYou = () => {

  return (
    <Layout>
      <SEO title="Thank You" description="Thanks for downloading our PDF"  />

      <div className="container mx-auto py-20 px-5">
        <h1 className="mb-10 uppercase text-3xl text-center">Thank You!</h1>
        <p className="w-full lg:w-1/2 xl:w-1/3 text-xl text-center">Your download will be sent to your email shortly. If it's not there check your spam folder.</p>
        <div className="flex flex-row justify-center">
          <div className="w-full lg:w-1/2">
          </div>
        </div>
      </div>

    </Layout>
)}

export default ThankYou