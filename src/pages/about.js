import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import '../css/global.css'

const Index = () => (

  <React.Fragment>
    <Layout>
        <div className="flex flex-col justify-center items-center mx-auto bg-cover bg-top p-5" style={{ backgroundImage: 'url(' + "" + ')', minHeight: "60" + "vh" }}>
            <h1 className="uppercase rustico text-center text-white text-4xl">About Us</h1>
            <h2 className="text-center text-white">Just Two Homies</h2>
            <div className="py-10">
              <Link to="/" className="btn btn-red uppercase">Get Started</Link>
            </div>
        </div>
        <div className="container mx-auto py-20 px-5">
          <div className="flex flex-col justify-center items-center">
            <div className="w-full lg:w-2/3 lg:flex shadow-md">
              <div className="h-64 lg:h-auto lg:w-1/2 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: 'url(' + "" + ')' }}>
              </div>
              <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-5 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <h3 className="text-gray-900 font-bold text-xl mb-2">Training</h3>
                  <p className="text-gray-700 text-base">Get Trained</p>
                </div>
                <Link to="/" className="btn-lg btn-red shadow-md text-center">
                  Get Started
                </Link>
              </div> 
            </div> 
            <div className="w-full lg:w-2/3 mt-10 lg:flex shadow-md">
              <div className="h-64 lg:h-auto lg:w-1/2 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: 'url(' + "" + ')' }}>
              </div>
              <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-5 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <h3 className="text-gray-900 font-bold text-xl mb-2">Mobility</h3>
                  <p className="text-gray-700 text-base">Get Mobile</p>
                </div>
                <Link to="/" className="btn-lg btn-red shadow-md text-center">
                  Get Started
                </Link>
              </div> 
            </div> 
            <div className="w-full lg:w-2/3 mt-10 lg:flex shadow-md">
              <div className="h-64 lg:h-auto lg:w-1/2 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: 'url(' + "" + ')' }}>
              </div>
              <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-5 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <h3 className="text-gray-900 font-bold text-xl mb-2">Nutrition</h3>
                  <p className="text-gray-700 text-base">Get Healthy</p>
                </div>
                <Link to="/" className="btn-lg btn-red shadow-md text-center">
                  Get Started
                </Link>
              </div> 
            </div> 
          </div>
        </div>


        <div className="pt-20 pb-32" style={{ backgroundColor: "#F9F9F9" }}>
        <div className="container mx-auto p-10">
          <h3 className="text-center mb-6 uppercase text-3xl">
            Join the <span className="rustico">#FitCult</span>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/2">
              <div class="flex flex-col lg:flex-row justify-between items-center border rounded py-6 px-3 shadow bg-white">
                <input
                  className="appearance-none border-none rounded w-auto py-1 px-2 text-gray-700 leading-tight text-xl focus:outline-none"
                  type="email"
                  placeholder="youremail@email.com"
                ></input>
                <Link
                  to="/"
                  className="btn-lg btn-red shadow-md w-auto mt-10 lg:mt-auto"
                >
                  Join the Cult
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </React.Fragment>
)

export default Index