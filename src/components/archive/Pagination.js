/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { rem } from "polished"

const renderPreviousLink = previousPagePath => {
  if (previousPagePath) {
    return (
      <Link className="newer" to={previousPagePath} sx={paginationStyles.links}>
        <span>Previous</span>
      </Link>
    )
  } else {
    return <span />
  }
}

const renderNextLink = nextPagePath => {
  if (nextPagePath) {
    return (
      <Link className="older" sx={paginationStyles.links} to={nextPagePath}>
        <span>Next</span>
      </Link>
    )
  } else {
    return <span />
  }
}

export const Pagination = ({ ctx }) => {
  const { humanPageNumber, nextPagePath, previousPagePath } = ctx
  // return empty string if there is only one page
  if (humanPageNumber === 1 && !nextPagePath) {
    return ""
  }
  return (
    <nav sx={{ ...paginationStyles, mb: 40 }}>
      {renderPreviousLink(previousPagePath)}
      <span aria-current="page" className="page-numbers current" sx={{}}>
        {humanPageNumber}
      </span>
      {renderNextLink(nextPagePath)}
    </nav>
  )
}

const paginationStyles = {
  variant: "text.special",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "xs",
  mb: "s",
  "> *": {
    flex: 1,
  },
  ".newer": {
    textAlign: "left",
  },
  ".older": {
    textAlign: "right",
  },
  "> span": {
    textAlign: "center",
  },
  links: {
    transition: ".6s",
    variant: "text.special.a",
    fontSize: [rem("10px"), "xxs"],
    mt: ["xs", 0],
    "&.older": {
      transform: "translate3d(1.75rem, 0, 0)",
      mr: ["m", 0],
    },
    "&.newer": {
      transform: "translate3d(-1.75rem, 0, 0)",
      ml: ["m", 0],
    },
    ":hover": {
      transform: "translate3d(0, 0, 0)",
    },
    "&.newer::before,&.older::after": {
      content: '""',
      width: "1.5rem",
      height: "1px",
      mr: "0.25rem",
      bg: "currentColor",
      display: "inline-block",
      verticalAlign: "middle",
      transition: "0.6s",
      transform: "scaleX(0)",
    },
    ":hover::before, :hover::after": {
      transform: "scaleX(1)",
    },
  },
}
