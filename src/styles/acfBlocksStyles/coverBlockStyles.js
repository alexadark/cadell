export default {
  '.gatsby-image-wrapper': {
    py: 150,
    zIndex: 0,
  },
  '.overlay .content': {
    '&:after': {
      content: "''",
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      bg: 'dark',
      zIndex: -1,
      opacity: 0.6,
    },
  },
}
