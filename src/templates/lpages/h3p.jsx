import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SocialProof from "../../components/Sections/SocialProof"
import CampaignForm from "../../components/drip/CampaignForm"
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import YouTube from '../../components/YouTube'
import BlockContent from '@sanity/block-content-to-react'




const H3p = ({ data }) => {

  const serializers = {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
    }
  }

  const home = data.sanityH3P
  return (
    <Layout>
      <SEO image={home.heroImage.asset.url} />
      <BackgroundImage
      className={'flex flex-col justify-center items-center bg-top p-5'}
      style={{minHeight: "60vh"}}
      fluid={home.heroImage.asset.fluid}
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/2 lg:pr-20">
              <h1 className="uppercase text-white text-3xl lg:text-4xl mt-4 font-bold" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)"}}>
                {home.title}
              </h1>
              <p className="text-white mt-5 text-l" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5"}}>
                {home.subtitle}
              </p>
              <div className="w-full" style={{height: "300px"}}>
                <YouTube youtubeId="BQRlncLXqTs" />
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <CampaignForm formID={home.formID} cta={home.cta}/>
            </div>
          </div>
        </div>
      </BackgroundImage>
      <SocialProof />
      <div className="py-20 px-5 container mx-auto">
        <div className="px-5 flex flex-row lg:justify-center overflow-scroll lg:overflow-hidden scroll-x-mandatory">
          {home.testimonials.map((i, count) => (
            <div key={count} className="flex flex-col justify-between rounded w-64 mx-3 snap-align-center" style={{minWidth: "275px"}}>
              <p className="text-xs italic">"{i.quote}"</p>
              <div className="flex flex-row items-center mt-6">
                <Img fixed={i.memberImage.asset.fixed} alt={i.member} width="50px" height="50px" className="rounded-full" />
                <div className="pl-2">
                  <h6 className="uppercase">{i.member}</h6>
                  <span className="text-black text-xs">{i.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-20 px-5 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/3">
              <Img fluid={home.offerImg.asset.fluid} alt="Offer Image" width="100%"/>
            </div>
            <div className="w-full lg:w-1/2 px-5 lg:px-20">
              <h3 className="uppercase text-3xl pb-5">
                {home.offerTitle}
              </h3>
              <BlockContent blocks={home._rawOfferBenefits} serializers={serializers} />
              <a href="#topForm" className="uppercase font-bold">Get My Free Download</a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 relative">
        <div className="container px-5 lg:mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/2 px-5 lg:px-20 mt-10 lg:mt-auto z-10">
              <p>{home.coachQuote}</p>
              <h3 className="uppercase text-3xl">
                Steve Cook
              </h3>
              <span className="text-xs uppercase font-bold text-gray-500">Your Coach</span>
            </div>
            <div className="w-full lg:w-1/3 text-right bg-white">
              <Img fluid={home.coachImage.asset.fluid} alt="Steve Cook"/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default H3p;

export const pageQuery = graphql`
  query H3pById($uid: String!) {
    sanityH3P(id: {eq: $uid}) {
      id
      title
      subtitle
      formID
      cta
      heroImage {
        asset {
          fluid(maxWidth: 1425) {
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
      offerImg {
        asset {
          url
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid_withWebp
          }
        }
      }
      offerTitle
      _rawOfferBenefits
      coachQuote
      coachImage{
        asset {
          url
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid_withWebp
          }
        }
      }
    }
  
  }
`