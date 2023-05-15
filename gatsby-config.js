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
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "GTM-M3ZR7D9",
                includeInDevelopment: false,
                defaultDataLayer: { platform: "gatsby" },
            },
        },
        {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
                pixelId: "699546608231911",
            },
        },
        {
            resolve: "gatsby-source-wordpress",
            options: {
                url: `${process.env.GATSBY_WORDPRESS_URL}/graphql`,
                schema: {
                  timeout: 30000000,
                },
                type: {
                  MediaItem: {
                    localFile: {
                        maxFileSizeBytes: 52428800, // 50Mb
                        requestConcurrency: 5,
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
                    breakpoints: [768, 1440, 1920],
                    backgroundColor: `transparent`,
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
                icon: `src/images/icon.png`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#fff`,
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
                host: 'https://auto-welt.info',
                sitemap: 'https://auto-welt.info/sitemap-0.xml',
                policy: [{ userAgent: '*', allow: '/' }]
            }
        },
    ],
};