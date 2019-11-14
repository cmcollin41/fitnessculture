import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SocialProof from "../../components/Sections/SocialProof"
import CampaignForm from "../../components/drip/CampaignForm"
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'




const Basic = ({ data }) => {
  const home = data.sanityBasic
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
              <div className="mt-5">
                <h2 className="text-white uppercase">In this PDF you'll discover:</h2>
                {home.offerBenefits.map((benefit, i) => (
                 <p key={i} className="text-white">{benefit}</p>
                ))}
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
              <p>{home.offerSummary}</p>
              <a href="#topForm" className="uppercase font-bold">Get My Free Download</a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 relative">
        <div className="container px-5 lg:mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/3 text-right bg-white">
              <video muted playsInline autoPlay loop>
                <source src={home.appVideo.asset.url} />
                Your browser doesn't support video
              </video>
            </div>
            <div className="w-full lg:w-1/2 px-5 lg:px-20 personas z-10">
              <h3 className="uppercase text-3xl pb-5">
              {home.appTitle}
              </h3>
              <p>{home.appDescription}</p>
              <Link to="/programs" className="uppercase font-bold">See the Programs</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Basic;

export const pageQuery = graphql`
  query BasicById($uid: String!) {
    sanityBasic(id: {eq: $uid}) {
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
      offerBenefits
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
      offerSummary
      appTitle
      appDescription
      appVideo{
        asset {
          url
        }
      }
    }
  }
`