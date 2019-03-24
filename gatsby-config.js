module.exports = {
  siteMetadata: {
    title: `Luke Todd - Developer & Designer`,
    description: `Luke Todd - Developer Portfolio 2019`,
    author: `Luke Todd`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // The top level query type, can be anything you want!
        typeName: 'GCMS',
        // The field you'll query against, can also be anything you want.
        fieldName: 'gcms',
        // Your API endpoint, available from the dashboard and settings window.
        url:
          'https://api-euwest.graphcms.com/v1/cjrf5yac662j101el2t189je3/master',
      },
    },
    {
      resolve: 'gatsby-plugin-react-axe',
      options: {
        showInProduction: false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luke Todd - Developer and Designer`,
        short_name: `Luke Todd`,
        start_url: `/`,
        background_color: `#1F1E1E`,
        theme_color: `#31F0C4`,
        display: `standalone`,
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/, // See below to configure properly
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
}
