/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

const Image = ({ img, style }) =>
  img && img.remoteFile.childImageSharp ? (
    <Img
      fluid={img.remoteFile.childImageSharp.fluid}
      alt={img.altText}
      sx={style}
    />
  ) : (
    <img src={img.remoteFile.publicURL} alt={img.altText} />
  )

export default Image
