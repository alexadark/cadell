/** @jsx jsx */
import { jsx, Grid, Container } from "theme-ui"
import { useRef, useEffect } from "react"
import { graphql } from "gatsby"
import Img from "../images/Image"
import linkStyles from "../../styles/bottomLinkStyle"
import { window, exists } from "browser-monads"
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
  const sectionRef = useRef()
  useEffect(() => {
    if (exists(window)) {
      const addAnimClass = () =>
        window.matchMedia("(min-width: 900px)").matches &&
        sectionRef.current.classList.add("animSection")
      // window.onResize = addAnimClass
      window.addEventListener(
        "resize",
        window.matchMedia("(min-width: 900px)").matches
          ? sectionRef.current.classList.add("animSection")
          : sectionRef.current.classList.remove("animSection")
      )
    }
  }, [])

  return (
    <section
      id={anchor || ""}
      className={`sectionBlock`}
      sx={{ ...style, ...linkStyles }}
      ref={sectionRef}
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
              <h5 className="status">{status}</h5>
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
              <div className="quoteAuthor">{quoteAuthor}</div>
              <div className="authorRole">{authorRole}</div>
            </div>
            {legalText && <div className="legalText">{legalText}</div>}
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
  py: [50, 50, 75],
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
      fontFamily: "body",
    },
  },
  ".quote": {
    fontFamily: "heading",
    fontSize: "s",
    mb: 50,
    blockquote: {
      fontSize: 19,
    },
    ".quoteAuthor": { fontWeight: "bold" },
  },
  ".legalText": {
    fontSize: "xxs",
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
  "&#collectionStrategy": {
    // ".sectionWrap": {
    //   alignItems: "center",
    // },
    // ".painting": {
    //   transform: "translateY(0)",
    // },
    ".painting": {
      width: ["100%", "100%", "65%"],
    },
  },
}
