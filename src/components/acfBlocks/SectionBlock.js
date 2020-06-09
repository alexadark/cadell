/** @jsx jsx */
import { jsx, Grid, Container } from "theme-ui"
import { graphql, Link } from "gatsby"
import Img from "../images/Image"

export const fragment = graphql`
  fragment sectionBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_SectionBlock {
    anchor
    title
    content
    quote
    quoteAuthor
    authorRole
    image {
      sourceUrl
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
  return (
    <section className="sectionBlock" sx={{ height: "100vh" }}>
      <Container>
        <Grid columns={[1, 1, 2]} gap={100}>
          <div className="painting">
            <Img img={image} />
            <h4 className="paintTitle">{paintTitle}</h4>
            <h5 className="painter">{painter}</h5>
            <h5 className="status">{status}</h5>
          </div>
          <div className="text">
            <h3 dangerouslySetInnerHTML={{ __html: title }} />
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div className="quote">
              <blockquote>"{quote}"</blockquote>
              <div className="quoteAuthor">{quoteAuthor}</div>
              <div className="authorRole">{authorRole}</div>
            </div>
            {legalText && <div className="legaltext">{legalText}</div>}
            {link && (
              <div className="bottomLink">
                <div className="linkTitle">{linkTitle}</div>
                <Link to={link.url}>{link.title}</Link>
              </div>
            )}
          </div>
        </Grid>
      </Container>
    </section>
  )
}
