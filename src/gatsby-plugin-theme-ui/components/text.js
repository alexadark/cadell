import { rem } from "polished"

const specialSharedStyles = {
  textTransform: "uppercase",
  letterSpacing: "2px",
  fontSize: "xxs",
  color: "text",
  a: {
    color: "inherit",
    textDecoration: "none",
    position: "relative",
  },
}

export const text = {
  branding: {
    textTransform: "uppercase",
    fontFamily: "heading",
    fontWeight: 500,

    lineHeight: 1.2,
    fontSize: ["s", "m", "xl"],
    h1: {
      display: "flex",
      justifyContent: "center",
      width: ["100%", "auto"],
    },

    m: 0,
    a: {
      color: "headerColor",

      "&:hover": {
        color: "headerColorHover",
      },
    },
  },
  heading: {
    fontFamily: "body",
    mb: 50,
    // fontWeight: "bold",
    // fontSize: "l",
    // color: "black",
  },
}
