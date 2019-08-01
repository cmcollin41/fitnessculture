import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProgramTabs from "../components/ProgramTabs"
import Img from 'gatsby-image'

// Images
import iphone from '../../static/iphone.png'
import circles from '../../static/circles.svg'
import square from '../../static/square-circles.svg'
import logo1 from '../../static/logo-1.svg'
import logo2 from '../../static/logo-2.svg'
import logo3 from '../../static/logo-3.svg'
import logo4 from '../../static/logo-4.svg'
import logo5 from '../../static/menshealth.png'

const Program = ({ data }) => {
  const program = data.allSanityProgram.nodes[0]
  return (
    <Layout>
       <SEO title={program.title} description={program.subtitle} image={program.heroImage.asset.url} />
      <div className="h-2 w-full" style={{backgroundImage: 'linear-gradient(to right, ' + program.colorOne.hex + ',' + program.colorTwo.hex + ')'}}>
      </div>
      <div className="py-20 relative">
        <div className="absolute h-full bottom-0 left-0 overflow-x-hidden" style={{zIndex: "-10"}}>
          <img src={circles} alt="circles" width="200px" height="100%" style={{transform: "scale(-1)"}}/>
        </div>
        <div className="hidden lg:block absolute h-full" style={{transform: "translate(-35%, 50%)"}}>
          <h2 className="uppercase text-gray-300 text-3xl" style={{transform: "rotate(90deg)"}}>Fitness Program</h2>
        </div>
        <div className="container mx-auto px-5 pb-5 pt-3">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="uppercase text-4xl lg:text-5xl leading-none">
                {program.title}
              </h1>
              <p className="text-xl mt-5" style={{ maxWidth: "500px" }}>
                {program.subtitle}
              </p>
              <div className="mt-10 mb-12 flex flex-row flex-wrap lg:justify-start justify-center">
                <div className="w-32 text-center flex flex-col p-2 angle-border">
                  <Img className="mx-auto" alt={program.attributes[0].title} fixed={program.attributes[0].icon.asset.fixed} />
                  <p className="uppercase text-xs">{program.attributes[0].title}</p>
                </div>
                {/* <div className="w-32 text-center flex flex-col p-2 angle-border-2 border-b sm:border-b-0 border-black">
                  <h6 className="uppercase text-2xl">30-90</h6>
                  <p className="uppercase text-xs">Minutes/Day</p>
                </div> */}
                <div className="hidden w-32 text-center lg:flex flex-col p-2 angle-border">
                  <h6 className="uppercase mx-auto"><img width="50px" alt="full gym icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgIiBkPSJNIDYuODEyNSAzIEMgNi4zMzU5MzggMy4wODk4NDQgNS45OTIxODggMy41MTE3MTkgNiA0IEwgNiA2IEwgMCA2IEwgMCA4IEwgNiA4IEwgNiAxMCBDIDYgMTAuNTUwNzgxIDYuNDQ5MjE5IDExIDcgMTEgTCAxMCAxMSBDIDEwLjU1MDc4MSAxMSAxMSAxMC41NTA3ODEgMTEgMTAgTCAxMSA0IEMgMTEgMy40NDkyMTkgMTAuNTUwNzgxIDMgMTAgMyBMIDcgMyBDIDYuOTY4NzUgMyA2LjkzNzUgMyA2LjkwNjI1IDMgQyA2Ljg3NSAzIDYuODQzNzUgMyA2LjgxMjUgMyBaIE0gMzkuODEyNSAzIEMgMzkuMzM1OTM4IDMuMDg5ODQ0IDM4Ljk5MjE4OCAzLjUxMTcxOSAzOSA0IEwgMzkgMTAgQyAzOSAxMC41NTA3ODEgMzkuNDQ5MjE5IDExIDQwIDExIEwgNDMgMTEgQyA0My41NTA3ODEgMTEgNDQgMTAuNTUwNzgxIDQ0IDEwIEwgNDQgOCBMIDUwIDggTCA1MCA2IEwgNDQgNiBMIDQ0IDQgQyA0NCAzLjQ0OTIxOSA0My41NTA3ODEgMyA0MyAzIEwgNDAgMyBDIDM5Ljk2ODc1IDMgMzkuOTM3NSAzIDM5LjkwNjI1IDMgQyAzOS44NzUgMyAzOS44NDM3NSAzIDM5LjgxMjUgMyBaIE0gOCA1IEwgOSA1IEwgOSA5IEwgOCA5IFogTSA0MSA1IEwgNDIgNSBMIDQyIDkgTCA0MSA5IFogTSAxMiA2IEwgMTIgOCBMIDM4IDggTCAzOCA2IFogTSA2LjgxMjUgMTggQyA2LjMzNTkzOCAxOC4wODk4NDQgNS45OTIxODggMTguNTExNzE5IDYgMTkgTCA2IDIxIEwgMCAyMSBMIDAgMjMgTCA2IDIzIEwgNiAyNSBDIDYgMjUuNTUwNzgxIDYuNDQ5MjE5IDI2IDcgMjYgTCAxMCAyNiBDIDEwLjU1MDc4MSAyNiAxMSAyNS41NTA3ODEgMTEgMjUgTCAxMSAxOSBDIDExIDE4LjQ0OTIxOSAxMC41NTA3ODEgMTggMTAgMTggTCA3IDE4IEMgNi45Njg3NSAxOCA2LjkzNzUgMTggNi45MDYyNSAxOCBDIDYuODc1IDE4IDYuODQzNzUgMTggNi44MTI1IDE4IFogTSAzOS44MTI1IDE4IEMgMzkuMzM1OTM4IDE4LjA4OTg0NCAzOC45OTIxODggMTguNTExNzE5IDM5IDE5IEwgMzkgMjUgQyAzOSAyNS41NTA3ODEgMzkuNDQ5MjE5IDI2IDQwIDI2IEwgNDMgMjYgQyA0My41NTA3ODEgMjYgNDQgMjUuNTUwNzgxIDQ0IDI1IEwgNDQgMjMgTCA1MCAyMyBMIDUwIDIxIEwgNDQgMjEgTCA0NCAxOSBDIDQ0IDE4LjQ0OTIxOSA0My41NTA3ODEgMTggNDMgMTggTCA0MCAxOCBDIDM5Ljk2ODc1IDE4IDM5LjkzNzUgMTggMzkuOTA2MjUgMTggQyAzOS44NzUgMTggMzkuODQzNzUgMTggMzkuODEyNSAxOCBaIE0gOCAyMCBMIDkgMjAgTCA5IDI0IEwgOCAyNCBaIE0gNDEgMjAgTCA0MiAyMCBMIDQyIDI0IEwgNDEgMjQgWiBNIDEyIDIxIEwgMTIgMjMgQyAxMy4yNzczNDQgMjMgMTQuMjUzOTA2IDIzLjQyMTg3NSAxNS4yNSAyMy45MDYyNSBDIDE2LjI0NjA5NCAyNC4zOTA2MjUgMTcuMjYxNzE5IDI1IDE4LjU5Mzc1IDI1IEMgMTkuOTI1NzgxIDI1IDIxLjEzNjcxOSAyNC40MDYyNSAyMi4yNSAyMy45MDYyNSBDIDIzLjM2MzI4MSAyMy40MDYyNSAyNC40MDIzNDQgMjMgMjUgMjMgQyAyNS41OTc2NTYgMjMgMjYuNzA3MDMxIDIzLjQwNjI1IDI3Ljg0Mzc1IDIzLjkwNjI1IEMgMjguOTgwNDY5IDI0LjQwNjI1IDMwLjEzNjcxOSAyNSAzMS40MDYyNSAyNSBDIDMyLjcwNzAzMSAyNSAzMy43MTA5MzggMjQuMzkwNjI1IDM0LjcxODc1IDIzLjkwNjI1IEMgMzUuNzI2NTYzIDIzLjQyMTg3NSAzNi43MjI2NTYgMjMgMzggMjMgTCAzOCAyMSBDIDM2LjI3NzM0NCAyMSAzNC45MTQwNjMgMjEuNTc4MTI1IDMzLjg0Mzc1IDIyLjA5Mzc1IEMgMzIuNzczNDM4IDIyLjYwOTM3NSAzMi4wMDM5MDYgMjMgMzEuNDA2MjUgMjMgQyAzMC44NzUgMjMgMjkuNzY1NjI1IDIyLjU5Mzc1IDI4LjYyNSAyMi4wOTM3NSBDIDI3LjQ4NDM3NSAyMS41OTM3NSAyNi4zMDA3ODEgMjEgMjUgMjEgQyAyMy42OTkyMTkgMjEgMjIuNTQ2ODc1IDIxLjU5Mzc1IDIxLjQzNzUgMjIuMDkzNzUgQyAyMC4zMjgxMjUgMjIuNTkzNzUgMTkuMjYxNzE5IDIzIDE4LjU5Mzc1IDIzIEMgMTcuOTI1NzgxIDIzIDE3LjE3OTY4OCAyMi42MDkzNzUgMTYuMTI1IDIyLjA5Mzc1IEMgMTUuMDcwMzEzIDIxLjU3ODEyNSAxMy43MjI2NTYgMjEgMTIgMjEgWiBNIDE5IDMyIEMgMTYuMjUzOTA2IDMyIDE0IDM0LjI1MzkwNiAxNCAzNyBMIDE0IDM4IEwgMTIgMzggTCAxMiA0MCBMIDE0IDQwIEwgMTQgNDEgQyAxNCA0My43NDYwOTQgMTYuMjUzOTA2IDQ2IDE5IDQ2IEwgMzEgNDYgQyAzMy43NDYwOTQgNDYgMzYgNDMuNzQ2MDk0IDM2IDQxIEwgMzYgNDAgTCAzOCA0MCBMIDM4IDM4IEwgMzYgMzggTCAzNiAzNyBDIDM2IDM0LjI1MzkwNiAzMy43NDYwOTQgMzIgMzEgMzIgWiBNIDE5IDM0IEwgMzEgMzQgQyAzMi42NTYyNSAzNCAzNCAzNS4zNDM3NSAzNCAzNyBMIDM0IDQxIEMgMzQgNDIuNjU2MjUgMzIuNjU2MjUgNDQgMzEgNDQgTCAzMCA0NCBMIDMwIDM1IEwgMjggMzUgTCAyOCA0NCBMIDIyIDQ0IEwgMjIgMzUgTCAyMCAzNSBMIDIwIDQ0IEwgMTkgNDQgQyAxNy4zNDM3NSA0NCAxNiA0Mi42NTYyNSAxNiA0MSBMIDE2IDM3IEMgMTYgMzUuMzQzNzUgMTcuMzQzNzUgMzQgMTkgMzQgWiBNIDYuODEyNSAzNSBDIDYuMzM1OTM4IDM1LjA4OTg0NCA1Ljk5MjE4OCAzNS41MTE3MTkgNiAzNiBMIDYgMzggTCAwIDM4IEwgMCA0MCBMIDYgNDAgTCA2IDQyIEMgNiA0Mi41NTA3ODEgNi40NDkyMTkgNDMgNyA0MyBMIDEwIDQzIEMgMTAuNTUwNzgxIDQzIDExIDQyLjU1MDc4MSAxMSA0MiBMIDExIDM2IEMgMTEgMzUuNDQ5MjE5IDEwLjU1MDc4MSAzNSAxMCAzNSBMIDcgMzUgQyA2Ljk2ODc1IDM1IDYuOTM3NSAzNSA2LjkwNjI1IDM1IEMgNi44NzUgMzUgNi44NDM3NSAzNSA2LjgxMjUgMzUgWiBNIDM5LjgxMjUgMzUgQyAzOS4zMzU5MzggMzUuMDg5ODQ0IDM4Ljk5MjE4OCAzNS41MTE3MTkgMzkgMzYgTCAzOSA0MiBDIDM5IDQyLjU1MDc4MSAzOS40NDkyMTkgNDMgNDAgNDMgTCA0MyA0MyBDIDQzLjU1MDc4MSA0MyA0NCA0Mi41NTA3ODEgNDQgNDIgTCA0NCA0MCBMIDUwIDQwIEwgNTAgMzggTCA0NCAzOCBMIDQ0IDM2IEMgNDQgMzUuNDQ5MjE5IDQzLjU1MDc4MSAzNSA0MyAzNSBMIDQwIDM1IEMgMzkuOTY4NzUgMzUgMzkuOTM3NSAzNSAzOS45MDYyNSAzNSBDIDM5Ljg3NSAzNSAzOS44NDM3NSAzNSAzOS44MTI1IDM1IFogTSA4IDM3IEwgOSAzNyBMIDkgNDEgTCA4IDQxIFogTSA0MSAzNyBMIDQyIDM3IEwgNDIgNDEgTCA0MSA0MSBaICI+PC9wYXRoPjwvZz48L3N2Zz4="/></h6>
                  <p className="uppercase text-xs">Full Gym</p>
                </div>
                <div className="w-32 text-center flex flex-col p-2">
                  <Img className="mx-auto w-16" alt={program.benefits[0].title} fixed={program.benefits[0].icon.asset.fixed} />
                  <p className="uppercase text-xs">{program.benefits[0].title}</p>
                </div>
              </div>
              <div className="mt-10 flex flex-row flex-wrap items-center">
                <a href={program.premiumCta} className="btn-lg text-white rounded-full shadow-md" style={{backgroundImage: 'linear-gradient(to right, ' + program.colorOne.hex + ',' + program.colorTwo.hex + ')'}}>
                  Start Program
                </a>
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
            <img src={ logo1 } alt="social proof logo 1" width="100px" className="px-2" />
            <img src={ logo2 } alt="social proof logo 2" width="100px" className="px-2" />
            <img src={ logo4 } alt="social proof logo 3" width="100px" className="px-2" />
            <img src={ logo3 } alt="social proof logo 4" width="100px" className="px-2" />
            <img src={ logo5 } alt="social proof logo 5" width="100px" className="px-2" />
          </div>
        </div>
      </div>
    </div>

    <div className="w-full py-10 lg:py-20 sticky top-0 lg:top-auto lg:relative">
      <div className="container mx-auto">
        <ProgramTabs program={program}/>
      </div>
      <img src={ circles } width="250px" className="hidden lg:block absolute left-0" style={{ bottom: "0px", transform: "scaleX(-1)", zIndex: "-10"}} />
    </div>


    <div className="py-20 bg-grey-100 relative">

      <div className="container px-5 lg:mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full lg:w-1/2 text-right">
            <img src={ iphone }className="mx-auto lg:ml-auto" width="300px" />
          </div>
          <div className="w-full lg:w-1/2 px-5 lg:px-20 personas">
            <h3 className="uppercase text-3xl pb-5">
             Personal Training at your fingertips
            </h3>
            <p>This is a section about how you get full access to the app! Seriously download this mfer and get ripped! Do it! Just do it!</p>
            <div className="mt-10">
              <a href={program.premiumCta} className="uppercase font-bold border rounded-full py-2 px-4" style={{borderColor: program.colorOne.hex, color: program.colorOne.hex }}>Get {program.title}</a>
            </div>
          </div>
        </div>
      </div>
      <img src={ circles } width="250px" height="100%" className="block absolute right-0 bottom-0" style={{ zIndex: "-10"}} />
    </div>
    <div className="py-20 bg-gray-900">
      <div className="container px-5 lg:mx-auto">
        <h3 className="uppercase text-white text-3xl pb-5 lg:pb-10">
          Join the <span className="px-2" style={{backgroundImage: 'linear-gradient(to right, ' + program.colorOne.hex + ',' + program.colorTwo.hex + ')'}}>#FitCult</span> Family
        </h3>
      </div>
      <div className="flex flex-row overflow-scroll lg:overflow-hidden scroll-x-mandatory">
        {program.testimonials.map((i, count) => (
          <div key={count} className="flex flex-col justify-between rounded p-5 w-64 mx-3 bg-gray-600 snap-align-center" style={{minWidth: "275px"}}>
            <p className="text-white text-xs italic">"{i.quote}"</p>
            <div className="flex flex-row items-center mt-6">
              <Img fixed={i.memberImage.asset.fixed} alt={i.member} width="50px" height="50px" className="rounded-full" />
              <div className="pl-2">
                <h6 className="uppercase">{i.member}</h6>
                <p className="text-black text-xs">{i.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container mx-auto mt-10 text-center">
        <a href={program.premiumCta} className="uppercase font-bold text-white border border-white rounded-full py-2 px-4">Join the Family</a>
      </div>
    </div>

    <div className="my-20 relative">
      <img src={square} width="100px" height="100%" className="absolute" style={{top: "-25px", zIndex: "-1"}} />
      <div className="flex flex-col lg:flex-row justify-center items-center mx-5">
        <div className="w-full md:w-1/2 lg:w-1/4 mt:auto">
          <div className="rounded overflow-hidden shadow-lg bg-white text-black flex flex-col justify-between">
            <div className="h-2 w-full" style={{backgroundImage: 'linear-gradient(to right, ' + program.colorOne.hex + ',' + program.colorTwo.hex + ')'}}>
            </div>
            <div className="p-4 text-center mx-auto">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 uppercase">Basic</span>
              <h6 className="text-black text-base text-6xl mt-5">$39</h6>
              <span className="text-black text-sm mt-5 uppercase">per month</span>
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
              <a href={program.basicCta} className="uppercase font-bold text-white rounded-full px-4 py-2" style={{backgroundImage: 'linear-gradient(to right, ' + program.colorOne.hex + ',' + program.colorTwo.hex + ')'}}>Start Program</a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mt-20 lg:mt-auto">
          <div className="text-black rounded overflow-hidden shadow-lg bg-white flex flex-col justify-between">
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
              <a href={program.premiumCta} className="uppercase font-bold text-white rounded-full px-4 py-2" style={{backgroundImage: 'linear-gradient(to right, ' + program.colorOne.hex + ',' + program.colorTwo.hex + ')'}}>Start Program</a>
            </div>
          </div>
        </div>
      </div>
      <img src={ circles } width="250px" height="100%" className="block absolute right-0" style={{ bottom: "-150px", zIndex: "-10"}} />
    </div>

    <div className="py-20 bg-gray-900">
      <div className="container px-5 lg:mx-auto">
        <h3 className="uppercase text-white text-left lg:text-center text-3xl pb-5 lg:pb-10">
          Joining is <span className="px-2" style={{backgroundImage: 'linear-gradient(to right, ' + program.colorOne.hex + ',' + program.colorTwo.hex + ')'}}>Stress</span> Free
        </h3>
      </div>
      <div className="container lg:mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center h-full">
          <div className="flex flex-col justify-between items-stretch flex-grow rounded p-5 w-64 lg:mx-3 mt-10 lg:mt-auto bg-gray-600" style={{minWidth: "275px"}}>
            <h5 className="uppercase mb-5">No Contracts</h5>
            <p className="text-white">No miniumum length or contract. All training programs are month to month inside of Fitness Culture.</p>
          </div>
          <div className="flex flex-col justify-between items-stretch flex-grow rounded p-5 w-64 mx-auto lg:mx-3 mt-10 lg:mt-auto bg-gray-600" style={{minWidth: "275px"}}>
            <h5 className="uppercase mb-5">Cancel Anytime</h5>
            <p className="text-white">If you ever have to leave us for any reason, stopping or pausing your membership is as easy as emailing support@fitnessculture.com</p>
          </div>
          <div className="flex flex-col justify-between items-stretch flex-grow rounded p-5 w-64 mx-auto lg:mx-3 mt-10 lg:mt-auto bg-gray-600" style={{minWidth: "275px"}}>
            <h5 className="uppercase mb-5">Change Programs Anytime</h5>
            <p className="text-white">You goals change and so should your program. You can switch to any of our programs at any time.</p>
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
        basicCta
        premiumCta
        colorOne {
          hex
        }
        colorTwo {
          hex
        }
        heroImage {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid_withWebp
            }
            url
          }
        }
        testimonials {
          quote
          member
          memberImage {
            asset {
              fixed(width: 50) {
                ...GatsbySanityImageFixed_withWebp
              }
            }
          }
          location
        }
        questions {
          question
          answer
        }
        benefits {
          title
          description
          icon {
            asset {
              fixed(width: 50) {
                ...GatsbySanityImageFixed_withWebp
              }
            }
          }
        }
        personas {
          title
          description
        }
        exercises {
          title
          description
          icon {
            asset {
              fixed(width: 50) {
                ...GatsbySanityImageFixed_withWebp
              }
            }
          }
        }
        techniques {
          title
          description
        }
        attributes {
          title
          description
          icon {
            asset {
              fixed(width: 50) {
                ...GatsbySanityImageFixed_withWebp
              }
            }
          }
        }
        features {
          title
          description
        }
      }
    }
  }
`
