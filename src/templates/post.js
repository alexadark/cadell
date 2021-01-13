/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { PostEntry } from "../components/post"
import SEO from "../components/seo/Seo"

const Post = ({ data, pageContext }) => {
  const post = data.wpPost
  return (
    <Layout>
      <SEO title={post.title} />
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
