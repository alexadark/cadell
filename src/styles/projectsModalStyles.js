export default {
  bg: 'background',
  borderRadius: 0,
  overflowY: 'scroll',
  animationDuration: '.8s',
  '.container': {
    position: 'relative',
  },
  p: {
    color: 'text',
  },
  '.close': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    variant: 'gradients.secondary',
    borderRadius: '100%',
    cursor: 'pointer',
    position: 'absolute',
    top: 25,
    right: 25,
    svg: {
      fill: 'light',
    },
  },
}
