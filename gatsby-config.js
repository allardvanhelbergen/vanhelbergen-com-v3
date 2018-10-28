module.exports = {
  siteMetadata: {
    title: `Allard van Helbergen's Official Homepage | UX Designer | Frontend Aficionado`,
    main_title: `Allard van Helbergen's Official Homepage`,
    sub_title: 'UX Designer | Frontend Aficionado',
    seo_title: `Allard van Helbergen's Official Homepage | UX Designer | Frontend Aficionado`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#eee',
        theme_color: '#b4da55',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
