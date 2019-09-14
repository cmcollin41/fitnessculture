import React from "react"
import Layout from "../../components/layout"
import SEO from '../../components/seo'
import YouTube from '../../components/YouTube'
import '../../css/global.css'
import YouTubeIcon from "../../assets/icons8-youtube.svg"
import Messenger from "../../assets/icons8-messenger.svg"



const ThankYou = () => {

  return (
    <Layout>
      <SEO title="Thank You" description="Thanks for downloading our PDF"  />

      <div className="container mx-auto py-20 px-5">
        <div className="flex flex-col justify-center items-center">
          <h1 className="uppercase text-3xl text-center">Welcome to the Fitness Culture Family!</h1>
          <p className="text-base font-italics text-center mb-10">Check your email and be sure to drag us to your primary inbox.</p>
          <div className="flex flex-row -mx-4">
            <div className="px-4">
              <a href="https://www.youtube.com/channel/UC7HQ61sWvpoxA7eK-1P9icg?sub_confirmation=1" className="flex justify-center bg-red-500 px-2 py-2 text-white rounded flex-1" target="_blank" rel="noopener noreferrer">
                <img src={YouTubeIcon} alt="YouTube Icon" width="20px" className="mr-2" />Subscribe
              </a>
            </div>
            <div className="px-4">
              <a href="https://www.messenger.com/t/fitcultprogramming" className="flex justify-center bg-blue-500 px-2 py-2 text-white rounded flex-1" target="_blank" rel="noopener noreferrer">
                <img src={Messenger} width="20px" alt="Messenger Icon" className="mr-2" />Message Us
              </a>
            </div>
          </div>
          <p className="w-full lg:w-1/2 text-center mt-10">As an extra bonus before you set out and hit the gym, check out our best YouTube videos!</p>
          <div className="flex flex-col lg:flex-row justify-center -mx-5">
            <YouTube youtubeId="aowC0poaqyY" />
            <YouTube youtubeId="aowC0poaqyY" />
          </div>
        </div>
      </div>

    </Layout>
)}

export default ThankYou