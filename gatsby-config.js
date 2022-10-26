require("dotenv").config({
  path: ".env",
});

module.exports = {
  siteMetadata: {
    title: `auto-welt`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: `${process.env.WORDPRESS_URL}/graphql`,
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 10,
            },
          },
        },
      },
    },
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 100,
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        interval: 500,
        timeout: 30000,
        web: [
          {
            name: "Roboto Condensed Condensed",
            file: "https://fonts.googleapis.com/css2?family=Roboto Condensed+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
};
