export default {
  ".bottomLink,.bottomLink a": {
    textTransform: "uppercase",
    fontSize: "xxs",
    color: "black",
    m: 0,
  },
  ".linkTitle": {
    lineHeight: 0.8,
    fontFamily: "Montserrat, sans-serif",
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
