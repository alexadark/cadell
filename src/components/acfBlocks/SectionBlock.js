/** @jsx jsx */
import { jsx, Grid, Container, Flex } from "theme-ui"
import { graphql } from "gatsby"
import Img from "../images/Image"
import linkStyles from "../../styles/bottomLinkStyle"
import { AnchorLink } from "gatsby-plugin-anchor-links"

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
            ...GatsbyImageSharpFluid_noBase64
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
    rights
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
  rights,
}) => {
  return (
    <section
      id={anchor || ""}
      className={`sectionBlock`}
      sx={{ ...style, ...linkStyles }}
    >
      <Container>
        <Grid
          columns={[1, 1, "1fr 1.3fr"]}
          gap={[20, 80]}
          className="sectionWrap"
        >
          <div className="painting">
            <div className="paintingWrap">
              <div className="pic">
                <Img img={image} />
              </div>
              {/* <img src={image.publicURL} alt="" /> */}
              <h5 className="painter">{painter}</h5>
              <h5 className="paintTitle">{paintTitle}</h5>
              <h5
                className="status"
                dangerouslySetInnerHTML={{ __html: status }}
              />
              {rights && <div className="rights legalText">{rights}</div>}
            </div>
          </div>
          <div className="text">
            <h3 dangerouslySetInnerHTML={{ __html: title }} />
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div className="quote">
              <blockquote>"{quote}"</blockquote>
              <div className="quoteAuthorRole">
                <div className="quoteAuthor">{quoteAuthor}</div>
                <div className="authorRole">{authorRole}</div>
              </div>
            </div>
            {legalText && <div className="legalText">{legalText}</div>}
            {anchor === "whoWeAre" && (
              <Flex sx={{ justifyContent: ["center", "flex-end"] }}>
                <img
                  className="step"
                  sx={{ width: 320, height: 80, top: 10, position: "relative" }}
                  src="/step.jpg"
                />
              </Flex>
            )}
            {link && (
              <div className="bottomLink">
                <div className="linkTitle">{linkTitle}</div>
                <AnchorLink to={link.url}>{link.title}</AnchorLink>
              </div>
            )}
          </div>
        </Grid>
      </Container>
    </section>
  )
}

const style = {
  "&:nth-child(odd)": {
    bg: "light",
  },
  scrollMarginTop: 80,
  // pt: 150,
  // pb: [50, 50, 0],
  py: [50, 50, 100],
  px: [0, 50],
  "&:first-of-type": {
    mt: -50,
  },
  ".sectionWrap": {
    minHeight: "100%",
    // flexWrap: "wrap",
    // alignItems: "center",
  },
  ".text": {
    h3: {
      fontFamily: "Montserrat, sans-serif",
    },
  },
  ".quote": {
    fontFamily: "PT Serif, serif",
    fontSize: "s",
    mb: 50,
    blockquote: {
      fontSize: 19,
    },
    ".quoteAuthor": { fontWeight: "bold" },
    ".quoteAuthorRole": { ml: 20 },
  },
  ".legalText": {
    fontSize: "xxs",
    "&.rights": {
      mt: [20, 20, 50],
    },
  },
  ".painting": {
    // transform: [0, "translateY(70px)"],
    mt: [0, 25],
  },
  ".pic": {
    mb: 10,
    img: {
      // maxHeight: 500,
    },
  },
  ".paintTitle,.painter,.status": {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "xxs",
    my: 7,
    fontWeight: 400,
    color: "black",
  },
  ".paintTitle": {
    fontStyle: "italic",
  },
  ".painter": {
    fontWeight: "bold",
    fontSize: 11,
    letterSpacing: 1,
  },
  "&#collectionStrategy": {
    // ".sectionWrap": {
    //   alignItems: "center",
    // },
    // ".painting": {
    //   transform: "translateY(0)",
    // },
    ".painting": {
      // width: ["100%", "100%", "65%"],
    },
  },
  // "&#whoWeAre": {
  //   ".legalText": {
  //     position: "relative",

  //     "&:after": {
  //       content: "''",
  //       backgroundImage: "url(/step.jpg)",
  //       backgroundRepeat: ["no-repeat", "no-repeat"],
  //       backgroundSize: ["80%", "100%"],
  //       width: [320],
  //       height: [80],
  //       position: "absolute",
  //       top: [80, 60],
  //       pb: 20,
  //       right: ["initial", "initial", 0],
  //       left: [0, 0, "initial"],
  //     },
  //   },
  // },
}
