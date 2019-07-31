import React from "react"
import Layout from "../components/layout"
import SEO from '../components/seo'
import ContactForm from '../components/ContactForm'
import '../css/global.css'



const Contact = () => {

  return (
    <Layout>
      <SEO title="Contact Us" description="Contact Fitness Culture via email, phone call, or Facebook Messenger."  />

      <div className="container mx-auto py-20 px-5">
        <h1 className="mb-10 uppercase text-3xl text-center">Contact us</h1>
        <div className="flex flex-row justify-center">
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>

    </Layout>
)}

export default Contact