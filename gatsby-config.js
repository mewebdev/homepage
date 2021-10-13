module.exports = {
  siteMetadata: {
    title: `project ME`,
    description: `A creative file system for brainstorming`,
    author: `@hideodaikoku`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-anchor-links`,
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
      resolve: `gatsby-plugin-react-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `ja`],
        defaultLanguage: `en`,
        redirect: true,
      },
    },
  ],
}
