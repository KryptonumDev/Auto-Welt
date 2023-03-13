import { graphql } from "gatsby"
import React from "react"

export default function ProductPage({ data }) {
  return (
    <div>
      product page
    </div>
  )
}

export { Head } from "../components/Head/Head"

// export const query = graphql`
// query productPageQuery ($id: String!){
//   wpProduct(id: {eq: $id}) {
//     seo {
//       canonical
//       metaDesc
//       opengraphSiteName
//       title
//       opengraphUrl
//       opengraphImage {
//         localFile {
//           publicURL
//         }
//       }
//     }
//   }
// }
// `;
