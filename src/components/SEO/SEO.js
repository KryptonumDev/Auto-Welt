import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    linkedinUsername,
    facebookUsername,
    instagramUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      {/* linkedin */}
      <meta name="linkedin:card" content="summary_large_image" />

      {linkedinUsername && (
        <meta name="linkedin:creator" content={linkedinUsername} />
      )}

      {seo.title && <meta name="linkedin:title" content={seo.title} />}

      {seo.description && (
        <meta name="linkedin:description" content={seo.description} />
      )}

      {seo.image && <meta name="linkedin:image" content={seo.image} />}

      {/* facebook */}
      <meta name="facebook:card" content="summary_large_image" />

      {facebookUsername && (
        <meta name="facebook:creator" content={facebookUsername} />
      )}

      {seo.title && <meta name="facebook:title" content={seo.title} />}

      {seo.description && (
        <meta name="facebook:description" content={seo.description} />
      )}

      {seo.image && <meta name="facebook:image" content={seo.image} />}

      {/* instagram */}
      <meta name="instagram:card" content="summary_large_image" />

      {instagramUsername && (
        <meta name="instagram:creator" content={instagramUsername} />
      )}

      {seo.title && <meta name="instagram:title" content={seo.title} />}

      {seo.description && (
        <meta name="instagram:description" content={seo.description} />
      )}

      {seo.image && <meta name="linkedin:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

// const query = graphql`
//   query SEO {
//     site {
//       siteMetadata {
//         defaultTitle: title
//         titleTemplate
//         defaultDescription: description
//         siteUrl: url
//         defaultImage: image
//         linkedinUsername
//         facebookUsername
//         instagramUsername
//       }
//     }
//   }
// `