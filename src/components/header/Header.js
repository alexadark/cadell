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
              sx={{ display: ["block", "block", "block", "none"] }}
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
  bg: "white",
  margin: "none",

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

  // ".headroom--pinned &": {
  //   ">div": {
  //     py: "xxs",
  //   },
  // },
}
const menuStyles = {
  display: ["none", "none", "none", "block"],
  ">ul": {
    display: "flex",
    m: 0,
  },

  ".menu-item": {
    listStyleType: "none",
    position: "relative",
    mx: 17,
    fontSize: 12,
    a: {
      ".home-page &,.contact-page &,.services-page &": {
        color: "white",
      },
      color: "black",
      textTransform: "uppercase",
      fontWeight: "normal",
      letterSpacing: 1.6,
      "&:hover": {
        color: "primary",
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
      bg: "black",
      a: { color: "white", "&:hover": { color: "primary" } },
      width: "auto",
      whiteSpace: "nowrap",
      variant: "transitions.m",
      zIndex: 10,
      py: 10,
      fontFamily: "bold",
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
