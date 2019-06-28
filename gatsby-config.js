/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `fitness-culture`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        linkResolver: ({ node, key, value }) => program => `/${program.uid}`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fitness Culture`,
        short_name: `Fitness Culture`,
        start_url: `/`,
        background_color: `#f9f9f9`,
        theme_color: `#111`,
        display: `standalone`,
        icon: `./static/fc-logo-black.png`
      },
    },
    `gatsby-plugin-offline`
  ],
  siteMetadata: {
    title: "Fitness Culture | Last Set, Best Set | Join Today",
    titleTemplate: "%s",
    description:
      "Gain muscle, lose weight or improve your explosiveness, it's your world inside of Fitness Culture. Just know you will have thousands of members and coaches there to support you.",
    url: "https://www.fitnessculture.com", // No trailing slash allowed!
    image: "./static/fc-logo-horizontal-black.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@fitnessculture",
  }
}