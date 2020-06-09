/** @jsx jsx */
import { jsx, Box, Container, Flex } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { SectionBlock, CaseStudiesBlock } from "../components/acfBlocks"

const Page = ({ data }) => {
  const {
    title,
    content,
    flexLayouts: { flexibleLayouts },
  } = data.wpPage
  return (
    <Layout>
      {flexibleLayouts &&
        flexibleLayouts.length > 0 &&
        flexibleLayouts.map(block => {
          switch (block.__typename) {
            case "WpPage_Flexlayouts_FlexibleLayouts_CaseStudiesBlock":
              return <CaseStudiesBlock {...block} />
            case "WpPage_Flexlayouts_FlexibleLayouts_SectionBlock":
              return <SectionBlock {...block} />

            default:
              return ""
          }
        })}
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($uri: String!) {
    wpPage(uri: { eq: $uri }) {
      content
      title
      flexLayouts {
        flexibleLayouts {
          __typename
          ...sectionBlockFragment
          ...caseStudiesBlockFragment
        }
      }
    }
  }
`
