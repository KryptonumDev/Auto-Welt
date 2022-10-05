require("dotenv").config({
  path: ".env",
})

module.exports = {
    siteMetadata: {
        title: `auto-welt`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
          resolve: 'gatsby-source-wordpress',
          options: {
            "url": "https://data.auto-welt.info/graphql"
          }
        },
        "gatsby-plugin-image",
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
              defaults: {
                formats: [`auto`, `webp`],
                placeholder: `blurred`,
                quality: 90,
              }
            }
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-styled-components",
        "gatsby-plugin-react-helmet",
        "gatsby-background-image",
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
                        name: "Roboto",
                        file: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
                    },
                    {
                        name: "Nocturne Serif",
                        file: "https://fonts.googleapis.com/css2?family=PT+Serif",
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