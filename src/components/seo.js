import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title, image }) {
  // const schema = {}
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaTitle =
          title || data.site.siteMetadata.title
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaImage = 
          image || data.site.siteMetadata.image
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              { image: "image",
                content: metaImage
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: 'summary',
              },
              {
                name: `twitter:site`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:image`,
                content: metaImage,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: metaTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `keywords`,
                content: keywords
              }
            ]}
              // .concat(
              //   keywords.length > 0
              //     ? {
              //         name: `keywords`,
              //         content: keywords.join(`, `),
              //       }
              //     : []
              // )
              // .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        image
        description
        author
      }
    }
  }
`


