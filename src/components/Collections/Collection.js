import React from "react"
import { Link } from "gatsby"

import Img from "gatsby-image"

const Collection = ({ node }) => (
  <Link to={`/collection/${node.slug}`}>
    {node.thumbnail && <Img fluid={node.thumbnail.fluid} />}
  </Link>
)

export default Collection
