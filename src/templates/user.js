/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo/Seo"
import { ArchiveContent } from "../components/archive"

const User = ({ data, pageContext }) => {
  console.log("data", data, "ctx", pageContext)
  const posts = data.allWpPost.nodes
  const { name, uri, slug } = data.wpUser

  return (
    <Layout>
      <SEO title={name} />
      <Container sx={{ maxWidth: "xl", mt: [0, 40, 60] }}>
        <h1>Posts from {name}</h1>
      </Container>
      <ArchiveContent posts={posts} ctx={pageContext} name={name} />
    </Layout>
  )
}

export default User

export const pageQuery = graphql`
  query GET_POSTS_BY_USER($slug: String!, $limit: Int!, $skip: Int!) {
    allWpPost(
      filter: { author: { slug: { eq: $slug } } }
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: date }
    ) {
      nodes {
        ...PostTemplateFragment
      }
    }
    wpUser(slug: { eq: $slug }) {
      nicename
      nickname
      name
      slug
      id
      uri
      avatar {
        url
      }
    }
  }
`
