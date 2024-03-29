import { css } from "@emotion/core"
import Typography from "typography"

export const globalStyles = theme => {
  const typography = new Typography({
    baseFontSize: theme?.baseFontSize || "16px",
    baseLineHeight: theme?.lineHeights?.body || 1.5,
    scaleRatio: 3,
    blockMarginBottom: 0.75,
    headerWeight: theme?.fontWeights?.heading || 700,
    bodyWeight: theme?.fontWeights?.body || 400,
    boldWeight: theme?.fontWeights?.bold || 700,
  })
  return css`
    body,
    html {
      margin: 0;
      max-width: 100%;
      overflow-x: hidden;
      /* scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch; */
    }

    p {
      font-family: Montserrat, sans-serif;
    }
    body[style*="overflow"] {
      height: 100vh;
    }
    /**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit; /* 1 */
      font-size: 100%; /* 1 */
      line-height: 1.15; /* 1 */
      margin: 0; /* 2 */
    }

    input {
      -moz-appearance: none;
      -webkit-appearance: none;
      border-radius: 0;
    }

    /**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

    button,
    input {
      /* 1 */
      overflow: visible;
    }

    /**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

    button,
    select {
      /* 1 */
      text-transform: none;
    }

    /**
 * Correct the inability to style clickable types in iOS and Safari.
 */

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
      -webkit-appearance: button;
    }

    .u-hidden-visually,
    .screen-reader-text {
      border: 0 !important;
      clip: rect(0 0 0 0) !important;
      height: 1px !important;
      margin: -1px !important;
      overflow: hidden !important;
      padding: 0 !important;
      position: absolute !important;
      width: 1px !important;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
    }
    ${typography?.toString()}
    @media screen and (max-width: 600px) {
      html {
        font-size: 16px;
      }
    }
    html {
      overflow-y: initial;
    }
    pre {
      overflow-x: auto;
    }
    @supports (object-fit: cover) {
      .splash {
        background-image: none !important;
      }
      .featured-wrapper {
        display: block !important;
      }
    }
    *:focus {
      outline-style: dashed;
      outline-width: 0.5px;
      outline-color: #ddd !important;
    }
  `
}
