module.exports = {
  siteMetadata: {
    title: `Radileaf`,
    description: `Radileaf, specialisten inom radiologiska webtjänster`,
    author: `@eriklofblad`,
    menuLinks: [
      {
        name: "Hem",
        link: "/",
      },
      {
        name: "Produkter",
        link: "/produkter/",
      },
      {
        name: "Om",
        link: "/om/",
      },
    ],
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Logo-1.png`, // This path is relative to the root of the site.
      },
    },
    { resolve: "gatsby-plugin-styled-components" },
    { resolve: "gatsby-plugin-typescript" },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans", "Quicksand", "Raleway", "Cormorant Garamond"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
