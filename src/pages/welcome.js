import React from "react"
import Layout from "../components/layout"
import SEO from '../components/seo'
import '../css/global.css'



const Welcome = () => {

  return (
    <Layout>
      <SEO title="Welcome" description="Welcome to Fitness Culture"  />

      <div className="container mx-auto py-20 px-5">
        <h1 className="uppercase text-3xl text-center">App Walkthrough</h1>
        <p className="text-center text-xl font-light">Get up-to-speed on all our app has to offer.</p>
        <div class="shadow rounded-full w-full bg-grey-light my-10">
          <div class="bg-blue-500 rounded-full text-xs leading-none py-1 text-center text-white" style={{width: "9%"}}>9%</div>
        </div>

        <div className="mt-10">
          <h2 className="uppercase text-xl my-4">Welcome to Fitness Culture</h2>
          <p>At Fitness Culture we are much more than just an app. We want you to treat us like your personal coaching service. All of the features in our app will be your daily guide, but nothing is as value as being able to reach out to a coach for feedback on technique, nutritional changes, and help to work around and fix injuries.</p>
          <p>Make sure to join our Facebook community. We field all your questions and we have a super knowledgeable community of people ready to help you reach your goals.</p>
          <p>If you need help with anything you can email <a href="mailto:support@fitnessculture.com">support@fitnessculture.com.</a></p>
          <h2 className="uppercase text-xl mt-10 mb-4">Getting Started with the App.</h2>
          <p>The app has 3 core sections:</p>
          <ul className="my-6">
            <li>1. Workouts</li>
            <li>2. Nutrition</li>
            <li>3. Mobility</li>
          </ul>
          <p>To make it easy, we've broken it up by the features included in every section. We are going to go through everything step by step you make sure you get started on the right foot. If you ever have a question on any of the features, you can just reference this page for the answer!</p>
        </div>
        <div className="flex flex-row justify-end items-center mt-10">
          <button className="px-2 py-4 bg-green-500 hover:bg-green-400 text-white shadow">
            Navigation the Workouts
          </button>
        </div>
      </div>

    </Layout>
)}

export default Welcome