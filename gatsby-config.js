
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })

module.exports = {
  siteMetadata: {
    title: "Fitness Culture",
    titleTemplate: "%s",
    author: "@_fitnessculture",
    description:
      "Gain muscle, lose weight or improve your explosiveness, it's your world inside of Fitness Culture. Just know you will have thousands of members and coaches there to support you.",
    siteUrl: "https://www.fitnessculture.com", // No trailing slash allowed!
    image: "./static/stevecookpaintwall.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@_fitnessculture",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
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
        // defaultDataLayer: { platform: "gatsby" },
        // defaultDataLayer: function() {
        //   return {
        //     pageType: window.pageType,
        //   }
        // },
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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.fitnessculture.com',
        sitemap: 'https://www.fitnessculture.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop. This is required.
        // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
        // 'gatsby-source-shopify-test-shop.myshopify.com'.
        shopName: process.env.SHOPIFY_SHOP_NAME,

        // An API access token to your Shopify shop. This is required.
        // You can generate an access token in the "Manage private apps" section
        // of your shop's Apps settings. In the Storefront API section, be sure
        // to select "Allow this app to access your storefront data using the
        // Storefront API".
        // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,

        // Set verbose to true to display a verbose output on `npm run develop`
        // or `npm run build`. This prints which nodes are being fetched and how
        // much time was required to fetch and process the data.
        // Defaults to true.
        verbose: true,
        paginationSize: 250
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fitness Culture`,
        short_name: `Fitness Culture`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `./src/assets/fc-logo-black.png`
      },
    },
    // `gatsby-plugin-offline`
    'gatsby-plugin-remove-serviceworker'
  ],
}