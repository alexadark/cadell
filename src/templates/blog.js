/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Layout from "../components/Layout"

const Blog = ({ data }) => {
  const posts = data.allWpPost.nodes
  return (
    <Layout>
      {posts &&
        posts.map(post => {
          return <h1>{post.title}</h1>
        })}
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
