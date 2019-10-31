import React, {useContext} from 'react'
import StoreContext from '../context/StoreContext'
import {graphql} from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"
import SocialProof from "../components/SocialProof"
import Img from 'gatsby-image'

// CSS
import '../css/global.css'

// Images
import circles from '../assets/circles.svg'


const Ebook = ({ data }) => {

  const product = data.shopifyProduct
  // const node = data.sanityProduct

  const context = useContext(StoreContext)
 
  const handleAddToCart = () => {
    alert(context.adding)
    context.addVariantToCart(product.variants[0].shopifyId, 1)
    setTimeout(() => {
      context.setCartPreview(false)
    }, 5000);
  }
  

    
  return (

    <Layout>
      <SEO title={product.title}/>
      {/* Add Hex colors to Sanity */}
      <div className="h-2 w-full" style={{backgroundImage: 'linear-gradient(to right, #1565c0,#2196f3)'}}></div>
      <div className="py-10 lg:py-20 relative">
        <div className="absolute h-full bottom-0 left-0 overflow-x-hidden" style={{zIndex: "-10"}}>
          <img src={circles} alt="circles" width="200px" height="100%" style={{transform: "scale(-1)"}}/>
        </div>
        <div className="hidden lg:block absolute h-full" style={{transform: "translate(-35%, 50%)"}}>
          <h2 className="uppercase text-gray-300 text-3xl" style={{transform: "rotate(90deg)"}}>Fitness Program</h2>
        </div>
        <div className="container mx-auto px-5 pb-5 pt-3">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="statement text-4xl lg:text-5xl leading-none">
                {product.title}
              </h1>
              <p className="text-xl mt-5" style={{ maxWidth: "500px" }}>
                {product.subtitle}
              </p>
              <div className="mt-10 mb-12 flex flex-row flex-wrap lg:justify-start justify-center">
                <div className="w-32 text-center flex flex-col p-2 angle-border">
                  {/* <Img className="mx-auto" alt={product.attributes[0].title} fixed={product.attributes[0].icon.asset.fixed} /> */}
                  <p className="uppercase text-xs">Benefit</p>
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
                
                  <p className="uppercase text-xs">Benefit</p>
                </div>
              </div>
              <div className="mt-10 flex flex-row flex-wrap items-center">
                <a href="#pricing" className="btn-lg text-white rounded shadow-md" style={{backgroundImage: 'linear-gradient(to right, #1565c0,#2196f3)'}}>
                  Start Program
                </a>
                <span className="ml-4 text-xs font-light">$2 per Workout</span>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative mt-10 lg:mt-auto">
              <Img fluid={product.images[0].localFile.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

    <SocialProof />

    <div className="container mx-auto px-5 my-0 lg:my-10">
      <div className="w-full lg:w-1/3 px-5">
        <button type="submit" disabled={context.adding} onClick={handleAddToCart} className={"px-2 py-4 bg-black text-white uppercase w-full rounded " + (context.adding ? "bg-green-500 cursor-not-allowed" : "")}>
          {context.adding ? "Adding to cart..." : "Add to Cart"}
        </button>
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
      _rawDescription
      _rawSizing
      _rawShipping
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
