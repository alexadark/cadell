/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { ArchiveContent } from "../components/archive"
import SEO from "../components/seo/Seo"

const Blog = ({ data, pageContext }) => {
  const posts = data.allWpPost.nodes
  // console.log('posts'. posts);

  return (
    <Layout>
      <SEO title="Cadellco Blog" />
      <ArchiveContent posts={posts} ctx={pageContext} />
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query GET_POSTS($skip: Int!, $limit: Int!) {
    allWpPost(limit: $limit, skip: $skip, sort: { order: DESC, fields: date }) {
      nodes {
        ...PostTemplateFragment
      }
    }
  }
`
