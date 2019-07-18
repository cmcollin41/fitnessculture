import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Slider from "react-slick"

const Program = ({ data: { prismicProgram } }) => {
  const { data } = prismicProgram
  return (
    <Layout>
      <div
        className="flex flex-col justify-center mx-auto bg-cover bg-center p-5"
        style={{
          backgroundImage: "url(" + prismicProgram.data.hero_image.url + ")",
          minHeight: "60vh",
        }}
      >
        <div class="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="uppercase rustico text-white text-6xl leading-none">
                {prismicProgram.data.title.text}
              </h1>
              <p className="text-white text-xl mt-5" style={{ maxWidth: "500px" }}>
                {prismicProgram.data.lead.text}
              </p>
              <div className="mt-10">
                <Link to="/" className="btn-lg btn-red shadow-md">
                  Get Started
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 hidden lg:block">
              <div className="flex justify-center">
                <div className="max-w-sm rounded overflow-hidden bg-white shadow-lg z-50 mt-20 md:mt-auto">
                  <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-2">
                      Program Overview
                    </div>
                    <p className="text-gray-700 text-base">
                      5 Days per week
                    </p>
                    <p className="text-gray-700 text-base">
                      Duration: 12 Months
                    </p>
                    <p className="text-gray-700 text-base">
                      Equipment: Full gym
                    </p>
                    <p className="text-gray-700 text-base">
                      Time per day: 1 hour
                    </p>
                    <p className="text-gray-700 text-base">
                      Fitness level: Intermediate
                    </p>
                    <p className="text-gray-700 text-base">Videos: Yes</p>
                    <p className="text-gray-700 text-base">
                      Duration: 12 Months
                    </p>
                    <p className="text-gray-700 text-base">
                      Equipment: Full gym
                    </p>
                    <p className="text-gray-700 text-base">
                      Time per day: 1 hour
                    </p>
                    <p className="text-gray-700 text-base">
                      Fitness level: Intermediate
                    </p>
                    <p className="text-gray-700 text-base">Videos: Yes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="easy3" style={{ backgroundImage: 'linear-gradient(to right, ' + prismicProgram.data.bg_col_gradient_1 + ',' + prismicProgram.data.bg_col_gradient_2 + ')'}}>
          <div className="container mx-auto py-12 h-full">
            <div className="flex flex-col md:flex-row justify-center items-center z-50 h-full">
              <div class="flex flex-col justify-center w-1/3 h-full text-center py-5">
                <span>STYLE</span>
                  <img src={"../icons8-checked.svg"} alt="checked-icon" width={"125px"} className="mx-auto" />
                <p>BODYBUILDING</p>
              </div>
              <div class="flex flex-col justify-center w-1/3 h-full text-center py-5">
                <span>STYLE</span>
                <img src={"../icons8-checked.svg"} alt="checked-icon" width={"125px"} className="mx-auto" />
                  <p>BODYBUILDING</p>
              </div>
              <div class="flex flex-col justify-center w-1/3 h-full text-center py-5">
                <span>STYLE</span>
                  <img src={"../icons8-checked.svg"} alt="checked-icon" width={"125px"} className="mx-auto" />
                <p>BODYBUILDING</p>
              </div>
            </div>
          </div>
        </div> */}

      <div
        className="py-20 block lg:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, " +
            prismicProgram.data.bg_col_gradient_1 +
            "," +
            prismicProgram.data.bg_col_gradient_2 +
            ")",
        }}
      >
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center">
            <div className="max-w-sm rounded overflow-hidden bg-white shadow-lg z-50 md:mt-auto">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Program Overview</div>
                <p className="text-gray-700 text-base">
                  How many days a week do you workout?
                </p>
                <ul class="flex my-5">
                  <li class="flex-1 mr-2">
                    <a
                      class="text-center block border border-blue-500 rounded py-2 px-4 bg-red-500 hover:bg-red-700 text-white"
                      href="#"
                    >
                      4 days
                    </a>
                  </li>
                  <li class="flex-1 mr-2">
                    <a
                      class="text-center block border border-white rounded hover:border-gray-200 text-red-500 hover:bg-gray-200 py-2 px-4"
                      href="#"
                    >
                      5 days
                    </a>
                  </li>
                  <li class="text-center flex-1">
                    <a
                      class="text-center block border border-white rounded hover:border-gray-200 text-red-500 hover:bg-gray-200 py-2 px-4"
                      href="#"
                    >
                      6 days
                    </a>
                  </li>
                </ul>
                <p className="text-gray-700 text-base">Duration: 12 Months</p>
                <p className="text-gray-700 text-base">Equipment: Full gym</p>
                <p className="text-gray-700 text-base">Time per day: 1 hour</p>
                <p className="text-gray-700 text-base">
                  Fitness level: Intermediate
                </p>
                <p className="text-gray-700 text-base">Videos: Yes</p>
                <p className="text-gray-700 text-base">Duration: 12 Months</p>
                <p className="text-gray-700 text-base">Equipment: Full gym</p>
                <p className="text-gray-700 text-base">Time per day: 1 hour</p>
                <p className="text-gray-700 text-base">
                  Fitness level: Intermediate
                </p>
                <p className="text-gray-700 text-base">Videos: Yes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: 'linear-gradient(to right, ' + prismicProgram.data.bg_col_gradient_1 + ',' + prismicProgram.data.bg_col_gradient_2 + ')'}}>
        <div className="container mx-auto py-20 h-full">
          {/* <div className="flex justify-center">
                <h2 class="text-3xl uppercase">Your Training Awaits</h2>
              </div> */}
          <div className="flex flex-col md:flex-row justify-center items-center z-50 h-full">
            <div class="flex flex-col justify-center w-full lg:w-1/3 h-full text-center py-5">
              <img
                src={"../1circle.png"}
                alt="checked-icon"
                width={"75px"}
                className="mx-auto"
              />
              <h3 className="text-xl uppercase mt-5">
                Pick Your Program
              </h3>
              <p className="mx-auto mt-5" style={{ maxWidth: "300px" }}>
                This is a paragraph about joining a program and hitting your
                goals
              </p>
            </div>
            <div className="flex flex-col justify-center w-full lg:w-1/3 h-full text-center py-5">
              <img
                src={"../1circle.png"}
                alt="checked-icon"
                width={"75px"}
                className="mx-auto"
              />
              <h3 className="text-xl uppercase mt-5">
                Start Training
              </h3>
              <p className="mx-auto mt-5" style={{ maxWidth: "300px" }}>
                This is a paragraph about joining a program and hitting your
                goals
              </p>
            </div>
            <div class="flex flex-col justify-center w-full lg:w-1/3 h-full text-center py-5">
              <img
                src={"../1circle.png"}
                alt="checked-icon"
                width={"75px"}
                className="mx-auto"
              />
              <h3 className="text-xl mt-5 uppercase">
                Join the #FitCult
              </h3>
              <p className="mx-auto mt-5" style={{ maxWidth: "300px" }}>
                This is a paragraph about joining a program and hitting your
                goals
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/2">
              <img
                src={prismicProgram.data.phone_img.url}
                alt="checked-icon"
                width={"100%"}
                className="mx-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 p-10">
              <h3 className="uppercase text-3xl">
                Your Fitness App
              </h3>
              <p className="mt-5">All you need for your training, nutrition, and mobility.</p>
              <div className="mt-10">
                <Link to="/" className="btn-lg btn-red shadow-md">
                  Get Started
                </Link>
              </div>
              <div className="max-w-sm w-full lg:max-w-1/2 flex flex-col lg:flex-row mt-20 shadow-md">
                <div
                  className="hidden lg:block h-48 md:h-auto lg:h-auto w-full lg:w-32 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  style={{
                    backgroundImage:
                      "url(" +
                      prismicProgram.data.card_testimonial_image.url +
                      ")",
                  }}
                ></div>
                <div className="border-r border-b border-l border-t border-gray-400 lg:border-l-0 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="p-2">
                    <p className="text-gray-700 text-xs">
                      "I started Fitness Culture with Jake Hutton because we
                      both have seen the power of a healthy lifestyle and
                      training"
                    </p>
                    <div className="text-gray-900 font-bold text-sm mt-2 rustico">
                      Steve Cook
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 dots">
        <div className="container mx-auto">
          <h3 className="text-center uppercase text-3xl">
            See the <span className="rustico">Results</span>
          </h3>
          <div className="flex justify-center mt-10">
            <div className="w-full lg:w-1/2">
              <Slider
                arrows={true}
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
              >
                <div>
                  <img
                    src={prismicProgram.data.testimonial_image_1.url}
                    width="100%"
                  />
                </div>
                <div>
                  <img
                    src={prismicProgram.data.testimonial_image_1.url}
                    width="100%"
                  />
                </div>
                <div>
                  <img
                    src={prismicProgram.data.testimonial_image_1.url}
                    width="100%"
                  />
                </div>
                <div>
                  <img
                    src={prismicProgram.data.testimonial_image_1.url}
                    width="100%"
                  />
                </div>
                <div>
                  <img
                    src={prismicProgram.data.testimonial_image_1.url}
                    width="100%"
                  />
                </div>
                <div>
                  <img
                    src={prismicProgram.data.testimonial_image_1.url}
                    width="100%"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 lg:mt-20">
        <div className="flex flex-col lg:flex-row justify-center items-center mx-5">
          <div className="w-full md:w-1/2 lg:w-1/4 mt:auto lg:mt-20">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black flex flex-col justify-between">
              <div className="px-6 py-4">
              <h3 className="text-gray-500 font-bold text-xl mb-2 text-center uppercase">Basic</h3>
                <h6 className="text-black text-base text-6xl text-center mt-5">39</h6>
                <div>
                  <ul>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                  </ul>
                </div>
              </div>
              <div className="px-6 py-10">
                <Link to="/" className="btn-lg btn-red shadow-md">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mt-20">
            <div className="text-black max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col justify-between">
              <div className="px-6 py-4">
                <h3 className="text-gray-500 font-bold text-xl mb-2 text-center uppercase">Premium</h3>
                <h6 className="text-black text-base text-6xl text-center mt-5">89</h6>
                <div>
                  <ul>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                    <li>This is a feature</li>
                  </ul>
                </div>
              </div>
              <div className="px-6 py-10">
                <Link to="/" className="btn-lg btn-red shadow-md">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto p-10">
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
