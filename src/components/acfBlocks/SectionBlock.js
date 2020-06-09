/** @jsx jsx */
import { jsx, Button, Flex, Container } from "theme-ui"
import { graphql, Link } from "gatsby"

export const fragment = graphql`
  fragment sectionBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_SectionBlock {
    anchor
    title
    content
    quote
    quoteAuthor
    authorRole
    image {
      localFile {
        childImageSharp {
          fluid(maxWidth: 600, quality: 80, toFormat: JPG) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    painter
    paintTitle
    status
    linkTitle
    link {
      title
      url
    }
    legalText
  }
`

export const SectionBlock = ({
  anchor,
  title,
  content,
  quote,
  quoteAuthor,
  authorRole,
  image,
  painter,
  paintTitle,
  status,
  linkTitle,
  link,
  legalText,
}) => {
  return <Container>{title}</Container>
}
