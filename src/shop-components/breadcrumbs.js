import { Link } from "gatsby";
import React from "react"
import styled from "styled-components";

const createBreadcrumbs = (breadCrumbs) => {
  const items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": 'Sklep',
      "item": '/sklep/'
    }
  ]

  breadCrumbs.forEach((el, index) => {
    items.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": el.name,
      "item": el.url
    })
  });

  return items
}

export default function BreadCrumbs({ pageContext }) {
  if (!pageContext?.breadCrumbs) return null
  const breadCrumbsItems = createBreadcrumbs(pageContext.breadCrumbs)
  return (
    <>
      {breadCrumbsItems.length > 1 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadCrumbsItems
          })}
        </script>
      )}
      <Flex>
        {pageContext.breadCrumbs.map((el, index) => {
          if (pageContext.breadCrumbs.length - 1 === index) {
            return (
              <span to={el.url} key={index}>{el.item}</span>
            )
          }
          return (
            <>
              <Link to={el.url} key={index}>{el.item}</Link>
              <span>/</span>
            </>
          )
          })}
      </Flex>
    </>
  )
}

const Flex = styled.div`
  max-width: 1080px;
  margin: 0px auto;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;

  a, span{
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 135.19%;
    text-decoration: none;

    text-align: center;
    font-feature-settings: 'pnum' on, 'onum' on;

    color: #000000;
    white-space: nowrap;

    &:last-child{
      font-weight: 600;
    }

  }
  span{
    padding: 0 5px 0 3px;
  }
`