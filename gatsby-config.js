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
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'mokttt7p',
        dataset: 'production',
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.MY_SANITY_TOKEN,
      },
    },
    'gatsby-plugin-stripe',
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Product','Sku','Subscription'],
        secretKey: `${process.env.STRIPE_SECRET_KEY}`,
        downloadFiles: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-T85L6Q2",
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
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
        background_color: `#111`,
        theme_color: `#111`,
        display: `standalone`,
        icon: `./src/assets/fc-logo-horizontal-white.svg`
      },
    },
    `gatsby-plugin-offline`
  ],
  siteMetadata: {
    title: "Fitness Culture",
    titleTemplate: "%s",
    author: "@_fitnessculture",
    description:
      "Gain muscle, lose weight or improve your explosiveness, it's your world inside of Fitness Culture. Just know you will have thousands of members and coaches there to support you.",
    url: "https://www.fitnessculture.com", // No trailing slash allowed!
    image: "./src/assets/fc-logo-horizontal-black.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@_fitnessculture",
  }
}