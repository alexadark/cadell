/** @jsx jsx */
import { jsx, Box, Container, Flex } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const Page = ({ data }) => {
  const {
    title,
    content,
    // flexLayouts: { flexibleLayouts },
  } = data.wpPage
  return (
    <Layout>
      <h1>{title}</h1>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($uri: String!) {
    wpPage(uri: { eq: $uri }) {
      content
      title
      #   flexLayouts {
      #     flexibleLayouts {
      #       __typename
      #       ...sectionBlockFragment
      #       ...casesStudyBlockFragment

      #     }
      #   }
    }
  }
`
