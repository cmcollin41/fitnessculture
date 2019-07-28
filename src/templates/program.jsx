import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProgramTabs from "../components/ProgramTabs"
import Img from 'gatsby-image'

// Images
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
       <SEO title={program.title} description={program.subtitle} image={program.heroImage.asset.url} keywords="" />
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
        <div className="container mx-auto p-5">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="uppercase text-5xl leading-none">
                {program.title}
              </h1>
              <p className="text-xl mt-5" style={{ maxWidth: "500px" }}>
                {program.subtitle}
              </p>
              <div className="mt-10 mb-12 flex flex-row">
                <div className="w-32 text-center flex flex-col p-2 angle-border">
                  <h6 className="uppercase text-2xl">3</h6>
                  <p className="uppercase text-xs">Days per Week</p>
                </div>
                <div className="w-32 text-center flex flex-col p-2 angle-border">
                  <h6 className="uppercase text-2xl">30-90</h6>
                  <p className="uppercase text-xs">Minutes per Day</p>
                </div>
                <div className="w-32 text-center flex flex-col p-2">
                  <h6 className="uppercase mx-auto"><img width="30px" alt="benefit icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgIiBkPSJNIDE2LjUgMCBDIDE0LjgzNTkzOCAwIDEzLjQyMTg3NSAwLjkzNzUgMTIuMzc1IDEuNzgxMjUgQyAxMS45NzI2NTYgMi4xMDU0NjkgMTEuNjI1IDIuNDEwMTU2IDExLjM0Mzc1IDIuNjg3NSBMIDguODc1IDAuMjE4NzUgTCA4LjE4NzUgMC45Mzc1IEwgNy4zNDM3NSAxLjc4MTI1IEMgNi42NzU3ODEgMi40NDkyMTkgNi43ODEyNSAzLjE2MDE1NiA2Ljc1IDMuNTkzNzUgQyA2LjcxODc1IDQuMDI3MzQ0IDYuNjYwMTU2IDQuMjE0ODQ0IDYuNTMxMjUgNC4zNDM3NSBDIDYuNDAyMzQ0IDQuNDcyNjU2IDUuNjk5MjE5IDQuODI4MTI1IDQuNzUgNS4zMTI1IEMgMy44MDA3ODEgNS43OTY4NzUgMi42Mjg5MDYgNi41IDEuNDY4NzUgNy42NTYyNSBDIC0wLjMwNDY4OCA5LjQzMzU5NCAtMC4zMDQ2ODggMTIuMzIwMzEzIDEuNDY4NzUgMTQuMDkzNzUgQyAzLjI0MjE4OCAxNS44NjcxODggNi4xMjg5MDYgMTUuODY3MTg4IDcuOTA2MjUgMTQuMDkzNzUgQyA5LjA2NjQwNiAxMi45MzM1OTQgOS43ODkwNjMgMTEuNzc3MzQ0IDEwLjI4MTI1IDEwLjg0Mzc1IEMgMTAuNzczNDM4IDkuOTEwMTU2IDExLjEyNSA5LjIxODc1IDExLjI4MTI1IDkuMDYyNSBDIDExLjQzNzUgOC45MDYyNSAxMS42NDQ1MzEgOC44MjgxMjUgMTIuMDYyNSA4Ljc4MTI1IEMgMTIuMjczNDM4IDguNzU3ODEzIDEyLjUzMTI1IDguNzM4MjgxIDEyLjgxMjUgOC42ODc1IEMgMTMuMDkzNzUgOC42MzY3MTkgMTMuNDQ1MzEzIDguNTU0Njg4IDEzLjc4MTI1IDguMjE4NzUgTCAxNC42MjUgNy4zNzUgTCAxNS4zNDM3NSA2LjY4NzUgTCAxMi43ODEyNSA0LjEyNSBDIDEzLjAxNTYyNSAzLjg5NDUzMSAxMy4yODEyNSAzLjYyMTA5NCAxMy42MjUgMy4zNDM3NSBDIDE0LjUwNzgxMyAyLjYzMjgxMyAxNS42NjQwNjMgMiAxNi41IDIgQyAxNy44OTQ1MzEgMiAxOSAzLjEyMTA5NCAxOSA0LjUgQyAxOSA3LjQwNjI1IDE3LjkzNzUgOS42NDQ1MzEgMTYuMjUgMTEuNzUgQyAxNC41NjI1IDEzLjg1NTQ2OSAxMi4yMzA0NjkgMTUuNzY1NjI1IDkuODQzNzUgMTcuODEyNSBDIDUuMDcwMzEzIDIxLjkxMDE1NiAwIDI2LjcyNjU2MyAwIDM1IEMgMCAzOS41NzAzMTMgMS44NDM3NSA0My4zOTQ1MzEgNC45MDYyNSA0NiBDIDcuOTY4NzUgNDguNjA1NDY5IDEyLjIxMDkzOCA1MCAxNyA1MCBDIDE5LjQzMzU5NCA1MCAyMi4yNTc4MTMgNDkuNDgwNDY5IDI1IDQ4LjQ2ODc1IEMgMjcuNzQyMTg4IDQ5LjQ4MDQ2OSAzMC41NjY0MDYgNTAgMzMgNTAgQyAzNy43ODkwNjMgNTAgNDIuMDMxMjUgNDguNjA1NDY5IDQ1LjA5Mzc1IDQ2IEMgNDguMTU2MjUgNDMuMzk0NTMxIDUwIDM5LjU3MDMxMyA1MCAzNSBDIDUwIDI2LjcyNjU2MyA0NC45Mjk2ODggMjEuOTEwMTU2IDQwLjE1NjI1IDE3LjgxMjUgQyAzNy43Njk1MzEgMTUuNzY1NjI1IDM1LjQzNzUgMTMuODU1NDY5IDMzLjc1IDExLjc1IEMgMzIuMDYyNSA5LjY0NDUzMSAzMSA3LjQwNjI1IDMxIDQuNSBDIDMxIDMuMTIxMDk0IDMyLjEwNTQ2OSAyIDMzLjUgMiBDIDM0LjMzNTkzOCAyIDM1LjQ5MjE4OCAyLjYzMjgxMyAzNi4zNzUgMy4zNDM3NSBDIDM2LjcxODc1IDMuNjIxMDk0IDM2Ljk4NDM3NSAzLjg5NDUzMSAzNy4yMTg3NSA0LjEyNSBMIDM0LjY1NjI1IDYuNjg3NSBMIDM1LjM3NSA3LjM3NSBMIDM2LjIxODc1IDguMjE4NzUgQyAzNi41NTQ2ODggOC41NTQ2ODggMzYuOTA2MjUgOC42MzY3MTkgMzcuMTg3NSA4LjY4NzUgQyAzNy40Njg3NSA4LjczODI4MSAzNy43MjY1NjMgOC43NTc4MTMgMzcuOTM3NSA4Ljc4MTI1IEMgMzguMzU1NDY5IDguODI4MTI1IDM4LjU2MjUgOC45MDYyNSAzOC43MTg3NSA5LjA2MjUgQyAzOC44NzUgOS4yMTg3NSAzOS4yMjY1NjMgOS45MTAxNTYgMzkuNzE4NzUgMTAuODQzNzUgQyA0MC4yMTA5MzggMTEuNzc3MzQ0IDQwLjkzMzU5NCAxMi45MzM1OTQgNDIuMDkzNzUgMTQuMDkzNzUgQyA0My44NzEwOTQgMTUuODY3MTg4IDQ2Ljc1NzgxMyAxNS44NjcxODggNDguNTMxMjUgMTQuMDkzNzUgQyA1MC4zMDQ2ODggMTIuMzIwMzEzIDUwLjMwNDY4OCA5LjQzMzU5NCA0OC41MzEyNSA3LjY1NjI1IEMgNDcuMzcxMDk0IDYuNSA0Ni4xOTkyMTkgNS43OTY4NzUgNDUuMjUgNS4zMTI1IEMgNDQuMzAwNzgxIDQuODI4MTI1IDQzLjU5NzY1NiA0LjQ3MjY1NiA0My40Njg3NSA0LjM0Mzc1IEMgNDMuMzM5ODQ0IDQuMjE0ODQ0IDQzLjI4MTI1IDQuMDI3MzQ0IDQzLjI1IDMuNTkzNzUgQyA0My4yMTg3NSAzLjE2MDE1NiA0My4zMjQyMTkgMi40NDkyMTkgNDIuNjU2MjUgMS43ODEyNSBMIDQxLjgxMjUgMC45Mzc1IEwgNDEuMTI1IDAuMjE4NzUgTCAzOC42NTYyNSAyLjY4NzUgQyAzOC4zNzUgMi40MTAxNTYgMzguMDI3MzQ0IDIuMTA1NDY5IDM3LjYyNSAxLjc4MTI1IEMgMzYuNTc4MTI1IDAuOTM3NSAzNS4xNjQwNjMgMCAzMy41IDAgQyAzMS4wMTk1MzEgMCAyOSAyLjAzNTE1NiAyOSA0LjUgQyAyOSA3LjkwNjI1IDMwLjMxMjUgMTAuNjY0MDYzIDMyLjE4NzUgMTMgQyAzNC4wNjI1IDE1LjMzNTkzOCAzNi40ODA0NjkgMTcuMzE2NDA2IDM4Ljg0Mzc1IDE5LjM0Mzc1IEMgNDMuNTcwMzEzIDIzLjM5ODQzOCA0OCAyNy41MzEyNSA0OCAzNSBDIDQ4IDM5LjA0Mjk2OSA0Ni40NTMxMjUgNDIuMjIyNjU2IDQzLjgxMjUgNDQuNDY4NzUgQyA0MS4xNzE4NzUgNDYuNzE0ODQ0IDM3LjM5ODQzOCA0OCAzMyA0OCBDIDMxLjQxMDE1NiA0OCAyOS41NTA3ODEgNDcuNzQ2MDk0IDI3LjY4NzUgNDcuMjUgQyAyOC4xNzU3ODEgNDYuOTkyMTg4IDI4LjY4NzUgNDYuNzY1NjI1IDI5LjE1NjI1IDQ2LjQ2ODc1IEMgMzIuOTc2NTYzIDQ0LjA1ODU5NCAzNiA0MC4yMjY1NjMgMzYgMzUgQyAzNiAyOC4zNzUgMzAuNDE3OTY5IDI0IDI1IDI0IEMgMTkuNTgyMDMxIDI0IDE0IDI4LjM3NSAxNCAzNSBDIDE0IDQwLjIyNjU2MyAxNy4wMjM0MzggNDQuMDU4NTk0IDIwLjg0Mzc1IDQ2LjQ2ODc1IEMgMjEuMzEyNSA0Ni43NjU2MjUgMjEuODI0MjE5IDQ2Ljk5MjE4OCAyMi4zMTI1IDQ3LjI1IEMgMjAuNDQ5MjE5IDQ3Ljc0NjA5NCAxOC41ODk4NDQgNDggMTcgNDggQyAxMi42MDE1NjMgNDggOC44MjgxMjUgNDYuNzE0ODQ0IDYuMTg3NSA0NC40Njg3NSBDIDMuNTQ2ODc1IDQyLjIyMjY1NiAyIDM5LjA0Mjk2OSAyIDM1IEMgMiAyNy41MzEyNSA2LjQyOTY4OCAyMy4zOTg0MzggMTEuMTU2MjUgMTkuMzQzNzUgQyAxMy41MTk1MzEgMTcuMzE2NDA2IDE1LjkzNzUgMTUuMzM1OTM4IDE3LjgxMjUgMTMgQyAxOS42ODc1IDEwLjY2NDA2MyAyMSA3LjkwNjI1IDIxIDQuNSBDIDIxIDIuMDM1MTU2IDE4Ljk4MDQ2OSAwIDE2LjUgMCBaIE0gOC44NzUgMy4wNjI1IEwgMTAuNDM3NSA0LjU5Mzc1IEwgMTAuNSA0LjY4NzUgQyAxMC41ODU5MzggNC44MjgxMjUgMTAuNzAzMTI1IDQuOTQ1MzEzIDEwLjg0Mzc1IDUuMDMxMjUgTCAxMi41IDYuNjg3NSBMIDEyLjQzNzUgNi43NSBDIDEyLjMyODEyNSA2Ljc2OTUzMSAxMi4xMDkzNzUgNi43ODEyNSAxMS44NDM3NSA2LjgxMjUgQyAxMS4zMTI1IDYuODc1IDEwLjQ5MjE4OCA3LjAwNzgxMyA5Ljg0Mzc1IDcuNjU2MjUgQyA5LjE5NTMxMyA4LjMwNDY4OCA4Ljk0OTIxOSA5LjA1NDY4OCA4LjUgOS45MDYyNSBDIDguMDUwNzgxIDEwLjc1NzgxMyA3LjQ3NjU2MyAxMS43MTA5MzggNi41IDEyLjY4NzUgQyA1LjQ4ODI4MSAxMy42OTkyMTkgMy44ODY3MTkgMTMuNjk5MjE5IDIuODc1IDEyLjY4NzUgQyAxLjg2MzI4MSAxMS42NzU3ODEgMS44NjMyODEgMTAuMDc0MjE5IDIuODc1IDkuMDYyNSBDIDMuODM1OTM4IDguMTAxNTYzIDQuNzg5MDYzIDcuNTM5MDYzIDUuNjU2MjUgNy4wOTM3NSBDIDYuNTIzNDM4IDYuNjQ4NDM4IDcuMzA4NTk0IDYuNDEwMTU2IDcuOTY4NzUgNS43NSBDIDguNjI4OTA2IDUuMDg5ODQ0IDguNzEwOTM4IDQuMjQyMTg4IDguNzUgMy43MTg3NSBDIDguNzgxMjUgMy4zMjQyMTkgOC44NDM3NSAzLjEyODkwNiA4LjgxMjUgMy4xMjUgWiBNIDQxLjEyNSAzLjA2MjUgTCA0MS4xODc1IDMuMTI1IEMgNDEuMTU2MjUgMy4xMjg5MDYgNDEuMjE4NzUgMy4zMjQyMTkgNDEuMjUgMy43MTg3NSBDIDQxLjI4OTA2MyA0LjI0MjE4OCA0MS4zNzEwOTQgNS4wODk4NDQgNDIuMDMxMjUgNS43NSBDIDQyLjY5MTQwNiA2LjQxMDE1NiA0My40NzY1NjMgNi42NDg0MzggNDQuMzQzNzUgNy4wOTM3NSBDIDQ1LjIxMDkzOCA3LjUzOTA2MyA0Ni4xNjQwNjMgOC4xMDE1NjMgNDcuMTI1IDkuMDYyNSBDIDQ4LjEzNjcxOSAxMC4wNzQyMTkgNDguMTM2NzE5IDExLjY3NTc4MSA0Ny4xMjUgMTIuNjg3NSBDIDQ2LjExMzI4MSAxMy42OTkyMTkgNDQuNTExNzE5IDEzLjY5OTIxOSA0My41IDEyLjY4NzUgQyA0Mi41MjM0MzggMTEuNzEwOTM4IDQxLjk0OTIxOSAxMC43NTc4MTMgNDEuNSA5LjkwNjI1IEMgNDEuMDUwNzgxIDkuMDU0Njg4IDQwLjgwNDY4OCA4LjMwNDY4OCA0MC4xNTYyNSA3LjY1NjI1IEMgMzkuNTA3ODEzIDcuMDA3ODEzIDM4LjY4NzUgNi44NzUgMzguMTU2MjUgNi44MTI1IEMgMzcuODkwNjI1IDYuNzgxMjUgMzcuNjcxODc1IDYuNzY5NTMxIDM3LjU2MjUgNi43NSBMIDM3LjUgNi42ODc1IEwgMzkuMDkzNzUgNS4wNjI1IEMgMzkuMjE0ODQ0IDUgMzkuMzIwMzEzIDQuOTE3OTY5IDM5LjQwNjI1IDQuODEyNSBMIDM5LjQ2ODc1IDQuNzE4NzUgQyAzOS40OTIxODggNC42ODc1IDM5LjUxMTcxOSA0LjY1NjI1IDM5LjUzMTI1IDQuNjI1IFogTSAyNSAyNiBDIDI5LjMzOTg0NCAyNiAzNCAyOS41IDM0IDM1IEMgMzQgMzkuNDY4NzUgMzEuNTIzNDM4IDQyLjYxNzE4OCAyOC4wOTM3NSA0NC43ODEyNSBDIDI3LjE0NDUzMSA0NS4zNzg5MDYgMjYuMDQ2ODc1IDQ1LjY5NTMxMyAyNSA0Ni4xMjUgQyAyMy45NTMxMjUgNDUuNjk1MzEzIDIyLjg1NTQ2OSA0NS4zNzg5MDYgMjEuOTA2MjUgNDQuNzgxMjUgQyAxOC40NzY1NjMgNDIuNjE3MTg4IDE2IDM5LjQ2ODc1IDE2IDM1IEMgMTYgMjkuNSAyMC42NjAxNTYgMjYgMjUgMjYgWiAiPjwvcGF0aD48L2c+PC9zdmc+"/></h6>
                  <p className="uppercase text-xs">Tone</p>
                </div>
              </div>
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
            <img src={ logo1 } alt="social proof logo 1" width="100px" className="px-2" />
            <img src={ logo2 } alt="social proof logo 2" width="100px" className="px-2" />
            <img src={ logo4 } alt="social proof logo 3" width="100px" className="px-2" />
            <img src={ logo3 } alt="social proof logo 4" width="100px" className="px-2" />
            <img src={ logo5 } alt="social proof logo 5" width="100px" className="px-2" />
          </div>
        </div>
      </div>
    </div>

    <div className="w-full py-10 lg:py-20 relative">
      <div className="container mx-auto">
        <ProgramTabs program={program}/>
      </div>
      <img src={ circles } width="250px" className="hidden lg:block absolute left-0" style={{ bottom: "0px", transform: "scaleX(-1)", zIndex: "-10"}} />
    </div>


    <div className="py-20 bg-gray-900">
      <div className="container px-5 lg:mx-auto">
        <h3 className="uppercase text-white text-3xl pb-5 lg:pb-10">
          Join the <span className="px-2" style={{backgroundImage: 'linear-gradient(to right, ' + program.colorOne.hex + ',' + program.colorTwo.hex + ')'}}>#FitCult</span> Family
        </h3>
      </div>
      <div className="flex flex-row overflow-scroll lg:overflow-hidden">
        {program.testimonials.map((i, count) => (
          <div key={count} className="flex flex-col justify-between rounded p-5 w-64 mx-3 bg-gray-600" style={{minWidth: "275px"}}>
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
        <div className="w-full md:w-1/2 lg:w-1/4 mt:auto">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black flex flex-col justify-between">
            <div className="h-2 w-full" style={{backgroundImage: 'linear-gradient(to right, ' + program.colorOne.hex + ',' + program.colorTwo.hex + ')'}}>
            </div>
            <div className="p-4 text-center mx-auto">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 uppercase">Basic</span>
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
              <Link to="/" className="uppercase font-bold border bg-white rounded-full px-4 py-2" style={{borderColor: program.colorOne.hex, color: program.colorOne.hex }}>Start Program</Link>
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
              <Link to="/" className="uppercase font-bold border bg-white rounded-full px-4 py-2" style={{borderColor: program.colorOne.hex, color: program.colorOne.hex }}>Start Program</Link>
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
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="flex flex-col justify-between rounded p-5 w-64 lg:mx-3 mt-10 lg:mt-auto bg-gray-600" style={{minWidth: "275px"}}>
            <h5 className="uppercase mb-5">No Contracts</h5>
            <p className="text-white">All of our training programs inside the app are month to month. No contracts, only results.</p>
          </div>
          <div className="flex flex-col justify-between rounded p-5 w-64 mx-auto lg:mx-3 mt-10 lg:mt-auto bg-gray-600" style={{minWidth: "275px"}}>
            <h5 className="uppercase mb-5">Cancel Anytime</h5>
            <p className="text-white">All of our training programs inside the app are month to month. No contracts, only results.</p>
          </div>
          <div className="flex flex-col justify-between rounded p-5 w-64 mx-auto lg:mx-3 mt-10 lg:mt-auto bg-gray-600" style={{minWidth: "275px"}}>
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
            url
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
        personas {
          title
          description
        }
        features {
          title
          description
        }
        benefits {
          title
          description
        }
      }
    }
  }
`
