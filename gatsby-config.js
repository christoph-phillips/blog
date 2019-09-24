module.exports = {
  siteMetadata: {
    title: `Chris Phillips`,
    description: `Run Bike Code`,
    author: `@christoph-phillips`,
  },
  plugins: [
    {
            resolve: `gatsby-source-filesystem`,
                options: {
                    path: `${__dirname}/static/assets`,
                    name: 'images',
                },
        },
              {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `content`,
          path: `${__dirname}/content`,
        },
      },
      {
            resolve: `gatsby-source-filesystem`,
                options: {
                    path: `${__dirname}/content/blog`,
                    name: 'blog-posts',
                },
        },
        {
            resolve: `gatsby-source-filesystem`,
                options: {
                    path: `${__dirname}/content/portfolio`,
                    name: 'portfolio',
                },
        },
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
    `gatsby-plugin-netlify-cms`,
    'gatsby-transformer-remark',
    `gatsby-plugin-styled-components`,
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
     
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            maxWidth: 1200,
                            withWebp: true,
                            quality: 100,
                            tracedSVG: false,
                            showCaptions: true
                        },
                    },
                ],
            },
        },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}