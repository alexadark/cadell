/** @jsx jsx */
import { jsx, Container, Box, Flex } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import Menu from "./Menu"
import SlideSidebar from "./SlideSidebar"
import SiteBranding from "./SiteBranding"
import Headroom from "react-headroom"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      wp {
        generalSettings {
          title
          url
        }
      }
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  const { title } = data.wp.generalSettings
  const { description } = data.site.siteMetadata

  return (
    <Headroom>
      <header className="header" sx={{ ...style }}>
        <Container className="container">
          <Box
            sx={{
              width: [`100%`, `33%`],
              // display: `flex`,
            }}
          >
            <SiteBranding title={title} description={description} />
          </Box>
          <Box
            sx={{
              // width: [`100%`, `50%`],
              display: `flex`,
              justifyContent: `flex-end`,
            }}
          >
            <Menu
              sx={{
                ...menuStyles,
              }}
            />
            <SlideSidebar
              sx={{
                "@media (min-width: 1300px)": {
                  display: "none",
                },
              }}
            />
          </Box>
        </Container>
        <Flex
          sx={{
            position: `absolute`,
            right: [`6%`, `6%`, `2%`],
            top: 18,
          }}
        ></Flex>
      </header>
    </Headroom>
  )
}

export default Header

const style = {
  bg: "#fff",
  margin: "none",
  // position: "fixed",
  // width: "100%",
  // zIndex: 10,

  ".container": {
    display: ["block", "flex"],
    justifyContent: ["center", "space-between"],
    flexWrap: "wrap",
    alignItems: "center",
    fontSize: "m",
    margin: "0 auto",
    maxWidth: "container",
    py: 30,
    px: [10, 0],
    width: "90vw",
  },
  ".logo": {
    mt: -5,
  },

  ".headroom--pinned &": {
    boxShadow: "small",
    ">div": {
      py: "xxs",
    },
    ".logo": {
      mt: -13,
    },
  },
}
const menuStyles = {
  display: "none",
  "@media (min-width: 1300px)": {
    display: "block",
  },

  ">ul": {
    display: "flex",
    m: 0,
  },

  ".menu-item": {
    listStyleType: "none",
    position: "relative",
    mx: 15,
    fontSize: 12,
    a: {
      color: "black",
      textTransform: "uppercase",
      fontWeight: "500",
      letterSpacing: 1.6,
      color: "secondary",
      "&:hover": {
        color: "black",
      },
    },
    "&.login": {
      bg: "primary",
      variant: "transitions.m",
      "&:hover": {
        transform: "translateY(-3px)",
      },
      a: {
        color: "white",
        fontWeight: "bold",
      },

      borderRadius: 84,
      px: 15,
      pt: 1,
    },
    //submenu
    ">.sub-menu": {
      opacity: 0,
      visibility: "hidden",
      transform: "translateY(-5px)",
      m: 0,
      position: "absolute",
      top: 32,
      left: 0,
      // bg: "#f5f5f5",
      a: { fontSize: 10, textAlign: "right" },
      width: "auto",
      whiteSpace: "nowrap",
      variant: "transitions.m",
      zIndex: 10,
      fontWeight: 600,
      li: {
        m: 0,
      },
      // py: 10,
    },
    "&:last-of-type": {
      ">.sub-menu": {
        textAlign: "right",
        left: -111,
      },
    },
  },
  ".has-subMenu": {
    "&:hover": {
      ">.sub-menu": {
        opacity: 1,
        visibility: "visible",
        transform: "translateY(0)",
      },
    },
  },
}
