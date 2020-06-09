import { darken, lighten } from "polished"
import checked from "../../assets/images/check.svg"
export default {
  ".columnItem": {
    display: "flex",
    alignItems: "center",
    ">div": {
      p: 0,
    },
  },
  "&.section-1": {
    p: { fontSize: "xl" },
    button: {
      variant: "gradients.primary",
    },
  },
  "&.section-2": {
    ".bigger": {
      fontSize: "xl",
      lineHeight: 1.5,
      mb: 20,
    },
    p: {
      fontSize: "m",
    },
  },
  "&.plugins": {
    a: {
      variant: "transitions.m",
      color: "light",

      textDecoration: "none",
      position: "relative",
      fontWeight: 400,
      background:
        "linear-gradient(to bottom, rgb(230, 74, 145) 0%, rgb(230, 74, 145) 100%)",
      backgroundPosition: "0 100%",
      backgroundRepeat: "repeat-x",
      backgroundSize: "1px 1px",
      "&:hover": {
        backgroundSize: "1px 13px",
      },
    },
    ".intro": {
      px: 10,
    },
    color: "text",
    ".colsWrap": {
      px: [20],
      gridGap: 60,
    },
    // color: "textInverse",
    h2: {
      textTransform: "uppercase",
      mb: 40,
      // color: "light",
    },

    img: {
      mx: "auto",
      maxWidth: 80,
      display: "block",
    },
    h3: {
      fontSize: 18,
    },
    ".col": {
      variant: "gradients.cardGradient",
      borderRadius: 20,
      color: "light",
      h3: {
        // color: "secondary",
        variant: "text.gradient.secondary",
      },
    },
    ul: {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: ["100%", 600],
      m: 0,
      mt: 40,
      mx: "auto",
      pl: [100, 0],
      justifyContent: "space-between",
      li: {
        width: ["100%", "50%"],
        pr: 20,
        textTransform: "uppercase",
        fontSize: "s",
        fontWeight: 600,
        listStyleType: "none",
        position: "relative",
        "&:before": {
          content: "''",
          position: "absolute",
          left: -35,
          background: `url(${checked})`,
          height: 24,
          width: 24,
        },
      },
    },
  },
  "&.getStarted": {
    p: {
      fontSize: "l",
      textTransform: "uppercase",
      fontWeight: "bold",
    },
  },
  "&.team": {
    p: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    img: {
      borderRadius: "100%",
      // border: "3px solid",
      // borderColor: "secondary",
    },
    h3: {
      textTransform: "uppercase",
      fontSize: "m",
    },
    a: {
      variant: "transitions.m",
      color: "light",

      textDecoration: "none",
      position: "relative",
      fontWeight: 400,
      background:
        "linear-gradient(to bottom, rgb(230, 74, 145) 0%, rgb(230, 74, 145) 100%)",
      backgroundPosition: "0 100%",
      backgroundRepeat: "repeat-x",
      backgroundSize: "1px 1px",
      "&:hover": {
        backgroundSize: "1px 13px",
      },
    },
  },
}
