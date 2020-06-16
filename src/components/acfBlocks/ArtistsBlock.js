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
    <section id={anchor || ""} className="artists">
      <Container>
        <div
          className="artists"
          dangerouslySetInnerHTML={{ __html: artists }}
        />
      </Container>
    </section>
  )
}
