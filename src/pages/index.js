import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import Img from 'gatsby-image'
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
import Tabs from "../components/Sections/Tabs"


const Index = ({ data }) => {
  const page = data.sanityIndexPage

  function getBlockComponent(block) {
    switch (block._type) {
      case 'heroSection':
        return <Hero key={block._key} section={block} />

      case 'socialProofSection':
        return <SocialProof key={block._key} section={block} />

      case 'faqSection':
        return <Faq key={block._key} section={block} />

      case 'testimonialSection':
        return <Testimonials key={block._key} section={block} />

      case 'programSection':
        return <Programs key={block._key} section={block} />

      case 'statSection':
        return <Stats key={block._key} section={block} />

      case 'guaranteeSection':
        return <Guarantees key={block._key} section={block} />

      case 'pricingSection':
        return <Pricing key={block._key} section={block} />
      
      case 'blockSection':
        return <Blocks key={block._key} section={block} />
      
      case 'tabSection':
        return <Tabs key={block._key} section={block} />

      default:
        return <div className="no_block_type" />
    }
  }

  
  return (
    <Layout>
      <SEO title={page.metaTitle} description={page.metaDescription} keywords={page.metaKeywords}/>
      {page.sections.map(block => getBlockComponent(block))}
    </Layout>

  )
}

export default Index

export const pageQuery = graphql`

query IndexPage{
  sanityIndexPage{
    id
    title
    metaTitle
    metaDescription
    metaKeywords
    sections {
      ... on SanityStepSection {
        _key
        _type
        title
        description
        ctas {
          ... on SanityDownloadCTA {
            id
            _key
            _type
            action
          }
          ... on SanityBasicCTA {
            id
            _key
            _type
            action
            link
          }
        }
        steps {
          title
          description
          _type
          _key
        }
      }
      ... on SanityHeroSection {
        _key
        _type
        backgroundImage {
          asset {
            fluid(maxWidth: 1400) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
        }
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
            _rawText
            alignment
            ctas {
              ... on SanityBasicCTA {
                _key
                _type
                link
                action
              }
              ... on SanityDownloadCTA {
                _key
                _type
                action
              }
            }
          }
          ... on SanityBlockVideo {
            _key
            _type
            video {
              asset {
                url
              }
            }
          }
          ... on SanityDripForm {
            _key
            _type
            formId
            cta
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
      ... on SanityTabSection {
        _key
        _type
        tabs {
          link
          cta
          description
          name
          title
          image {
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid_withWebp
              }
            }
          }
          testimonials {
            quote
            member
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
      }
      ... on SanityFaqSection {
        _key
        _type
        faqs {
          id
          question
          answer
        }
        ctas {
          ... on SanityBasicCTA {
            _key
            _type
            link
            action
          }
          ... on SanityDownloadCTA {
            _key
            _type
            action
          }
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
              fluid(maxWidth: 500) {
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
        ctas {
          ... on SanityBasicCTA {
            _key
            _type
            link
            action
          }
          ... on SanityDownloadCTA {
            _key
            _type
            action
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
        ctas {
          ... on SanityBasicCTA {
            _key
            _type
            link
            action
          }
          ... on SanityDownloadCTA {
            _key
            _type
            action
          }
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
        ctas {
          ... on SanityBasicCTA {
            _key
            _type
            link
            action
          }
          ... on SanityDownloadCTA {
            _key
            _type
            action
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
            _rawText
            alignment
            ctas {
              ... on SanityBasicCTA {
                _key
                _type
                link
                action
              }
              ... on SanityDownloadCTA {
                _key
                _type
                action
              } 
            }
          }
          ... on SanityBlockVideo {
            _key
            _type
            video {
              asset {
                url
              }
            }
          }
          ... on SanityDripForm {
            _key
            _type
            formId
            cta
          }
        }
      }
    }
  }
}
`
