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
        // {
        //     resolve: `gatsby-plugin-facebook-pixel`,
        //     options: {
        //         pixelId: "pixel id here",
        //     },
        // },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "G-3CW10V0RC3",
                head: false,
                pageTransitionDelay: 0,
                defer: false,
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                enableWebVitalsTracking: true,
            },
        },
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
        // {
        //     resolve: `gatsby-plugin-offline`,
        //     options: {
        //         precachePages: [
        //             `/kolekcje-modeli/`,
        //             `/kolekcje-modeli/*`,
        //             `/artykuly/*`,
        //             `/wystawy/*`,
        //             "/terminarz/",
        //             "/sklep/",
        //             "/regulamin-wystaw/",
        //             "/polityka-prywatnosci/",
        //             "/oferta/",
        //             "/o-mnie/",
        //             "/kontakt/",
        //         ],
        //     },
        // },
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
                host: 'https://auto-welt.gatsbyjs.io',
                sitemap: 'https://auto-welt.gatsbyjs.io/sitemap/sitemap-0.xml',
                policy: [{ userAgent: '*', allow: '/' }]
            }
        },
    ],
};
