import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Sections
import Hero from "../components/Sections/Hero"
import SocialProof from "../components/Sections/SocialProof"
import Stats from "../components/Sections/Stats"
import Testimonials from "../components/Sections/Testimonials"
import Faq from "../components/Sections/Faq"
import Programs from "../components/Sections/Programs"
import Guarantees from "../components/Sections/Guarantees"
import Pricing from "../components/Sections/Pricing"
import Blocks from "../components/Sections/Blocks"

const Webpage = ({data}) => {
  const webpage = data.sanityWebpage

  function getBlockComponent(block) {
    switch (block._type) {
      case 'heroSection':
        return <Hero key={block.id} section={block} />

      case 'socialProofSection':
        return <SocialProof key={block.id} section={block} />

      case 'faqSection':
        return <Faq key={block.id} section={block} />

      case 'testimonialSection':
        return <Testimonials key={block.id} section={block} />

      case 'programSection':
        return <Programs key={block.id} section={block} />

      case 'statSection':
        return <Stats key={block.id} section={block} />

      case 'guaranteeSection':
        return <Guarantees key={block.id} section={block} />

      case 'pricingSection':
        return <Pricing key={block.id} section={block} />
      
      case 'blockSection':
        return <Blocks key={block.id} section={block} />

      default:
        return <div className="no_block_type" />
    }
  }



  return (
    <Layout>
      <SEO title={webpage.metaTitle} description={webpage.metaDescription} keywords={webpage.metaKeywords}/>
      {webpage.sections.map(block => getBlockComponent(block))}
    </Layout>
  )
}

export default Webpage

export const query = graphql`
  query WebpageById($id: String!){
    sanityWebpage(id: {eq: $id}) {
      id
      title
      metaTitle
      metaDescription
      metaKeywords
      sections {
        ... on SanityHeroSection {
          _key
          _type
          title
          description
          link
          image {
            asset {
              fluid(maxWidth: 1400) {
                ...GatsbySanityImageFluid_withWebp
              }
            }
          }
        }
        ... on SanitySocialProofSection {
          _key
          _type
          images {
            image {
              asset {
                fluid(maxWidth: 300) {
                  ...GatsbySanityImageFluid_withWebp
                }
              }
            }
          }
        }
        ... on SanityFaqSection {
          _key
          _type
          faqs {
            id
            question
            answer
          }
        }
        ... on SanityProgramSection {
          _key
          _type
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
                fluid(maxWidth: 300) {
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
        ... on SanityStatSection {
          _key
          _type
          title
          description
          stats {
            number
            description
          }
        }
        ... on SanityTestimonialSection {
          _key
          _type
          title
          description
          testimonials {
            member
            gender
            quote
            location
            memberImage {
              asset {
                fixed(width: 50) {
                  ...GatsbySanityImageFixed_withWebp
                }
              }
            }
          }
        }
        ... on SanityPricingSection {
          _key
          _type
          title
          description
          pricing {
            number
            title
            benefits {
              description
            }
          }
        }
        ... on SanityBlockSection {
          _key
          _type
          title
          title
          description
          link
          blocks {
            ... on SanityBlockImage {
              _key
              _type
              image {
                asset {
                  fluid(maxWidth: 1000) {
                    ...GatsbySanityImageFluid_withWebp
                  }
                }
              }
            }
            ... on SanityBlockText {
              _key
              _type
              title
              _rawBody
            }
          }
        }
      }
    }
  }
`


