/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { Link } from "gatsby"

const SiteBranding = ({ title, description, ...props }) => {
  return (
    <div {...props} sx={{ ...style }} className="logo">
      <h1
        sx={{
          // display: ["block", "block", "block", "flex"],
          // justifyContent: "center",
          width: ["100%", "auto"],
          m: 0,
        }}
      >
        <Link to="/" rel="home">
          {title}
        </Link>
      </h1>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  )
}

export default SiteBranding

const style = {
  "@media (min-width: 1440px)": {
    display: "flex",
  },
  alignItems: "center",
  a: {
    fontFamily: "Montserrat, sans-serif",
    color: "secondary",
    textTransform: "uppercase",
    letterSpacing: 6,
    fontSize: "xl",
  },
  ".description": {
    "@media (min-width: 1440px)": {
      ml: 10,
    },
    transform: "translateY(4px)",
    // letterSpacing: 1.5,
    fontSize: "m",
    span: {
      color: "secondary",
      textTransform: "uppercase",
      fontSize: 15,
    },
  },
}
