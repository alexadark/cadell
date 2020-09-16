/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { PostEntry } from "../components/post"

const Post = ({ data, pageContext }) => {
  const post = data.wpPost
  return (
    <Layout>
      <Container sx={{ maxWidth: "l" }}>
        <PostEntry post={post} ctx={pageContext} location="single" />
      </Container>
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
