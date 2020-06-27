const config = require("./config")
const slashes = require("remove-trailing-slash")
const wpUrl = slashes(config.wordPressUrl)

module.exports = {
  siteMetadata: {
    title: `cadell`,
    description: `redefining <span>Art Advisory</span>`,
    author: `@alexadark`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sass",
    "@bumped-inc/gatsby-plugin-optional-chaining",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -50,
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `${wpUrl}/graphql`,
        verbose: true,
        excludeFields: [`blocksJSON`, `saveContent`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
