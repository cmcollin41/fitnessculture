import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import ProgramTabs from "../components/ProgramTabs"

// Images
import kyle from '../../static/kylewilliford.png'
import circles from '../../static/circles.webp'
import logo1 from '../../static/logo-1.svg'
import logo2 from '../../static/logo-2.svg'
import logo3 from '../../static/logo-3.svg'
import logo4 from '../../static/logo-4.svg'
import logo5 from '../../static/menshealth.png'
import square from '../../static/square-circles.webp'

const Program = ({ data: { prismicProgram } }) => {
  const { data } = prismicProgram
  return (
    <Layout>
      <div className="h-2 w-full" style={{backgroundColor: prismicProgram.data.bg_col_gradient_1 }}>
      </div>

      {/* <div
        className="flex flex-col justify-center mx-auto bg-cover bg-center p-5"
        style={{
          backgroundImage: "url(" + prismicProgram.data.hero_image.url + ")",
          minHeight: "60vh",
        }}
      > */}
      <div className="py-20 relative">
        <div className="absolute h-full bottom-0 left-0 overflow-x-hidden" style={{zIndex: "-10"}}>
          <img src={circles} width="200px" style={{transform: "scale(-1)"}}/>
        </div>
        <div className="hidden lg:block absolute h-full" style={{transform: "translateY(50%)"}}>
          <h2 className="uppercase text-gray-300 text-4xl" style={{transform: "rotate(90deg)"}}>Program</h2>
        </div>
        <div class="container mx-auto p-5">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="uppercase text-6xl leading-none">
                {prismicProgram.data.title.text}
              </h1>
              <p className="text-xl mt-5" style={{ maxWidth: "500px" }}>
                {prismicProgram.data.lead.text}
              </p>
              <div className="mt-10">
                <Link to="/" className="btn-lg btn-red rounded-full shadow-md" style={{backgroundImage: 'linear-gradient(to right, ' + prismicProgram.data.bg_col_gradient_1 + ',' + prismicProgram.data.bg_col_gradient_2 + ')'}}>
                  Start Program
                </Link>
                <span className="ml-4 text-xs font-light">$2 per Workout</span>
              </div>
            </div>
            <div className="w-full lg:w-1/2 shadow-lg relative mt-10 lg:mt-auto">
              <img src={prismicProgram.data.hero_image.url} width="100%" />
              <img src={square} width="100px" className="absolute" style={{bottom: "-25px", right: "-25px", zIndex: "-1"}} />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

    <div className="w-full bg-gray-100 pt-4 pb-2">
      <div className="container mx-auto">
        <p className="text-black uppercase text-xs text-center pt-2">Programs Engineered by Experts Featured in:</p>
        <div className="block overflow-scroll lg:overflow-hidden w-full">
          <div className="flex flex-row justify-between items-center text-center h-full">
            <img src={ logo1 } width="100px" className="px-2" />
            <img src={ logo2 } width="100px" className="px-2" />
            <img src={ logo4 } width="100px" className="px-2" />
            <img src={ logo3 } width="100px" className="px-2" />
            <img src={ logo5 } width="100px" className="px-2" />
          </div>
        </div>
      </div>
    </div>

    <div className="w-full py-10 lg:py-20 relative">
      <div className="container mx-auto">
        <ProgramTabs />
      </div>
      <img src={ circles } width="250px" className="hidden lg:block absolute left-0" style={{ bottom: "-100px", transform: "scaleX(-1)"}} />
    </div>


  <div className="py-20 bg-gray-800">
    <div className="container mx-5 lg:mx-auto">
      <h3 className="uppercase text-white text-3xl pb-5 lg:pb-10">
        Join the <span className="text-red-500">#FitCult</span> Family
      </h3>
    </div>
    <div className="flex flex-row overflow-scroll lg:overflow-hidden">
      <div className="rounded p-5 w-64 mx-3" style={{backgroundColor: "#9e9e9e", minWidth: "275px"}}>
        <p className="text-white text-xs italic">"Fitness Culture made me realize that nutrition is the most important thing. I heard Steve Cook say in one of his videos that "you can't out train a bad diet" that is 100% true."</p>
        <div className="flex flex-row items-center mt-6">
          <img src={ kyle } width="50px" height="50px" className="rounded-full" />
          <div className="pl-2">
            <h6 className="uppercase">Kyle Williford</h6>
            <p className="text-black text-xs">Chester, South Carolina</p>
          </div>
        </div>
      </div>
      <div className="rounded p-5 w-64 mx-3" style={{backgroundColor: "#9e9e9e", minWidth: "275px"}}>
        <p className="text-white text-xs italic">"Fitness Culture made me realize that nutrition is the most important thing. I heard Steve Cook say in one of his videos that "you can't out train a bad diet" that is 100% true."</p>
        <div className="flex flex-row items-center mt-6">
          <img src={ kyle } width="50px" height="50px" className="rounded-full" />
          <div className="pl-2">
            <h6 className="uppercase">Kyle Williford</h6>
            <p className="text-black text-xs">Chester, South Carolina</p>
          </div>
        </div>
      </div>
      <div className="rounded p-5 w-64 mx-3" style={{backgroundColor: "#9e9e9e", minWidth: "275px"}}>
        <p className="text-white text-xs italic">"Fitness Culture made me realize that nutrition is the most important thing. I heard Steve Cook say in one of his videos that "you can't out train a bad diet" that is 100% true."</p>
        <div className="flex flex-row items-center mt-6">
          <img src={ kyle } width="50px" height="50px" className="rounded-full" />
          <div className="pl-2">
            <h6 className="uppercase">Kyle Williford</h6>
            <p className="text-black text-xs">Chester, South Carolina</p>
          </div>
        </div>
      </div>
      <div className="rounded p-5 w-64 mx-3" style={{backgroundColor: "#9e9e9e", minWidth: "275px"}}>
        <p className="text-white text-xs italic">"Fitness Culture made me realize that nutrition is the most important thing. I heard Steve Cook say in one of his videos that "you can't out train a bad diet" that is 100% true."</p>
        <div className="flex flex-row items-center mt-6">
          <img src={ kyle } width="50px" height="50px" className="rounded-full" />
          <div className="pl-2">
            <h6 className="uppercase">Kyle Williford</h6>
            <p className="text-black text-xs">Chester, South Carolina</p>
          </div>
        </div>
      </div>
      <div className="rounded p-5 w-64 mx-3" style={{backgroundColor: "#9e9e9e", minWidth: "275px"}}>
        <p className="text-white text-xs italic">"Fitness Culture made me realize that nutrition is the most important thing. I heard Steve Cook say in one of his videos that "you can't out train a bad diet" that is 100% true."</p>
        <div className="flex flex-row items-center mt-6">
          <img src={ kyle } width="50px" height="50px" className="rounded-full" />
          <div className="pl-2">
            <h6 className="uppercase">Kyle Williford</h6>
            <p className="text-black text-xs">Chester, South Carolina</p>
          </div>
        </div>
      </div>
      <div className="rounded p-5 w-64 mx-3" style={{backgroundColor: "#9e9e9e", minWidth: "275px"}}>
        <p className="text-white text-xs italic">"Fitness Culture made me realize that nutrition is the most important thing. I heard Steve Cook say in one of his videos that "you can't out train a bad diet" that is 100% true."</p>
        <div className="flex flex-row items-center mt-6">
          <img src={ kyle } width="50px" height="50px" className="rounded-full" />
          <div className="pl-2">
            <h6 className="uppercase">Kyle Williford</h6>
            <p className="text-black text-xs">Chester, South Carolina</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto mt-10 text-center">
      <Link to="/" className="uppercase font-bold text-xs text-white border border-white rounded-full py-2 px-4">Join the Family</Link>
    </div>
  </div>

      <div className="mt-20">
        <div className="flex flex-col lg:flex-row justify-center items-center mx-5">
          <div className="w-full md:w-1/2 lg:w-1/4 mt:auto lg:mt-20">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black flex flex-col justify-between">
              <div className="p-4 text-center mx-auto">
                <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 uppercase">Basic</span>
                <h6 className="text-black text-base text-6xl mt-5">$39</h6>
              </div>
              <div>
                <ul className="pricing">
                  <li>World class training programs</li>
                  <li>Complete sets, reps, & progressions</li>
                  <li>Video coaching tutorials</li>
                  <li>Member only Facebook group</li>
                  <li>Ability to switch programs anytime</li>
                </ul>
              </div>
              <div className="px-6 py-10">
                <Link to="/" className="py-2 px-4 rounded-full border border-red-500 text-red-500">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mt-20">
            <div className="text-black max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col justify-between">
              <div className="p-4 text-center mx-auto">
                <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 uppercase">Premium</span>
                <h6 className="text-black text-base text-6xl mt-5">$89</h6>
              </div>
              <div>
                <ul className="pricing">
                  <li>World class training programs</li>
                  <li>Complete sets, reps, & progressions</li>
                  <li>Video coaching tutorials</li>
                  <li>Member only Facebook group</li>
                  <li>Ability to switch programs anytime</li>
                  <li>Mobility Routines</li>
                  <li>Customized Macros</li>
                  <li>Online Meal Builder</li>
                </ul>
              </div>
              <div className="px-6 py-10">
                <Link to="/" className="py-2 px-4 rounded-full border border-red-500 text-red-500">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto">
          <h3 className="text-center uppercase text-3xl mb-10">
            Questions and <span className="rustico">Answers</span>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="w-full lg:w-3/4 border-b border-gray-400  bg-white p-4 flex flex-col justify-between leading-normal">
              <div className="py-6">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Question 1
                </div>
                <p className="text-gray-700 text-base">
                  I've lost 32 pounds since I downloaded tha app. The shear
                  presence of it in my pocket has yielded serious results! I
                  highly recommend it.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="w-full lg:w-3/4 border-b border-gray-400  bg-white p-4 flex flex-col justify-between leading-normal">
              <div className="py-6">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Question 1
                </div>
                <p className="text-gray-700 text-base">
                  I've lost 32 pounds since I downloaded tha app. The shear
                  presence of it in my pocket has yielded serious results! I
                  highly recommend it.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="w-full lg:w-3/4 border-b border-gray-400  bg-white p-4 flex flex-col justify-between leading-normal">
              <div className="py-6">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Question 1
                </div>
                <p className="text-gray-700 text-base">
                  I've lost 32 pounds since I downloaded tha app. The shear
                  presence of it in my pocket has yielded serious results! I
                  highly recommend it.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="w-full lg:w-3/4 border-b border-gray-400  bg-white p-4 flex flex-col justify-between leading-normal">
              <div className="py-6">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Question 1
                </div>
                <p className="text-gray-700 text-base">
                  I've lost 32 pounds since I downloaded tha app. The shear
                  presence of it in my pocket has yielded serious results! I
                  highly recommend it.
                </p>
              </div>
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
  )
}

export default Program

export const pageQuery = graphql`
  query ProgramBySlug($uid: String!) {
    prismicProgram(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        lead {
          text
        }
        hero_image {
          url
        }
        phone_img {
          url
        }
        video {
          embed_url
        }
        testimonial_image_1 {
          url
        }
        card_testimonial_image {
          url
        }
        bg_col_gradient_1
        bg_col_gradient_2
        body {
          __typename
        }
      }
    }
  }
`
