/** @jsx jsx */
import { jsx, Flex, Container, Grid } from "theme-ui"
import CSItem from "./CSItem"
import { graphql } from "gatsby"
import linkStyles from "../../styles/bottomLinkStyle"
import { AnchorLink } from "gatsby-plugin-anchor-links"

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

export const CaseStudiesBlock = ({ anchor, title, caseStudies, link }) => {
  return (
    <Flex
      id={anchor || ""}
      className="caseStudies"
      sx={{
        position: "relative",
        px: [0, "30px !important"],
        py: 25,
        scrollMarginTop: 80,
        // height: ["auto", "auto", "100vh"],
        alignItems: "center",
        "&:nth-child(odd)": {
          bg: "light",
        },
      }}
    >
      <Container sx={{ ...linkStyles }}>
        <h3 sx={{ fontFamily: "body", mb: [20, 20, 50], ml: 35 }}>{title}</h3>
        <Grid columns={[1, 1, 2]} gap={40} className="caseStudiesWrap">
          {caseStudies &&
            caseStudies.map((cs, i) => {
              return (
                <CSItem
                  className="caseStudy"
                  key={i}
                  title={cs.title}
                  content={cs.content}
                />
              )
            })}
        </Grid>
        <div className="bottomLink" sx={{ pt: 100, ml: "50%" }}>
          <div className="linkTitle">Back</div>

          <AnchorLink to={link.url}>{link.title}</AnchorLink>
        </div>
      </Container>
    </Flex>
  )
}
