/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

export const Image = ({ img, ...props }) =>
  img && img.localFile.childImageSharp ? (
    <Img
      fluid={img.localFile.childImageSharp.fluid}
      alt={img.altText}
      {...props}
    />
  ) : (
    <img src={img.localFile.publicURL} alt={img.altText} />
  )
