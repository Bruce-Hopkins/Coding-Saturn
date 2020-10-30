module.exports = {
  siteMetadata: {
    title: `Coding Saturn`,
    description: `Start learing Python, C++ and more.`,
    author: `@Infinidreams`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `The Coding Saturn`,
        short_name: `Coding Saturn`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#42BFDD`,
        display: `minimal-ui`,

      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],

  pathPrefix: "/Coding-Saturn",
  
}
