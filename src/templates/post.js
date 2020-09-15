/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const Post = ({ data }) => {
  const { content, featuredImage, title } = data.wpPost
  return (
    <Layout>
      <h1>{title}</h1>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query($uri: String!) {
    wpPost(uri: { eq: $uri }) {
      content
      commentStatus
      databaseId
      ...PostTemplateFragment
    }
  }
`
