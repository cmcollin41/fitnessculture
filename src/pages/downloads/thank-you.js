import React from "react"
import Layout from "../../components/layout"
import SEO from '../../components/seo'
import '../../css/global.css'
import YouTube from "../../assets/icons8-youtube.svg"
import Messenger from "../../assets/icons8-messenger.svg"



const ThankYou = () => {

  return (
    <Layout>
      <SEO title="Thank You" description="Thanks for downloading our PDF"  />

      <div className="container mx-auto py-20 px-5">
        <div className="flex flex-col justify-center items-center">
          <h1 className="uppercase text-3xl text-center">Welcome to the Fitness Culture Family!</h1>
          <p className="text-base font-italics text-center mb-10">Check your email and be sure to drag us to your primary inbox.</p>
          <p className="w-full lg:w-1/2 xl:w-1/3 ">As an extra bonus before you set out and hit the gym, check out our best YouTube videos! Also, don't forget to subscribe to our channel </p>
          <div className="flex flex-row justify-center">
            <div>
              <a href="https://www.youtube.com/channel/UC7HQ61sWvpoxA7eK-1P9icg?sub_confirmation=1" className="flex justify-center bg-red-500 px-2 py-2 text-white rounded" target="_blank" rel="noopener noreferrer">
                <img src={YouTube} width="20px" className="mr-2" />Subscribe
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/channel/UC7HQ61sWvpoxA7eK-1P9icg?sub_confirmation=1" className="flex justify-center bg-blue-500 px-2 py-2 text-white rounded" target="_blank" rel="noopener noreferrer">
                <img src={Messenger} width="20px" className="mr-2" />Message Us
              </a>
            </div>
          </div>
        </div>
      </div>

    </Layout>
)}

export default ThankYou