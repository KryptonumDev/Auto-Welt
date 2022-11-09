/** @format */

require("dotenv").config({
    path: ".env",
});

module.exports = {
    siteMetadata: {
        title: `auto-welt`,
        siteUrl: `https://www.auto-welt.info`,
    },
    plugins: [
        {
            resolve: "gatsby-source-wordpress",
            options: {
                url: `${process.env.GATSBY_WORDPRESS_URL}/graphql`,
                type: {
                    MediaItem: {
                        localFile: {
                            requestConcurrency: 10,
                        },
                    },
                },
            },
        },
        "gatsby-plugin-sitemap",
        "gatsby-plugin-image",
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `webp`],
                    placeholder: `blurred`,
                    quality: 90,
                },
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-styled-components",
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Auto-welt`,
                short_name: `Auto-welt`,
                description: `Wystawy modeli samochodów`,
                lang: `pl`,
                display: `standalone`,
                //icon: `src/images/icon.png`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#fff`,
            },
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [
                    `/kolekcje-modeli/`,
                    `/kolekcje-modeli/*`,
                    `/artykuly/*`,
                    `/wystawy/*`,
                    "/terminarz/",
                    "/sklep/",
                    "/regulamin-wystaw/",
                    "/polityka-prywatnosci/",
                    "/oferta/",
                    "/o-mnie/",
                    "/kontakt/",
                ],
            },
        },
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
                custom: [
                    {
                        name: "Nocturne Serif",
                        file: "/src/styles/style.css",
                    },
                ],
                web: [
                    {
                        name: "Roboto Condensed",
                        file: "https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap",
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
        {
          resolve: 'gatsby-plugin-robots-txt',
          options: {
            host: 'https://auto-welt.gatsbyjs.io',
            sitemap: 'https://auto-welt.gatsbyjs.io/sitemap/sitemap-0.xml',
            policy: [{ userAgent: '*', allow: '/' }]
          }
        },
    ],
};
