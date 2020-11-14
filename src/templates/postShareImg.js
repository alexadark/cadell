/** @jsx jsx */
import { jsx, AspectImage, Flex } from "theme-ui"
import { graphql, withPrefix } from "gatsby"

const postShareImg = ({ data }) => {
  const post = data.wpPost
  const { title, featuredImage } = post
  const isLightTitle = featuredImage.altText !== "darkTitle"
  return (
    <Flex
      sx={{
        alignItems: "center",
        backgroundImage: `url(${featuredImage.sourceUrl})`,
        width: "100%",
        height: 250,
        backgroundSize: "cover",
        px: 50,
      }}
    >
      <h2
        className={`${isLightTitle ? "light" : ""}`}
        sx={{
          color: "black",
          fontSize: 36,
          textShadow: "4px 4px 15px rgba(0, 0, 0, .8)",
          "&.light": { color: "white" },
        }}
      >
        {title}
      </h2>
    </Flex>
  )
}

export default postShareImg

export const pageQuery = graphql`
  query($uri: String!) {
    wpPost(uri: { eq: $uri }) {
      title
      featuredImage {
        sourceUrl
      }
    }
  }
`
