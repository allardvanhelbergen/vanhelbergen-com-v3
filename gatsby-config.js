module.exports = {
  siteMetadata: {
    title: `Allard van Helbergen's Official Homepage | UX Designer | Frontend Aficionado`,
    main_title: `Allard van Helbergen's Official Homepage`,
    sub_title: 'UX Designer | Frontend Aficionado',
    seo_title: `Allard van Helbergen's Official Homepage | UX Designer | Frontend Aficionado`,
  },
  plugins: [
    // ORDER MATTERS!
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Allard van Helbergen's Official Homepage",
        short_name: 'Allard',
        start_url: '/',
        background_color: '#eee',
        theme_color: '#f5a52b',
        display: 'minimal-ui',
        icon: 'static/avh-monogram.svg',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/templates/default-page-template.js`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              tracedSVG: { color: '#f90', turnPolicy: 'TURNPOLICY_MAJORITY' },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              tracedSVG: { color: '#f90', turnPolicy: 'TURNPOLICY_MAJORITY' },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
