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
  gradient: {
    primary: {
      WebkitTextFillColor: "transparent",
      WebkitBackgroundClip: "text",
      variant: ["gradients.primary"],
    },
    secondary: {
      WebkitTextFillColor: "transparent",
      WebkitBackgroundClip: "text",
      variant: ["gradients.secondary"],
    },
    blue: {
      WebkitTextFillColor: "transparent",
      WebkitBackgroundClip: "text",
      variant: ["gradients.blue"],
    },
  },
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
    textTransform: "uppercase",
    variant: "gradients.secondary",
    color: "white",
    py: "s",
    px: "s",
    fontWeight: "bold",
    borderRadius: "s",
    textAlign: "center",
    fontSize: "l",
  },
  info: {
    display: "inline-block",
    lineHeight: "tight",
    bg: "infoBg",
    py: 5,
    px: "s",
    width: "auto",
    fontStyle: "italic",
    borderRadius: "xs",
    mb: "l",
  },
  special: {
    ...specialSharedStyles,
    a: {
      ...specialSharedStyles.a,
      fontWeight: "bold",
    },
    link: {
      ...specialSharedStyles,
      ...specialSharedStyles.a,
      "&:after": {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "1px",
        background: "currentColor",
        transition: ".6s",
        opacity: 0,
        transform: "scaleX(0)",
      },
      "&:hover:after": {
        opacity: 1,
        transform: "scaleX(1)",
      },
    },
    title: {
      a: {
        ...specialSharedStyles.a,
        transition: "0.6s",
      },
      "a:hover": {
        color: "primary",
      },
    },
    archiveTitle: {
      ...specialSharedStyles,
      fontSize: "m",
      fontWeight: 500,
      bg: "archiveTitleBg",
      color: "white",
      py: "s",
      px: "l",
      mb: "xl",
      width: "auto",
      display: "inline-block",
      borderRadius: "s",
      mx: ["auto", "auto", 0],
    },
  },
}
