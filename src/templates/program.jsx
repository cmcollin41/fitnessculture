import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import ProgramTabs from "../components/ProgramTabs"
import Img from 'gatsby-image'

// Images
import circles from '../../static/circles.webp'
import square from '../../static/square-circles.webp'
import logo1 from '../../static/logo-1.svg'
import logo2 from '../../static/logo-2.svg'
import logo3 from '../../static/logo-3.svg'
import logo4 from '../../static/logo-4.svg'
import logo5 from '../../static/menshealth.png'

const Program = ({ data }) => {
  const program = data.allSanityProgram.nodes[0]
  return (
    <Layout>
      <div className="h-2 w-full" style={{backgroundImage: 'linear-gradient(to right, ' + program.colorOne.hex + ',' + program.colorTwo.hex + ')'}}>
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
          <img src={circles} alt="circles" width="200px" height="100%" style={{transform: "scale(-1)"}}/>
        </div>
        <div className="hidden lg:block absolute h-full" style={{transform: "translate(-35%, 50%)"}}>
          <h2 className="uppercase text-gray-300 text-3xl" style={{transform: "rotate(90deg)"}}>Fitness Program</h2>
        </div>
        <div class="container mx-auto p-5">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="uppercase text-6xl leading-none">
                {program.title}
              </h1>
              <p className="text-xl mt-5" style={{ maxWidth: "500px" }}>
                {program.subtitle}
              </p>
              <div className="mt-10">
                <Link to="/" className="btn-lg text-white rounded-full shadow-md" style={{backgroundImage: 'linear-gradient(to right, ' + program.colorOne.hex + ',' + program.colorTwo.hex + ')'}}>
                  Start Program
                </Link>
                <span className="ml-4 text-xs font-light">$2 per Workout</span>
              </div>
            </div>
            <div className="w-full lg:w-1/2 shadow-lg relative mt-10 lg:mt-auto">
              <Img fluid={program.heroImage.asset.fluid} />
              <img src={square} alt="square circles" width="100px" height="100%" className="absolute" style={{bottom: "-25px", right: "-25px", zIndex: "-1"}} />
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
            <img src={ logo1 } alt="social proof logo" width="100px" className="px-2" />
            <img src={ logo2 } alt="social proof logo" width="100px" className="px-2" />
            <img src={ logo4 } alt="social proof logo" width="100px" className="px-2" />
            <img src={ logo3 } alt="social proof logo" width="100px" className="px-2" />
            <img src={ logo5 } alt="social proof logo" width="100px" className="px-2" />
          </div>
        </div>
      </div>
    </div>

    <div className="w-full py-10 lg:py-20 relative">
      <div className="container mx-auto">
        <ProgramTabs props={program}/>
      </div>
      <img src={ circles } width="250px" className="hidden lg:block absolute left-0" style={{ bottom: "0px", transform: "scaleX(-1)", zIndex: "-10"}} />
    </div>


    <div className="py-20 bg-gray-800">
      <div className="container px-5 lg:mx-auto">
        <h3 className="uppercase text-white text-3xl pb-5 lg:pb-10">
          Join the <span className="px-2" style={{backgroundImage: 'linear-gradient(to right, ' + program.colorOne.hex + ',' + program.colorTwo.hex + ')'}}>#FitCult</span> Family
        </h3>
      </div>
      <div className="flex flex-row overflow-scroll lg:overflow-hidden">
        {program.testimonials.map((i, count) => (
          <div key={count} className="flex flex-col justify-between rounded p-5 w-64 mx-3" style={{backgroundColor: "#9e9e9e", minWidth: "275px"}}>
            <p className="text-white text-xs italic">"{i.quote}"</p>
            <div className="flex flex-row items-center mt-6">
              <img src={ i.memberImage.asset.url} alt="member photo" width="50px" height="50px" className="rounded-full" />
              <div className="pl-2">
                <h6 className="uppercase">{i.member}</h6>
                <p className="text-black text-xs">{i.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container mx-auto mt-10 text-center">
        <Link to="/" className="uppercase font-bold text-xs text-white border border-white rounded-full py-2 px-4">Join the Family</Link>
      </div>
    </div>

    <div className="my-20 relative">
      <img src={square} width="100px" height="100%" className="absolute" style={{top: "-25px", zIndex: "-1"}} />
      <div className="flex flex-col lg:flex-row justify-center items-center mx-5">
        <div className="w-full md:w-1/2 lg:w-1/4 mt:auto lg:mt-20">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black flex flex-col justify-between">
            <div className="h-2 w-full" style={{backgroundImage: 'linear-gradient(to right, ' + program.colorOne.hex + ',' + program.colorTwo.hex + ')'}}>
            </div>
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
                Start Program
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mt-20 lg:mt-auto">
          <div className="text-black max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col justify-between">
            <div className="h-2 w-full" style={{backgroundImage: 'linear-gradient(to right, ' + program.colorOne.hex + ',' + program.colorTwo.hex + ')'}}>
            </div>
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
                Start Program
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img src={ circles } width="250px" height="100%" className="block absolute right-0" style={{ bottom: "-150px", zIndex: "-10"}} />
    </div>

    <div className="py-20 bg-gray-800">
      <div className="container px-5 lg:mx-auto">
        <h3 className="uppercase text-white text-left lg:text-center text-3xl pb-5 lg:pb-10">
          Joining is <span className="px-2" style={{backgroundImage: 'linear-gradient(to right, ' + program.colorOne.hex + ',' + program.colorTwo.hex + ')'}}>Stress</span> Free
        </h3>
      </div>
      <div className="container lg:mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="flex flex-col justify-between rounded p-5 w-64 lg:mx-3 mt-10 lg:mt-auto" style={{backgroundColor: "#9e9e9e", minWidth: "275px"}}>
            <h5 className="uppercase mb-5">No Contracts</h5>
            <p className="text-white">All of our training programs inside the app are month to month. No contracts, only results.</p>
          </div>
          <div className="flex flex-col justify-between rounded p-5 w-64 mx-auto lg:mx-3 mt-10 lg:mt-auto" style={{backgroundColor: "#9e9e9e", minWidth: "275px"}}>
            <h5 className="uppercase mb-5">Cancel Anytime</h5>
            <p className="text-white">All of our training programs inside the app are month to month. No contracts, only results.</p>
          </div>
          <div className="flex flex-col justify-between rounded p-5 w-64 mx-auto lg:mx-3 mt-10 lg:mt-auto" style={{backgroundColor: "#9e9e9e", minWidth: "275px"}}>
            <h5 className="uppercase mb-5">Change Programs</h5>
            <p className="text-white">All of our training programs inside the app are month to month. No contracts, only results.</p>
          </div>
        </div>
      </div>
    </div>

      <div className="py-20">
        <div className="container mx-auto">
          <h3 className="text-center uppercase text-3xl mb-10">
            Questions and <span className="rustico">Answers</span>
          </h3>
          {program.questions.map((q, count) => (
          <div className="flex flex-col lg:flex-row justify-center"  key={count}>
            <div className="w-full lg:w-3/4 border-b border-gray-400  bg-white p-4 flex flex-col justify-between leading-normal">
              <div className="py-6">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {q.question}
                </div>
                <p className="text-gray-700 text-base">
                  {q.answer}
                </p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>

      <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-10">
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
  query ProgramById($uid: String!) {
    allSanityProgram(filter: {id: {eq: $uid}}) {
      nodes {
        id
        title
        subtitle
        slug {
          current
        }
        colorOne {
          hex
        }
        colorTwo {
          hex
        }
        heroImage {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        testimonials {
          quote
          member
          memberImage {
            asset {
              url
            }
          }
          location
        }
        questions {
          question
          answer
        }
      }
    }
  }
`
