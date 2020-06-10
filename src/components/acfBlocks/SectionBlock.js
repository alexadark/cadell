/** @jsx jsx */
import { jsx, Grid, Flex, Container } from "theme-ui"
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
        publicURL
        childImageSharp {
          fluid(quality: 80, toFormat: JPG, maxWidth: 600) {
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
    <section id={anchor || ""} className="sectionBlock" sx={{ ...style }}>
      <Container>
        <Grid columns={[1, 1, "1fr 1fr"]} gap={80} className="sectionWrap">
          <div className="painting">
            <div className="pic">
              <Img img={image} />
            </div>
            {/* <img src={image.publicURL} alt="" /> */}
            <h5 className="painter">{painter}</h5>
            <h5 className="paintTitle">{paintTitle}</h5>
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
            {legalText && <div className="legalText">{legalText}</div>}
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

const style = {
  minHeight: "100vh",
  py: 50,
  px: [20, 50],
  ".sectionWrap": {
    flexWrap: "wrap",
    alignItems: "center",
  },
  ".text": {
    h3: {
      fontFamily: "body",
    },
  },
  ".quote": {
    fontFamily: "heading",
    mb: 50,
    ".quoteAuthor": { fontWeight: "bold" },
  },
  ".legalText": {
    fontSize: "xxs",
  },
  ".painting": {},
  ".pic": {
    mb: 10,
  },
  ".paintTitle,.painter,.status": {
    fontFamily: "body",
    fontSize: "xxs",
    my: 7,
    fontWeight: 400,
    color: "black",
  },
  ".painter": {
    fontWeight: "bold",
    fontSize: 11,
    letterSpacing: 1,
  },
  ".bottomLink,.bottomLink a": {
    textTransform: "uppercase",
    fontSize: "xxs",
    color: "black",
    m: 0,
  },
  ".linkTitle": {
    lineHeight: 0.8,
  },
  ".bottomLink": {
    a: {
      variant: "transitions.m",
      "&:hover": {
        color: "secondary",
      },
    },
  },
}
