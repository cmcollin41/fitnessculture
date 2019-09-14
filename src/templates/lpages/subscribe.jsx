import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SocialProof from "../../components/SocialProof"
import CampaignForm from "../../components/drip/CampaignForm"
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'




const Subscribe = ({ data }) => {
  const home = data.allSanitySubscribe.edges[0].node
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
    </Layout>
  )
}

export default Subscribe;

export const pageQuery = graphql`
  query SubscribeById($uid: String!) {
    allSanitySubscribe(filter: {id: {eq: $uid}}) {
      edges {
        node {
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
        }
      }
    }
  }
`