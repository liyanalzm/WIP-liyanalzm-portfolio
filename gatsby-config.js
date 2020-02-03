module.exports = {
  siteMetadata: {
    title: `Liyana Lazim`,
    description: `All about Liyana Lazim is here. Her education, portfolio, achievements and many more.`,
    author: `@liyanalzm`,
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
        name: `Liyana Lazim's portfolio`,
        short_name: `LL's Portfolio`,
        start_url: `/`,
        background_color: `#4c4c4c`,
        theme_color: `#4c4c4c`,
        display: `standalone`,
        icon: `src/images/oleander.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/
        }
      }
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        ssr: true
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ],
}
