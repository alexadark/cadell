/** @jsx jsx */
import { jsx, Flex, Container, Grid } from "theme-ui"
import CSItem from "./CSItem"
import { graphql } from "gatsby"

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
  return (
    <Flex
      id={anchor || ""}
      className="caseStudies"
      sx={{
        position: "relative",
        px: "30px !important",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Container>
        <h3 sx={{ fontFamily: "body", mb: 100, ml: 35 }}>{title}</h3>
        <Grid columns={[1, 1, 2]} gap={40} className="caseStudiesWrap">
          {caseStudies &&
            caseStudies.map((cs, i) => {
              return <CSItem key={i} title={cs.title} content={cs.content} />
            })}
        </Grid>
      </Container>
    </Flex>
  )
}
