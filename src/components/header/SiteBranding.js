/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { Link } from "gatsby"

const SiteBranding = ({ title, description, ...props }) => {
  return (
    <Flex {...props} sx={{ alignItems: "center", ...style }}>
      <h1
        sx={{
          display: "flex",
          justifyContent: "center",
          width: ["100%", "auto"],
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
    </Flex>
  )
}

export default SiteBranding

const style = {
  a: {
    fontFamily: "body",
    color: "secondary",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontSize: "xl",
  },
  ".description": {
    ml: 15,
    letterSpacing: 1.5,
    fontSize: "m",
    span: {
      color: "secondary",
      textTransform: "uppercase",
      fontSize: "s",
    },
  },
}
