import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import CollectionList from "./CollectionsList"

const RenderCollections = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCollections {
        edges {
          node {
            title
            slug
            gallery {
              fluid {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  `)

  return <CollectionList data={data} />
}

export default RenderCollections