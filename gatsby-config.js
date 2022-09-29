require("dotenv").config({
  path: ".env",
})

module.exports = {
    siteMetadata: {
        title: `auto-welt`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        // {
        //   resolve: 'gatsby-source-wordpress',
        //   options: {
        //     "url": ""
        //   }
        // },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
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
                        file: "https://fonts.googleapis.com/css2?family=Roboto",
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