import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import HomeTabs from "../components/HomeTabs"
import SEO from '../components/seo'

import circles from '../assets/circles.svg'
import logo1 from '../assets/logo-1.svg'
import logo2 from '../assets/logo-2.svg'
import logo3 from '../assets/logo-3.svg'
import logo4 from '../assets/logo-4.svg'
import logo5 from '../assets/menshealth.png'


const Index = ({ data }) => {
  const home = data.allSanityHome.nodes[0]

  const programRow = React.createRef();
  const programDiv = React.createRef();

  const clickLeft = () => {
    programRow.current.scrollLeft -= programDiv.current.offsetWidth;
  }

  const clickRight = () => {
    programRow.current.scrollLeft += programDiv.current.offsetWidth;
  }
  
  return (
    <Layout>
      <SEO title="Fitness Culture" />
      <BackgroundImage
      className={'flex flex-col justify-center items-center bg-cover bg-top p-5'}
      style={{minHeight: "60vh"}}
      fluid={home.heroImage.asset.fluid}
      >
        <span className="hidden lg:flex rounded-full bg-black uppercase px-2 py-1 text-xs text-white">Your #1 Fitness App</span>
        <h1 className="uppercase text-center text-white text-4xl lg:text-6xl mt-4" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)"}}>
          {home.title}
        </h1>
        <p className="text-center text-white mt-5 lg:w-1/2 text-xl w:1-2 hidden lg:block" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5"}}>
          {home.subtitle}
        </p>
        <div className="py-10">
          <Link to={home.heroLink} className="btn-lg text-white rounded-full shadow-lg" style={{backgroundColor: home.heroColor.hex}}>
            {home.heroCta}
          </Link>
        </div>
      </BackgroundImage>
      <div className="w-full bg-gray-100 pt-4 pb-2">
        <div className="container mx-auto">
          <p className="text-black uppercase text-xs text-center pt-2">Programs Engineered by Experts Featured in:</p>
          <div className="flex flex-row justify-between items-center h-full overflow-scroll lg:overflow-hidden">
            <img src={ logo1 } width="100px" className="px-2" />
            <img src={ logo2 } width="100px" className="px-2" />
            <img src={ logo4 } width="100px" className="px-2" />
            <img src={ logo3 } width="100px" className="px-2" />
            <img src={ logo5 } width="100px" className="px-2" />
          </div>
        </div>
      </div>



      <div className="w-full py-10 lg:py-20 relative">
        <div className="container mx-auto">
          <HomeTabs program={home} />
        </div>
        <img src={ circles } width="250px" className="hidden lg:block absolute left-0" style={{ bottom: "-100px", transform: "scaleX(-1)"}} />
      </div>


      <div className="py-20 bg-gray-100">
        <div className="container lg:mx-auto px-5">
          <h3 className="uppercase text-3xl pb-5 lg:pb-10">
            Our Programs
          </h3>
        </div>
        <div className="scroll-btns relative h-full">
          <div ref={programRow} className="flex flex-row flex-nowrap items-stretch h-full overflow-x-scroll lg:overflow-x-hidden scroll-x-mandatory">

            {
              home.programs.map((program,i) => {
                return (
                  <div ref={programDiv} key={i} className="w-full md:w-1/2 lg:w-1/4 mx-3 rounded bg-gray-900 mt-10 flex flex-col items-stretch snap-align-center" style={{minWidth: "300px"}}>
                    <Img
                        className="block h-64 w-full bg-cover bg-center rounded-t text-center overflow-hidden"
                        fluid={program.heroImage.asset.fluid}
                      
                    />
                    <div className="flex flex-col justify-between items-stretch flex-grow">
                      <div className="p-5">
                        <h4 className="uppercase text-2xl" style={{ color: program.colorTwo.hex }}>{program.title}</h4>
                        <p className="text-white text-sm mt-2">{program.subtitle}</p>
                      </div>
                      <div className="p-5">
                        <Link to={"/programs/" + program.gender + "/" + program.slug.current} className="uppercase font-bold text-xs text-white border border-white rounded-full py-2 px-4">See {program.title}</Link>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        <button className="hidden lg:block absolute scroll-btn scroll-left shadow-lg" onClick={clickLeft}><svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 172 172" style={{fill: "#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#666666"><g id="surface1"><path d="M110.55031,10.535c-0.90031,0 -1.74688,0.36281 -2.39188,0.99438l-72.52219,71.94437c-1.35719,1.34375 -1.37062,3.52063 -0.02687,4.86438l71.94437,72.53562c1.34375,1.34375 3.52063,1.35719 4.86438,0.01344l20.72062,-20.54594c1.35719,-1.34375 1.37063,-3.52062 0.02688,-4.87781l-48.96625,-49.35594l49.36937,-48.96625c1.34375,-1.34375 1.35719,-3.52062 0.01344,-4.86437l-20.54594,-20.72063c-0.65844,-0.67187 -1.55875,-1.03469 -2.48594,-1.02125z"></path></g></g></g></svg></button>
        <button className="hidden lg:block absolute scroll-btn scroll-right shadow-lg" onClick={clickRight}><svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 172 172" style={{fill: "#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#666666"><g id="surface1"><path d="M62.39031,10.32c-0.90031,0.01344 -1.74688,0.36281 -2.39188,0.99438l-20.72062,20.55937c-1.34375,1.34375 -1.35719,3.52063 -0.02688,4.86438l48.96625,49.36937l-49.35594,48.96625c-1.35719,1.34375 -1.37062,3.52063 -0.02687,4.86438l20.55937,20.72062c1.34375,1.35719 3.52063,1.37063 4.86438,0.02688l72.53562,-71.94438c1.34375,-1.34375 1.35719,-3.52062 0.01344,-4.87781l-71.93094,-72.52219c-0.65844,-0.67187 -1.55875,-1.03469 -2.48594,-1.02125z"></path></g></g></g></svg></button>
        </div>
      </div>


    <div className="pt-10 pb-20 lg:py-20 mx-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-start items-center mt-10 h-full">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 pt-5 lg:p-10 mx-auto">
            <h6 className="uppercase mt-6 text-left mb-2 text-gray-400">See the Savings</h6>
            <h2 className="text-lg lg:text-3xl uppercase">
              {home.personalTrainerTitle}
            </h2>
            <p className="mt-5">{home.personalTrainerDescription}</p>
            <div className="mt-10">
              <Link to="/programs" className="btn text-blue-500 border border-blue-500 rounded-full">
                See Programs
              </Link>
            </div>
          </div>
          <Img
            className="order-1 lg:order-2 w-full lg:w-1/2 p-5 bg-white" 
            fluid={home.personalTrainerImage.asset.fluid}/>
        </div>
      </div>
    </div>


    <div className="py-20 bg-gray-900">
      <div className="container px-5 lg:mx-auto">
        <h3 className="uppercase text-white text-3xl pb-5 lg:pb-10">
          Join the <span className="px-2 bg-blue-500">#FitCult</span> Family
        </h3>
      </div>
      <div className="flex flex-row overflow-scroll lg:overflow-hidden scroll-x-mandatory">
        {home.testimonials.map((i, count) => (
          <div key={count} className="flex flex-col justify-between rounded p-5 w-64 mx-3 bg-gray-600 snap-align-center" style={{ minWidth: "275px"}}>
            <p className="text-white text-xs italic">"{i.quote}"</p>
            <div className="flex flex-row items-center mt-6">
              <Img fixed={ i.memberImage.asset.fixed} alt="member photo" width="50px" height="50px" className="rounded-full" />
              <div className="pl-2">
                <h6 className="uppercase">{i.member}</h6>
                <p className="text-black text-xs">{i.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container mx-auto mt-10 text-center">
        <Link to="/programs" className="uppercase font-bold text-xs text-white border border-white rounded-full py-2 px-4">Join the Family</Link>
      </div>
    </div>

    
    <div className="pt-10 pb-20 lg:py-20 mx-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-start items-center mt-10 h-full">
          <Img
            className="w-full lg:w-1/2 shadow-lg" 
            fluid={home.aboutImage.asset.fluid}/>
          <div className="w-full lg:w-1/2 pt-5 lg:p-10 mx-auto">
            <h6 className="uppercase mt-6 text-left mb-2 text-gray-400">About Us</h6>
            <h2 className="text-lg lg:text-3xl uppercase">
              {home.aboutTitle}
            </h2>
            <p className="mt-5">{home.aboutDescription}</p>
            <div className="mt-10">
              <Link to="/about" className="btn text-blue-500 border border-blue-500 rounded-full">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </Layout>

  )
}

export default Index

export const pageQuery = graphql`
  query IndexPage{
    allSanityHome {
      nodes {
        id
        title
        subtitle
        heroCta
        heroLink
        heroColor {
          hex
        }
        heroImage {
          asset {
            fluid(maxWidth: 1425) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
        }
        trainingTitle
        trainingDescription
        trainingImage {
          asset {
            fluid(maxWidth: 1425) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
        }
        nutritionTitle
        nutritionDescription
        nutritionImage {
          asset {
            fluid(maxWidth: 1425) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
        }
        mobilityTitle
        mobilityDescription
        mobilityImage {
          asset {
            fluid(maxWidth: 1425) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
        }
        aboutTitle
        aboutDescription
        aboutImage {
          asset {
            fluid(maxWidth: 1425) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
        }
        personalTrainerTitle
        personalTrainerDescription
        personalTrainerImage {
          asset {
            fluid(maxWidth: 1425) {
              ...GatsbySanityImageFluid_withWebp
            }
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
        programs {
          active
          title
          subtitle
          gender
          slug {
            current
          }
          heroImage {
            asset {
              fluid(maxWidth: 1000) {
                ...GatsbySanityImageFluid_withWebp
              }
            }
          }
          colorOne {
            hex
          }
          colorTwo {
            hex
          }
        }
      }
    }

  }
`
