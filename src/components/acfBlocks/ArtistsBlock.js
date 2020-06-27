/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { graphql } from "gatsby"

export const fragment = graphql`
  fragment artistsBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_ArtistsBlock {
    anchor
    artists
  }
`

export const ArtistsBlock = ({ anchor, artists }) => {
  return (
    <section id={anchor || ""} className="artists" sx={{ ...style }}>
      <Container sx={{ px: "30px !important" }}>
        <h3 className="geReveal" sx={{ variant: "text.heading" }}>
          Artists
        </h3>
        <h4 className="gsReveal">
          A selection of artists Cadell has advised on
        </h4>
        <div
          className="artists gsReveal"
          dangerouslySetInnerHTML={{ __html: artists }}
        />
      </Container>
    </section>
  )
}
const style = {
  my: 100,
  h4: {
    fontFamily: "body",
    mb: 50,
  },
  ".artists": {
    ul: {
      m: 0,
      columns: ["250px 4"],
    },
    li: {
      listStyleType: "none",
      fontSize: "s",
      textTransform: "uppercase",
    },
  },
}
