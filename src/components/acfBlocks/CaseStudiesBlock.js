/** @jsx jsx */
import { jsx, Button, Flex, Container } from "theme-ui"
import { graphql, Link } from "gatsby"

export const fragment = graphql`
  fragment caseStudiesBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_CaseStudiesBlock {
    anchor
    title
    caseStudies {
      title
      content
    }

    link {
      title
      url
    }
  }
`

export const CaseStudiesBlock = ({ anchor, title, caseStudies }) => {
  return <Container>{title}</Container>
}
