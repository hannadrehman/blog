require(`dotenv`).config();

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: `HannadRehman`,
    siteTitleAlt: `HannadRehman`,
    siteHeadline: `Tech Blogs`,
    siteUrl: `https://hannadrehman.com/`,
    siteDescription: `Software engineering problems and their solutions`,
    siteLanguage: `en`,
    siteImage: ``,
    author: `hannad rehman`,
    social: {
      email: "hannad63@gmail.com",
      github: "https://github.com/hannadrehman",
      linkedin: "https://www.linkedin.com/in/hannad-rehman/",
      twitter: "https://twitter.com/hannad_rehman",
      twitterFollow:
        "https://twitter.com/intent/follow?screen_name=hannad_rehman",
      twitterId: "hannad_rehman",
    },
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        interval: 300,
        timeout: 30000,
        web: [
          {
            name: `IBM Plex Sans`,
            file: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HannadRehman`,
        short_name: `Tech Blogs`,
        description: `Software Engineering problems and their solutions`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug;
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`;

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                };
              }),
            query: `
              {
                allPost(sort: { fields: date, order: DESC }) {
                  nodes {
                    title
                    date(formatString: "MMMM D, YYYY")
                    excerpt
                    slug
                  }
                }
              }
            `,
            output: `rss.xml`,
            title: `HannadRehman`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-HJKPESEYSY"],
        gtagConfig: {
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },

    //{
    //resolve: "gatsby-plugin-prettier-eslint",
    //options: {
    //prettier: {
    //patterns: [
    //// the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
    //"**/*.{css,scss,less}",
    //"**/*.{json,json5}",
    //"**/*.{graphql}",
    //"**/*.{md,mdx}",
    //"**/*.{html}",
    //"**/*.{yaml,yml}",
    //],
    //},
    //eslint: {
    //patterns: "**/*.{js,jsx,ts,tsx}",
    //customOptions: {
    //fix: true,
    //cache: true,
    //},
    //},
    //},
    //},
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
     },
    },
  ].filter(Boolean),
};
