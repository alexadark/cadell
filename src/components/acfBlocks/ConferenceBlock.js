/** @jsx jsx */
import { jsx, Grid, Container } from "theme-ui"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import stepLogo from "../../images/stepLogo.png"

export const fragment = graphql`
  fragment conferenceBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_ConferenceBlock {
    anchor
    conferences {
      subtitle
      content
      image {
        localFile {
          childImageSharp {
            fluid(toFormat: JPG, maxWidth: 600, maxHeight: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export const ConferenceBlock = ({ anchor, conferences }) => {
  return (
    <section id={anchor || ""} className="management">
      <Container sx={{ px: "30px !important" }}>
        <Grid columns={[1, 2, 3]} gap={40}>
          {conferences &&
            conferences.map((conf, i) => {
              const { subtitle, content, image } = conf
              return (
                <div className="conf">
                  <Img fluid={image.localFile.childImageSharp.fluid} />
                  <div className="subtitle">{subtitle}</div>
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>
              )
            })}
        </Grid>
        <div className="info">
          <img src={stepLogo} alt="Step Logo" />
          Cadell have also been speakers at STEP events in; Geneva, Zurich,
          Monaco, Guernsey, Jersey, IoM and Dubai.
        </div>
      </Container>
    </section>
  )
}
