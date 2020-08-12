module.exports = {
  siteMetadata: {
    title: `eatdesignlove`,
    description: `eatdesignlove's blog`,
    url: `blog.eatdesignlove.com`,
    author: `@eatdesignlove`,
    googleSiteVerification: `qU85aGon70FhD1tiDsST9J8N6uNDB3ZZE8VONP3i0IY`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-39362681-4',
        head: false,
        anonymize: true,
        respectDNT: true,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans KR\:400,500`,
          `space mono\:400,700`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
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
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     policy: [{ userAgent: '*', allow: '/' }]
    //   }
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
