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
       <SEO title={program.title} description={program.subtitle} image={program.heroImage.asset.url} />
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
              <div className="mt-10 mb-12 flex flex-row flex-wrap lg:justify-start justify-center">
                <div className="w-32 text-center flex flex-col p-2 angle-border border-b sm:border-b-0 border-black">
                  <h6 className="uppercase text-2xl">3</h6>
                  <p className="uppercase text-xs">Days/Week</p>
                </div>
                <div className="w-32 text-center flex flex-col p-2 angle-border-2 border-b sm:border-b-0 border-black">
                  <h6 className="uppercase text-2xl">30-90</h6>
                  <p className="uppercase text-xs">Minutes/Day</p>
                </div>
                <div className="w-32 text-center flex flex-col p-2 angle-border">
                  <h6 className="uppercase mx-auto"><img width="30px" alt="full gym icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgIiBkPSJNIDYuODEyNSAzIEMgNi4zMzU5MzggMy4wODk4NDQgNS45OTIxODggMy41MTE3MTkgNiA0IEwgNiA2IEwgMCA2IEwgMCA4IEwgNiA4IEwgNiAxMCBDIDYgMTAuNTUwNzgxIDYuNDQ5MjE5IDExIDcgMTEgTCAxMCAxMSBDIDEwLjU1MDc4MSAxMSAxMSAxMC41NTA3ODEgMTEgMTAgTCAxMSA0IEMgMTEgMy40NDkyMTkgMTAuNTUwNzgxIDMgMTAgMyBMIDcgMyBDIDYuOTY4NzUgMyA2LjkzNzUgMyA2LjkwNjI1IDMgQyA2Ljg3NSAzIDYuODQzNzUgMyA2LjgxMjUgMyBaIE0gMzkuODEyNSAzIEMgMzkuMzM1OTM4IDMuMDg5ODQ0IDM4Ljk5MjE4OCAzLjUxMTcxOSAzOSA0IEwgMzkgMTAgQyAzOSAxMC41NTA3ODEgMzkuNDQ5MjE5IDExIDQwIDExIEwgNDMgMTEgQyA0My41NTA3ODEgMTEgNDQgMTAuNTUwNzgxIDQ0IDEwIEwgNDQgOCBMIDUwIDggTCA1MCA2IEwgNDQgNiBMIDQ0IDQgQyA0NCAzLjQ0OTIxOSA0My41NTA3ODEgMyA0MyAzIEwgNDAgMyBDIDM5Ljk2ODc1IDMgMzkuOTM3NSAzIDM5LjkwNjI1IDMgQyAzOS44NzUgMyAzOS44NDM3NSAzIDM5LjgxMjUgMyBaIE0gOCA1IEwgOSA1IEwgOSA5IEwgOCA5IFogTSA0MSA1IEwgNDIgNSBMIDQyIDkgTCA0MSA5IFogTSAxMiA2IEwgMTIgOCBMIDM4IDggTCAzOCA2IFogTSA2LjgxMjUgMTggQyA2LjMzNTkzOCAxOC4wODk4NDQgNS45OTIxODggMTguNTExNzE5IDYgMTkgTCA2IDIxIEwgMCAyMSBMIDAgMjMgTCA2IDIzIEwgNiAyNSBDIDYgMjUuNTUwNzgxIDYuNDQ5MjE5IDI2IDcgMjYgTCAxMCAyNiBDIDEwLjU1MDc4MSAyNiAxMSAyNS41NTA3ODEgMTEgMjUgTCAxMSAxOSBDIDExIDE4LjQ0OTIxOSAxMC41NTA3ODEgMTggMTAgMTggTCA3IDE4IEMgNi45Njg3NSAxOCA2LjkzNzUgMTggNi45MDYyNSAxOCBDIDYuODc1IDE4IDYuODQzNzUgMTggNi44MTI1IDE4IFogTSAzOS44MTI1IDE4IEMgMzkuMzM1OTM4IDE4LjA4OTg0NCAzOC45OTIxODggMTguNTExNzE5IDM5IDE5IEwgMzkgMjUgQyAzOSAyNS41NTA3ODEgMzkuNDQ5MjE5IDI2IDQwIDI2IEwgNDMgMjYgQyA0My41NTA3ODEgMjYgNDQgMjUuNTUwNzgxIDQ0IDI1IEwgNDQgMjMgTCA1MCAyMyBMIDUwIDIxIEwgNDQgMjEgTCA0NCAxOSBDIDQ0IDE4LjQ0OTIxOSA0My41NTA3ODEgMTggNDMgMTggTCA0MCAxOCBDIDM5Ljk2ODc1IDE4IDM5LjkzNzUgMTggMzkuOTA2MjUgMTggQyAzOS44NzUgMTggMzkuODQzNzUgMTggMzkuODEyNSAxOCBaIE0gOCAyMCBMIDkgMjAgTCA5IDI0IEwgOCAyNCBaIE0gNDEgMjAgTCA0MiAyMCBMIDQyIDI0IEwgNDEgMjQgWiBNIDEyIDIxIEwgMTIgMjMgQyAxMy4yNzczNDQgMjMgMTQuMjUzOTA2IDIzLjQyMTg3NSAxNS4yNSAyMy45MDYyNSBDIDE2LjI0NjA5NCAyNC4zOTA2MjUgMTcuMjYxNzE5IDI1IDE4LjU5Mzc1IDI1IEMgMTkuOTI1NzgxIDI1IDIxLjEzNjcxOSAyNC40MDYyNSAyMi4yNSAyMy45MDYyNSBDIDIzLjM2MzI4MSAyMy40MDYyNSAyNC40MDIzNDQgMjMgMjUgMjMgQyAyNS41OTc2NTYgMjMgMjYuNzA3MDMxIDIzLjQwNjI1IDI3Ljg0Mzc1IDIzLjkwNjI1IEMgMjguOTgwNDY5IDI0LjQwNjI1IDMwLjEzNjcxOSAyNSAzMS40MDYyNSAyNSBDIDMyLjcwNzAzMSAyNSAzMy43MTA5MzggMjQuMzkwNjI1IDM0LjcxODc1IDIzLjkwNjI1IEMgMzUuNzI2NTYzIDIzLjQyMTg3NSAzNi43MjI2NTYgMjMgMzggMjMgTCAzOCAyMSBDIDM2LjI3NzM0NCAyMSAzNC45MTQwNjMgMjEuNTc4MTI1IDMzLjg0Mzc1IDIyLjA5Mzc1IEMgMzIuNzczNDM4IDIyLjYwOTM3NSAzMi4wMDM5MDYgMjMgMzEuNDA2MjUgMjMgQyAzMC44NzUgMjMgMjkuNzY1NjI1IDIyLjU5Mzc1IDI4LjYyNSAyMi4wOTM3NSBDIDI3LjQ4NDM3NSAyMS41OTM3NSAyNi4zMDA3ODEgMjEgMjUgMjEgQyAyMy42OTkyMTkgMjEgMjIuNTQ2ODc1IDIxLjU5Mzc1IDIxLjQzNzUgMjIuMDkzNzUgQyAyMC4zMjgxMjUgMjIuNTkzNzUgMTkuMjYxNzE5IDIzIDE4LjU5Mzc1IDIzIEMgMTcuOTI1NzgxIDIzIDE3LjE3OTY4OCAyMi42MDkzNzUgMTYuMTI1IDIyLjA5Mzc1IEMgMTUuMDcwMzEzIDIxLjU3ODEyNSAxMy43MjI2NTYgMjEgMTIgMjEgWiBNIDE5IDMyIEMgMTYuMjUzOTA2IDMyIDE0IDM0LjI1MzkwNiAxNCAzNyBMIDE0IDM4IEwgMTIgMzggTCAxMiA0MCBMIDE0IDQwIEwgMTQgNDEgQyAxNCA0My43NDYwOTQgMTYuMjUzOTA2IDQ2IDE5IDQ2IEwgMzEgNDYgQyAzMy43NDYwOTQgNDYgMzYgNDMuNzQ2MDk0IDM2IDQxIEwgMzYgNDAgTCAzOCA0MCBMIDM4IDM4IEwgMzYgMzggTCAzNiAzNyBDIDM2IDM0LjI1MzkwNiAzMy43NDYwOTQgMzIgMzEgMzIgWiBNIDE5IDM0IEwgMzEgMzQgQyAzMi42NTYyNSAzNCAzNCAzNS4zNDM3NSAzNCAzNyBMIDM0IDQxIEMgMzQgNDIuNjU2MjUgMzIuNjU2MjUgNDQgMzEgNDQgTCAzMCA0NCBMIDMwIDM1IEwgMjggMzUgTCAyOCA0NCBMIDIyIDQ0IEwgMjIgMzUgTCAyMCAzNSBMIDIwIDQ0IEwgMTkgNDQgQyAxNy4zNDM3NSA0NCAxNiA0Mi42NTYyNSAxNiA0MSBMIDE2IDM3IEMgMTYgMzUuMzQzNzUgMTcuMzQzNzUgMzQgMTkgMzQgWiBNIDYuODEyNSAzNSBDIDYuMzM1OTM4IDM1LjA4OTg0NCA1Ljk5MjE4OCAzNS41MTE3MTkgNiAzNiBMIDYgMzggTCAwIDM4IEwgMCA0MCBMIDYgNDAgTCA2IDQyIEMgNiA0Mi41NTA3ODEgNi40NDkyMTkgNDMgNyA0MyBMIDEwIDQzIEMgMTAuNTUwNzgxIDQzIDExIDQyLjU1MDc4MSAxMSA0MiBMIDExIDM2IEMgMTEgMzUuNDQ5MjE5IDEwLjU1MDc4MSAzNSAxMCAzNSBMIDcgMzUgQyA2Ljk2ODc1IDM1IDYuOTM3NSAzNSA2LjkwNjI1IDM1IEMgNi44NzUgMzUgNi44NDM3NSAzNSA2LjgxMjUgMzUgWiBNIDM5LjgxMjUgMzUgQyAzOS4zMzU5MzggMzUuMDg5ODQ0IDM4Ljk5MjE4OCAzNS41MTE3MTkgMzkgMzYgTCAzOSA0MiBDIDM5IDQyLjU1MDc4MSAzOS40NDkyMTkgNDMgNDAgNDMgTCA0MyA0MyBDIDQzLjU1MDc4MSA0MyA0NCA0Mi41NTA3ODEgNDQgNDIgTCA0NCA0MCBMIDUwIDQwIEwgNTAgMzggTCA0NCAzOCBMIDQ0IDM2IEMgNDQgMzUuNDQ5MjE5IDQzLjU1MDc4MSAzNSA0MyAzNSBMIDQwIDM1IEMgMzkuOTY4NzUgMzUgMzkuOTM3NSAzNSAzOS45MDYyNSAzNSBDIDM5Ljg3NSAzNSAzOS44NDM3NSAzNSAzOS44MTI1IDM1IFogTSA4IDM3IEwgOSAzNyBMIDkgNDEgTCA4IDQxIFogTSA0MSAzNyBMIDQyIDM3IEwgNDIgNDEgTCA0MSA0MSBaICI+PC9wYXRoPjwvZz48L3N2Zz4="/></h6>
                  <p className="uppercase text-xs">Full Gym</p>
                </div>
                <div className="w-32 text-center flex flex-col p-2">
                  <h6 className="uppercase mx-auto"><img width="30px" alt="benefit icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAiIGhlaWdodD0iNDAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgIiBkPSJNIDYuNSAwIEMgNi4zMTI1IC0wLjAwMzkwNjI1IDYuMTI4OTA2IDAuMDI3MzQzOCA1LjkzNzUgMC4wNjI1IEwgMi4zMTI1IDAuNzUgQyAwLjc3NzM0NCAxLjAzOTA2MyAtMC4yMjY1NjMgMi41MzEyNSAwLjA2MjUgNC4wNjI1IEwgMi40Mzc1IDE2Ljc1IEMgMi43MjY1NjMgMTguMjg1MTU2IDQuMjQ2MDk0IDE5LjMyMDMxMyA1Ljc4MTI1IDE5LjAzMTI1IEwgOS40MDYyNSAxOC4zNDM3NSBDIDEwLjk0MTQwNiAxOC4wNTQ2ODggMTEuOTQ1MzEzIDE2LjU2MjUgMTEuNjU2MjUgMTUuMDMxMjUgQyAxMS42NTYyNSAxNS4wMTk1MzEgMTEuNjU2MjUgMTUuMDExNzE5IDExLjY1NjI1IDE1IEwgMTAuNTkzNzUgOS4zMTI1IEMgMTEuMzY3MTg4IDkuMjE0ODQ0IDEyLjE5OTIxOSA5LjEyNSAxMy4xMjUgOS4wMzEyNSBDIDEzLjQyOTY4OCAxNi42MTMyODEgMTQuNTUwNzgxIDIwLjkxNzk2OSAxNS43NSAyMy41IEMgMTYuMzY3MTg4IDI0LjgyODEyNSAxNyAyNS43MDMxMjUgMTcuNSAyNi4zMTI1IEMgMTcuOTgwNDY5IDI2Ljg5ODQzOCAxOC4yNjE3MTkgMjcuMjI2NTYzIDE4LjI4MTI1IDI3LjI1IEMgMTguMjgxMjUgMjcuMjUgMTguMzEyNSAyNy4yODEyNSAxOC4zMTI1IDI3LjI4MTI1IEMgMTguNDI5Njg4IDI3Ljg3MTA5NCAxOC42ODM1OTQgMjguOTgwNDY5IDE4Ljk2ODc1IDMwLjEyNSBDIDE5LjE5OTIxOSAzMS4wNTQ2ODggMTkuMzEyNSAzMS41NDI5NjkgMTkuNDA2MjUgMzEuOTA2MjUgTCA2LjMxMjUgNDQuNDM3NSBMIDYuMTg3NSA0NC41MzEyNSBMIDYuMTg3NSA0NC41NjI1IEMgNS40NzY1NjMgNDUuMTA5Mzc1IDUuMDExNzE5IDQ1LjgwMDc4MSA0Ljg3NSA0Ni41IEMgNC43MzA0NjkgNDcuMjQ2MDk0IDQuODg2NzE5IDQ3LjkzNzUgNS4xMjUgNDguNDY4NzUgQyA1Ljg2NzE4OCA1MC4xMzY3MTkgOC4wNzgxMjUgNTAuNDI1NzgxIDkuNjI1IDQ5LjMxMjUgQyA5LjYzNjcxOSA0OS4zMDA3ODEgOS42NDQ1MzEgNDkuMjkyOTY5IDkuNjU2MjUgNDkuMjgxMjUgTCAyNi4zMTI1IDM2LjU5Mzc1IEwgMzMuNjg3NSAzOCBDIDMzLjU3ODEyNSAzOS4zMDQ2ODggMzMuMTMyODEzIDQ0LjczMDQ2OSAzMy4wMzEyNSA0NS43NSBDIDMyLjk1NzAzMSA0Ni40NzY1NjMgMzIuOTU3MDMxIDQ3LjM1OTM3NSAzMy4yODEyNSA0OC4yMTg3NSBDIDMzLjQ0MTQwNiA0OC42NDg0MzggMzMuNjg3NSA0OS4wNjY0MDYgMzQuMDkzNzUgNDkuNDA2MjUgQyAzNC41IDQ5Ljc0NjA5NCAzNS4wNjY0MDYgNDkuOTY4NzUgMzUuNjU2MjUgNDkuOTY4NzUgQyAzNi40NjQ4NDQgNDkuOTY4NzUgMzcuMjg1MTU2IDQ5LjgwNDY4OCAzNy44NzUgNDkuMjUgQyAzOC40NjQ4NDQgNDguNjk1MzEzIDM4LjczODI4MSA0Ny45NjA5MzggMzkgNDcuMDMxMjUgQyAzOS4wMTE3MTkgNDYuOTkyMTg4IDM5LjAyMzQzOCA0Ni45NDkyMTkgMzkuMDMxMjUgNDYuOTA2MjUgQyAzOS4wMzEyNSA0Ni45MDYyNSAzOS40NTcwMzEgNDQuMjEwOTM4IDM5LjkwNjI1IDQxLjM3NSBDIDQwLjM1NTQ2OSAzOC41MzkwNjMgNDAuODI4MTI1IDM1LjY3NTc4MSA0MC45MDYyNSAzNC45Mzc1IEMgNDAuOTgwNDY5IDM0LjIzMDQ2OSA0MC45MjE4NzUgMzMuNTY2NDA2IDQwLjU2MjUgMzMgQyA0MC4yMDMxMjUgMzIuNDMzNTk0IDM5LjY2Nzk2OSAzMi4xNjAxNTYgMzkuMTI1IDMxLjkzNzUgQyAzOC41NjY0MDYgMzEuNzA3MDMxIDM2LjY3OTY4OCAzMS4wMzUxNTYgMzQuODc1IDMwLjM3NSBDIDMzLjQ2MDkzOCAyOS44NTU0NjkgMzIuNjcxODc1IDI5LjU2MjUgMzIuMTU2MjUgMjkuMzc1IEMgMzIuMjg5MDYzIDI4LjcxMDkzOCAzMi41NDI5NjkgMjcuNDY0ODQ0IDMyLjY1NjI1IDI2LjA5Mzc1IEMgMzMuMzEyNSAyNC43OTY4NzUgMzQuMTg3NSAyMy4yNzM0MzggMzUgMjAuNjI1IEMgMzUuNzc3MzQ0IDE4LjA4MjAzMSAzNi40NzI2NTYgMTQuNDYwOTM4IDM2LjkzNzUgOS4wMzEyNSBDIDM3Ljg0Mzc1IDkuMTI1IDM4LjY0NDUzMSA5LjI0MjE4OCAzOS40MDYyNSA5LjM0Mzc1IEwgMzguMzQzNzUgMTUgQyAzOC4zNDM3NSAxNS4wMTE3MTkgMzguMzQzNzUgMTUuMDE5NTMxIDM4LjM0Mzc1IDE1LjAzMTI1IEMgMzguMDU0Njg4IDE2LjU2MjUgMzkuMDU4NTk0IDE4LjA1NDY4OCA0MC41OTM3NSAxOC4zNDM3NSBMIDQ0LjIxODc1IDE5LjAzMTI1IEMgNDUuNzUzOTA2IDE5LjMyMDMxMyA0Ny4yNzM0MzggMTguMjg1MTU2IDQ3LjU2MjUgMTYuNzUgTCA0OS45Mzc1IDQuMDYyNSBDIDUwLjIyNjU2MyAyLjUzMTI1IDQ5LjIyMjY1NiAxLjAwNzgxMyA0Ny42ODc1IDAuNzE4NzUgTCA0NC4wNjI1IDAuMDYyNSBDIDQyLjUzMTI1IC0wLjIyNjU2MyA0MS4wMDc4MTMgMC43NzczNDQgNDAuNzE4NzUgMi4zMTI1IEwgMzkuNzgxMjUgNy4zNDM3NSBDIDM4LjkyOTY4OCA3LjIzNDM3NSAzOC4wMjM0MzggNy4xMzI4MTMgMzcgNy4wMzEyNSBDIDM2LjkyOTY4OCA2LjYzMjgxMyAzNi43ODUxNTYgNi4yNjU2MjUgMzYuNTMxMjUgNS45Mzc1IEMgMzYuMDcwMzEzIDUuMzQzNzUgMzUuMzA4NTk0IDUuMDI3MzQ0IDM0LjUzMTI1IDUgQyAzMy40Mjk2ODggNC45NTcwMzEgMzIuNTE1NjI1IDUuNjk1MzEzIDMyLjE4NzUgNi42NTYyNSBDIDMwLjAxOTUzMSA2LjUzNTE1NiAyNy42NDA2MjUgNi40Njg3NSAyNSA2LjQ2ODc1IEMgMjIuMzU5Mzc1IDYuNDY4NzUgMTkuOTgwNDY5IDYuNTM5MDYzIDE3LjgxMjUgNi42NTYyNSBDIDE3LjYwOTM3NSA2LjExNzE4OCAxNy4yOTY4NzUgNS42OTkyMTkgMTYuOTA2MjUgNS40Mzc1IEMgMTYuMjU3ODEzIDUuMDAzOTA2IDE1LjU4NTkzOCA1LjA4OTg0NCAxNS40Mzc1IDUuMDkzNzUgQyAxNC41MzEyNSA1LjEyNSAxMy42ODc1IDUuNjcxODc1IDEzLjM3NSA2LjM3NSBDIDEzLjI4MTI1IDYuNTgyMDMxIDEzLjIzMDQ2OSA2Ljc5Njg3NSAxMy4xODc1IDcgQyAxMi4wOTc2NTYgNy4xMDkzNzUgMTEuMTEzMjgxIDcuMjIyNjU2IDEwLjIxODc1IDcuMzQzNzUgTCA5LjI4MTI1IDIuMzEyNSBDIDkuMDMxMjUgMC45Njg3NSA3LjgyMDMxMyAwLjAxOTUzMTMgNi41IDAgWiBNIDYuMzEyNSAyIEMgNi43ODEyNSAxLjkxMDE1NiA3LjIyMjY1NiAyLjIxODc1IDcuMzEyNSAyLjY4NzUgTCA5LjcxODc1IDE1LjM3NSBDIDkuODA4NTk0IDE1Ljg0NzY1NiA5LjUgMTYuMjg1MTU2IDkuMDMxMjUgMTYuMzc1IEwgNS40MDYyNSAxNy4wNjI1IEMgNC45Mzc1IDE3LjE1MjM0NCA0LjQ5NjA5NCAxNi44NDM3NSA0LjQwNjI1IDE2LjM3NSBMIDIgMy42ODc1IEMgMS45MTAxNTYgMy4yMTQ4NDQgMi4yMTg3NSAyLjc3NzM0NCAyLjY4NzUgMi42ODc1IFogTSA0My4zNDM3NSAyIEMgNDMuNDUzMTI1IDEuOTc2NTYzIDQzLjU3MDMxMyAxLjk3NjU2MyA0My42ODc1IDIgTCA0Ny4zMTI1IDIuNjg3NSBDIDQ3Ljc4MTI1IDIuNzc3MzQ0IDQ4LjA4OTg0NCAzLjIxODc1IDQ4IDMuNjg3NSBMIDQ1LjU5Mzc1IDE2LjM3NSBDIDQ1LjUwMzkwNiAxNi44NDM3NSA0NS4wNjI1IDE3LjE1MjM0NCA0NC41OTM3NSAxNy4wNjI1IEwgNDAuOTY4NzUgMTYuMzc1IEMgNDAuNSAxNi4yODUxNTYgNDAuMTkxNDA2IDE1Ljg0NzY1NiA0MC4yODEyNSAxNS4zNzUgTCA0Mi42ODc1IDIuNjg3NSBDIDQyLjc1MzkwNiAyLjMzNTkzOCA0My4wMTU2MjUgMi4wNzAzMTMgNDMuMzQzNzUgMiBaIE0gMzQuNDY4NzUgNyBDIDM0LjgxNjQwNiA3LjAxMTcxOSAzNC44Nzg5MDYgNy4wODIwMzEgMzQuOTM3NSA3LjE1NjI1IEMgMzQuOTk2MDk0IDcuMjMwNDY5IDM1LjA3ODEyNSA3LjQyOTY4OCAzNS4wMzEyNSA3LjgxMjUgQyAzNS4wMzEyNSA3LjgyNDIxOSAzNS4wMzEyNSA3LjgzMjAzMSAzNS4wMzEyNSA3Ljg0Mzc1IEMgMzQuNTc4MTI1IDEzLjgwNDY4OCAzMy44MzU5MzggMTcuNTAzOTA2IDMzLjA2MjUgMjAuMDMxMjUgQyAzMi4yODkwNjMgMjIuNTU4NTk0IDMxLjQ4NDM3NSAyMy45MTAxNTYgMzAuNzgxMjUgMjUuMzEyNSBDIDMwLjcyMjY1NiAyNS40NDE0MDYgMzAuNjkxNDA2IDI1LjU3ODEyNSAzMC42ODc1IDI1LjcxODc1IEMgMzAuNjA5Mzc1IDI3LjExMzI4MSAzMC4wNjI1IDI5Ljg0Mzc1IDMwLjA2MjUgMjkuODQzNzUgQyAyOS45NzI2NTYgMzAuMzI4MTI1IDMwLjI1MzkwNiAzMC44MDg1OTQgMzAuNzE4NzUgMzAuOTY4NzUgQyAzMC43MTg3NSAzMC45Njg3NSAzMi4zODI4MTMgMzEuNTg5ODQ0IDM0LjE4NzUgMzIuMjUgQyAzNS45OTIxODggMzIuOTEwMTU2IDM3Ljk5MjE4OCAzMy42MjUgMzguMzc1IDMzLjc4MTI1IEMgMzguNzc3MzQ0IDMzLjk0NTMxMyAzOC44NTkzNzUgMzQuMDY2NDA2IDM4Ljg3NSAzNC4wOTM3NSBDIDM4Ljg5MDYyNSAzNC4xMjEwOTQgMzguOTYwOTM4IDM0LjIyMjY1NiAzOC45MDYyNSAzNC43MTg3NSBDIDM4Ljg2MzI4MSAzNS4xMjEwOTQgMzguMzg2NzE5IDM4LjIyNjU2MyAzNy45Mzc1IDQxLjA2MjUgQyAzNy41IDQzLjgzMjAzMSAzNy4xMTMyODEgNDYuMzQ3NjU2IDM3LjA5Mzc1IDQ2LjQ2ODc1IEMgMzcuMDkzNzUgNDYuNDY4NzUgMzcuMDYyNSA0Ni41IDM3LjA2MjUgNDYuNSBDIDM2Ljg0Mzc1IDQ3LjI1MzkwNiAzNi42Mjg5MDYgNDcuNjYwMTU2IDM2LjUgNDcuNzgxMjUgQyAzNi4zNjcxODggNDcuOTA2MjUgMzYuMjI2NTYzIDQ3Ljk2ODc1IDM1LjY1NjI1IDQ3Ljk2ODc1IEMgMzUuNDg0Mzc1IDQ3Ljk2ODc1IDM1LjQ0MTQwNiA0Ny45Mjk2ODggMzUuMzc1IDQ3Ljg3NSBDIDM1LjMwODU5NCA0Ny44MjAzMTMgMzUuMjMwNDY5IDQ3LjcwMzEyNSAzNS4xNTYyNSA0Ny41IEMgMzUuMDAzOTA2IDQ3LjA5NzY1NiAzNC45NTMxMjUgNDYuNDI1NzgxIDM1IDQ1LjkzNzUgQyAzNS4xMjg5MDYgNDQuNjUyMzQ0IDM1Ljc1IDM3LjI1IDM1Ljc1IDM3LjI1IEMgMzUuNzg5MDYzIDM2LjczODI4MSAzNS40NDE0MDYgMzYuMjgxMjUgMzQuOTM3NSAzNi4xODc1IEwgMjYuMjE4NzUgMzQuNTMxMjUgQyAyNS45NDUzMTMgMzQuNDgwNDY5IDI1LjY2MDE1NiAzNC41NTA3ODEgMjUuNDM3NSAzNC43MTg3NSBMIDguNDY4NzUgNDcuNjg3NSBDIDcuODIwMzEzIDQ4LjE1MjM0NCA3LjA1NDY4OCA0Ny44NDc2NTYgNi45Njg3NSA0Ny42NTYyNSBDIDYuODU5Mzc1IDQ3LjQxMDE1NiA2Ljc5Njg3NSA0Ny4xMTMyODEgNi44NDM3NSA0Ni44NzUgQyA2Ljg5MDYyNSA0Ni42MzY3MTkgNy4wMTU2MjUgNDYuMzc4OTA2IDcuNDY4NzUgNDYuMDYyNSBDIDcuNTAzOTA2IDQ2LjAzNTE1NiA3LjUzNTE1NiA0Ni4wMDM5MDYgNy41NjI1IDQ1Ljk2ODc1IEwgMjEuMjE4NzUgMzIuOTM3NSBDIDIxLjQ4MDQ2OSAzMi42ODc1IDIxLjU4OTg0NCAzMi4zMjAzMTMgMjEuNSAzMS45Njg3NSBDIDIxLjUgMzEuOTY4NzUgMjEuMjA3MDMxIDMwLjg3MTA5NCAyMC45MDYyNSAyOS42NTYyNSBDIDIwLjYwNTQ2OSAyOC40NDE0MDYgMjAuMjczNDM4IDI3LjA0Mjk2OSAyMC4yMTg3NSAyNi43NSBDIDIwLjIxNDg0NCAyNi42ODc1IDIwLjIwMzEyNSAyNi42MjUgMjAuMTg3NSAyNi41NjI1IEMgMTkuOTE3OTY5IDI1Ljg2NzE4OCAxOS40OTYwOTQgMjUuNTU4NTk0IDE5LjA2MjUgMjUuMDMxMjUgQyAxOC42Mjg5MDYgMjQuNTAzOTA2IDE4LjEwMTU2MyAyMy44MTY0MDYgMTcuNTYyNSAyMi42NTYyNSBDIDE2LjQ4ODI4MSAyMC4zMzk4NDQgMTUuMzUxNTYzIDE2LjE2NDA2MyAxNS4wOTM3NSA4LjM0Mzc1IEMgMTUuMDc0MjE5IDcuNzU3ODEzIDE1LjEzMjgxMyA3LjMxNjQwNiAxNS4xODc1IDcuMTg3NSBDIDE1LjI0MjE4OCA3LjA1ODU5NCAxNS4xMTMyODEgNy4xMDU0NjkgMTUuNSA3LjA5Mzc1IEMgMTUuNzY5NTMxIDcuMDg1OTM4IDE1Ljc5Njg3NSA3LjA4MjAzMSAxNS44MTI1IDcuMDkzNzUgQyAxNS44MjgxMjUgNy4xMDU0NjkgMTYgNy4yMDMxMjUgMTYuMDYyNSA4LjAzMTI1IEMgMTYuMDcwMzEzIDguMDYyNSAxNi4wODIwMzEgOC4wOTM3NSAxNi4wOTM3NSA4LjEyNSBDIDE2LjY4NzUgMTEuNzA3MDMxIDE3LjEyMTA5NCAxNS41NzgxMjUgMTguMjUgMTguNjg3NSBDIDE4LjgxMjUgMjAuMjQyMTg4IDE5LjU1MDc4MSAyMS42Mjg5MDYgMjAuNjU2MjUgMjIuNjU2MjUgQyAyMS43NjE3MTkgMjMuNjgzNTk0IDIzLjI0MjE4OCAyNC4yODEyNSAyNSAyNC4yODEyNSBDIDI2Ljc1MzkwNiAyNC4yODEyNSAyOC4yMjI2NTYgMjMuNzczNDM4IDI5LjM0Mzc1IDIyLjgxMjUgQyAzMC40NjQ4NDQgMjEuODUxNTYzIDMxLjIxNDg0NCAyMC41MTE3MTkgMzEuNzgxMjUgMTguOTY4NzUgQyAzMi45MTAxNTYgMTUuODgyODEzIDMzLjM1MTU2MyAxMS44NzUgMzQuMDYyNSA3LjQzNzUgQyAzNC4wNjI1IDcuNDI1NzgxIDM0LjA2MjUgNy40MTc5NjkgMzQuMDYyNSA3LjQwNjI1IEMgMzQuMTA1NDY5IDcuMTEzMjgxIDM0LjI1IDYuOTkyMTg4IDM0LjQ2ODc1IDcgWiBNIDI1IDguNDY4NzUgQyAyNy41MTE3MTkgOC40Njg3NSAyOS43Njk1MzEgOC41NDI5NjkgMzEuODQzNzUgOC42NTYyNSBDIDMxLjI4MTI1IDEyLjMwODU5NCAzMC44MDA3ODEgMTUuNjI1IDMwIDE3Ljk2ODc1IEMgMjkuNTIzNDM4IDE1LjY1NjI1IDI3LjQ0NTMxMyAxMy45MDYyNSAyNSAxMy45MDYyNSBDIDIyLjYyNSAxMy45MDYyNSAyMC42MTcxODggMTUuNTY2NDA2IDIwLjA2MjUgMTcuNzgxMjUgQyAxOS4xOTE0MDYgMTUuMjY1NjI1IDE4LjcxNDg0NCAxMS45NDUzMTMgMTguMTg3NSA4LjY1NjI1IEMgMjAuMjUzOTA2IDguNTQ2ODc1IDIyLjUgOC40Njg3NSAyNSA4LjQ2ODc1IFogTSAyNSAxNi4wOTM3NSBDIDI2LjYyNSAxNi4wOTM3NSAyNy45MDYyNSAxNy4zNzUgMjcuOTA2MjUgMTkgQyAyNy45MDYyNSAyMC42MjUgMjYuNjI1IDIxLjkwNjI1IDI1IDIxLjkwNjI1IEMgMjMuMzc1IDIxLjkwNjI1IDIyLjA5Mzc1IDIwLjYyNSAyMi4wOTM3NSAxOSBDIDIyLjA5Mzc1IDE3LjM3NSAyMy4zNzUgMTYuMDkzNzUgMjUgMTYuMDkzNzUgWiAiPjwvcGF0aD48L2c+PC9zdmc+"/></h6>
                  <p className="uppercase text-xs">Strength</p>
                </div>
              </div>
              <div className="mt-10 flex flex-row flex-wrap items-center">
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

    <div className="w-full py-10 lg:py-20 sticky top-0 lg:top-auto lg:relative">
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
          <div className="rounded overflow-hidden shadow-lg bg-white text-black flex flex-col justify-between">
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
