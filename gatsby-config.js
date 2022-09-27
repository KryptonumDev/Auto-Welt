module.exports = {
  siteMetadata: {
    title: `auto-welt`,
    siteUrl: `https://www.yourdomain.tld`
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
    "gatsby-plugin-styled-components"
  ]
};