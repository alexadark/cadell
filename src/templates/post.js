/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { PostEntry } from "../components/post"
import SEO from "../components/seo/Seo"

const Post = ({ data, pageContext }) => {
  const post = data.wpPost
  const { postShareImage, featuredImage } = post
  const shareImage = postShareImage?.shareimage
    ? postShareImage.shareimage.localFile.publicURL
    : featuredImage?.localFile?.publicURL

  // const shareImage = postShareImage?.shareImage?.localFile?.publicURL

  return (
    <Layout>
      <SEO title={post.title} shareImage={shareImage} />
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
