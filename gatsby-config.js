module.exports = {
  siteMetadata: {
    title: `eatdesignlove`,
    description: `eatdesignlove's blog`,
    url: `blog.eatdesignlove.com`,
    author: `@eatdesignlove`,
    googleSiteVerification: `qU85aGon70FhD1tiDsST9J8N6uNDB3ZZE8VONP3i0IY`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `babel-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 840,
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              theme: 'seti'
            }
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `eatdesignlove.com`,
        short_name: `eatdesignlove.com`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/favicon/favicon-32x32.png`,
      },
    },
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
