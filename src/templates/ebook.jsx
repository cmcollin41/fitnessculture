import React from 'react'
import {graphql} from "gatsby"
import Layout from "../components/layout"
import DownloadForm from '../components/ProductForm/downloads'
import BlockContent, { defaultSerializers } from '@sanity/block-content-to-react'
import SEO from "../components/seo"
import SocialProof from "../components/SocialProof"
import Img from 'gatsby-image'

// CSS
import '../css/global.css'

// Images
import circles from '../assets/circles.svg'


const Ebook = ({ data }) => {

  // const serializers = {
  //   types: {
  //     code: props => (
  //       <pre data-language={props.node.language}>
  //         <code>{props.node.code}</code>
  //       </pre>
  //     )
  //   }
  // }

  const product = data.shopifyProduct
  const node = data.sanityProduct

  const programRow = React.createRef();
  const programDiv = React.createRef();

  // const clickLeft = () => {
  //   // translate -= programDiv.current.offsetWidth;
  // 	programRow.current.style.transform = "translateX(" + programDiv.current.offsetWidth + "px" + ")";
  // }

  // const clickRight = () => {
  //   // programRow.current.scrollLeft += programDiv.current.offsetWidth;
  //   // translate += programDiv.current.offsetWidth;
  // 	programRow.current.style.transform = "translateX(" + -programDiv.current.offsetWidth + "px" + ")";
  // }

  const clickLeft = () => {
    programRow.current.scrollLeft -= programDiv.current.offsetWidth;
  }

  const clickRight = () => {
    programRow.current.scrollLeft += programDiv.current.offsetWidth;
  }
  
    
  return (

    <Layout>
      <SEO title={product.title}/>
      {/* Add Hex colors to Sanity */}
      <div className="h-2 w-full" style={{backgroundImage: 'linear-gradient(to right, ' + node.colorOne.hex + ',' + node.colorTwo.hex + ')'}}></div>
      <div className="py-10 lg:py-20 relative">
        <div className="absolute h-full bottom-0 left-0 overflow-x-hidden" style={{zIndex: "-10"}}>
          <img src={circles} alt="circles" width="200px" height="100%" style={{transform: "scale(-1)"}}/>
        </div>
        <div className="hidden lg:block absolute h-full" style={{transform: "translate(-35%, 50%)"}}>
          <h2 className="uppercase text-gray-300 text-3xl font-bold" style={{transform: "rotate(90deg)"}}>Fitness Program</h2>
        </div>
        <div className="container mx-auto px-5 pb-5 pt-3">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="statement text-3xl lg:text-5xl leading-none">
                {product.title}
              </h1>
              <p className="text-xl mt-5" style={{ maxWidth: "500px" }}>
                {product.subtitle}
              </p>
              <div className="mt-10 mb-12 flex flex-row flex-wrap lg:justify-start justify-center">
                <div className="w-32 text-center flex flex-col p-2 angle-border">
                  <Img className="mx-auto" alt={node.attributes[0].title} fixed={node.attributes[0].icon.asset.fixed} />
                  <p className="uppercase text-xs">{node.attributes[0].title}</p>
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
                  <Img className="mx-auto" alt={node.benefits[0].title} fixed={node.benefits[0].icon.asset.fixed} />
                  <p className="uppercase text-xs">{node.benefits[0].title}</p>
                </div>
              </div>
              <div className="flex flex-row flex-wrap items-center">
                <div className="w-full lg:w-1/3">
                  <DownloadForm product={product} node={node} />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative bg-black mt-10">
              <video muted playsInline autoPlay loop controls>
                <source src={node.video.asset.url} />
                Your browser doesn't support video
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

    <SocialProof />

    <div className="py-20 relative">
      <div className="container px-5 lg:mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center -mx-3">
          <div className="w-full lg:w-1/3 text-right bg-white px-3">
            <Img fluid={product.images[0].localFile.childImageSharp.fluid} />
          </div>
          <div className="w-full lg:w-1/2 lg:px-20 personas z-10 px-3 flex flex-col">
            <h3 className="statement text-3xl pb-5">
             {product.title}
            </h3>
            <BlockContent blocks={node._rawDescription} serializers={defaultSerializers} />
            <div className="mt-10 w-full lg:w-1/2">
              <DownloadForm product={product} node={node} />
            </div>
          </div>
        </div>
      </div>
      <img src={ circles } alt="circle textures" width="250px" height="100%" className="block absolute right-0 bottom-0" style={{ zIndex: "-10"}} />
    </div>


    <div className="py-20 bg-gray-900">
      <div className="container px-5 lg:mx-auto">
        <h3 className="statement text-white text-left lg:text-center text-3xl pb-5 lg:pb-10">
          Get Started in 3 Steps
        </h3>
      </div>
      <div className="container px-5 lg:px-auto lg:mx-auto">
        <div className="flex flex-row flex-wrap items-stretch justify-center">
          {node.steps.map((step, count) => (
            <div key={count} className="w-full lg:w-1/3 p-5">
              <div className="text-center">
                {/* <Img width="50px"  alt={step.title} fixed={step.icon.asset.fixed} /> */}
                <div className="rounded-full border border-white p-4 h-20 w-20 text-center mx-auto">
                  <h5 className="uppercase mt-4 text-white">{step.title}</h5>
                </div>
                <p className="text-white">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="py-20 bg-gray-100">
      <div className="container lg:mx-auto px-5">
        <h3 className="statement text-3xl pb-5 lg:pb-10">
          Real Results
        </h3>
      </div>
      <div className="scroll-btns relative h-full">
        <div ref={programRow} className="flex flex-row flex-nowrap items-stretch h-full overflow-x-scroll lg:overflow-x-hidden scroll-x-mandatory smooth">

          {
            node.testimonials.map((program,i) => {
              return (
                <div ref={programDiv} key={i} className="w-full md:w-1/2 lg:w-1/5 mx-3 rounded-sm bg-gray-900 mt-10 flex flex-col items-stretch snap-align-center" style={{minWidth: "300px"}}>
                  <Img
                      className="block h-64 w-full bg-cover bg-center rounded-t-sm text-center overflow-hidden"
                      fluid={program.memberImage.asset.fluid}
                    
                  />
                  <div className="flex flex-col justify-between items-stretch flex-grow">
                    <div className="p-5">
                      <h4 className="statement text-white text-xl">{program.member}</h4>
                      <p className="text-white text-sm">{program.location}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      <button className="hidden lg:block absolute scroll-btn scroll-left shadow-lg" onClick={clickLeft}><svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 172 172" style={{fill: "#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode:"normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#666666"><g id="surface1"><path d="M110.55031,10.535c-0.90031,0 -1.74688,0.36281 -2.39188,0.99438l-72.52219,71.94437c-1.35719,1.34375 -1.37062,3.52063 -0.02687,4.86438l71.94437,72.53562c1.34375,1.34375 3.52063,1.35719 4.86438,0.01344l20.72062,-20.54594c1.35719,-1.34375 1.37063,-3.52062 0.02688,-4.87781l-48.96625,-49.35594l49.36937,-48.96625c1.34375,-1.34375 1.35719,-3.52062 0.01344,-4.86437l-20.54594,-20.72063c-0.65844,-0.67187 -1.55875,-1.03469 -2.48594,-1.02125z"></path></g></g></g></svg></button>
      <button className="hidden lg:block absolute scroll-btn scroll-right shadow-lg" onClick={clickRight}><svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 172 172" style={{fill: "#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode:"normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#666666"><g id="surface2"><path d="M62.39031,10.32c-0.90031,0.01344 -1.74688,0.36281 -2.39188,0.99438l-20.72062,20.55937c-1.34375,1.34375 -1.35719,3.52063 -0.02688,4.86438l48.96625,49.36937l-49.35594,48.96625c-1.35719,1.34375 -1.37062,3.52063 -0.02687,4.86438l20.55937,20.72062c1.34375,1.35719 3.52063,1.37063 4.86438,0.02688l72.53562,-71.94438c1.34375,-1.34375 1.35719,-3.52062 0.01344,-4.87781l-71.93094,-72.52219c-0.65844,-0.67187 -1.55875,-1.03469 -2.48594,-1.02125z"></path></g></g></g></svg></button>
      </div>
    </div>

    <div className="container mx-auto py-20">
      <div className="flex flex-col lg:flex-row justify-center items-center px-5">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="rounded-sm overflow-hidden shadow-lg bg-white text-black flex flex-col justify-between">
            <div className="h-2 w-full" style={{backgroundImage: 'linear-gradient(to right, ' + node.colorOne.hex + ',' + node.colorTwo.hex + ')'}}>
            </div>
            <div className="p-4 text-center mx-auto">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 uppercase">Basic</span>
              <h6 className="text-black text-base text-6xl mt-5 relative"><span className="absolute text-xl" style={{left: "-10px", top: "10px"}}>$</span>{Math.floor(product.variants[0].price)}</h6>
            </div>
            <div>
              <ul className="pricing">
                {node.productBenefits.map((benefit, i) => (
                  <li>{benefit.description}</li>
                ))}
              </ul>
            </div>
            <div className="px-6 py-10">
              <DownloadForm product={product} node={node}/>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div className="py-20 bg-gray-900">
      <div className="container px-5 lg:mx-auto">
        <h3 className="statement text-white text-left lg:text-center text-3xl pb-5 lg:pb-10">
          Buying is <span className="px-2" style={{backgroundImage: 'linear-gradient(to right, ' + node.colorOne.hex + ',' + node.colorTwo.hex + ')'}}>Stress</span> Free
        </h3>
      </div>
      <div className="container px-5 lg:px-auto lg:mx-auto">
        <div className="flex flex-row flex-wrap items-stretch justify-center">
          {node.guarantees.map((i, count) => (
            <div key={count} className="w-full lg:w-1/3 p-5">
              <div className="bg-gray-600 p-5 mt-10 rounded-sm h-full w-full text-center">
                <Img width="50px"  alt={i.title} fixed={i.icon.asset.fixed} />
                <h5 className="uppercase mb-5">{i.title}</h5>
                <p className="text-white">{i.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


    <div className="py-20 px-5">
      <div className="container mx-auto">
        <h3 className="statement text-center text-3xl mb-10">
          Questions and <span className="rustico">Answers</span>
        </h3>
        {node.questions.map((q, count) => (
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
      <div className="container px-5 lg:mx-auto">
        <h3 className="statement text-left lg:text-center text-3xl pb-5 lg:pb-10">
          By the Numbers
        </h3>
      </div>
      <div className="container px-5 lg:px-auto lg:mx-auto">
        <div className="flex flex-row flex-wrap items-stretch justify-center">
          {node.stats.map((i, count) => (
            <div key={count} className="w-full lg:w-1/3 px-5">
              <div className="p-5 mt-10 rounded-sm h-full w-full text-center">
                <h5 className="uppercase mb-5 text-6xl statement">{i.number}</h5>
                <p>{i.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



</Layout>

  )
}

export default Ebook


export const pageQuery = graphql`
  query($shopifyId: String!, $strippedId: String!) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      id
      title
      handle
      productType
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }

    sanityProduct(shopifyId: {eq: $strippedId}) {
      shopifyId
      video {
        asset {
          url
        }
      }
      attributes {
        title
        icon {
          asset {
            fixed(width: 50) {
              ...GatsbySanityImageFixed_withWebp
            }
          }
        }
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
      guarantees {
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
      stats {
        number
        description
      }
      steps {
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
      _rawDescription
      _rawSizing
      _rawShipping
      colorOne {
        hex
      }
      colorTwo {
        hex
      }
      testimonials {
        quote
        member
        memberImage {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
        }
        location
      }
      productBenefits {
        description
      }
      questions {
        question
        answer
      }
      variants {
        optionName
        image {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
        }
      }
    }
  }
`
