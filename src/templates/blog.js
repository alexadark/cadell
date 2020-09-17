/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Layout from "../components/Layout"
import { ArchiveContent } from "../components/archive";

const Blog = ({ data, pageContext }) => {
  const posts = data.allWpPost.nodes
  return (
    <Layout>
      <ArchiveContent posts={posts.nodes} ctx={pageContext}/>
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
