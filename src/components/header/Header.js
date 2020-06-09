/** @jsx jsx */
import { jsx, Container, Box, Flex } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import Menu from "./Menu"
import SlideSidebar from "./SlideSidebar"
import SiteBranding from "./SiteBranding"

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
    <header className="header" sx={{ ...style }}>
      <Container className="container">
        <Box
          sx={{
            width: [`100%`, `50%`],
            // display: `flex`,
          }}
        >
          <SiteBranding title={title} description={description} />
        </Box>
        <Box
          sx={{
            width: [`100%`, `50%`],
            display: `flex`,
            justifyContent: `flex-end`,
          }}
        >
          <Menu
            sx={{
              display: "flex",
              justifyContent: ["center", "flex-end"],
              width: ["100%", "auto"],
              ul: {
                display: "Flex",
                m: 0,
                li: {
                  listStyleType: "none",
                  mr: 16,
                  a: {
                    color: "secondary",
                    textTransform: "uppercase",
                    fontWeight: 400,
                    fontSize: "xxs",
                    "&:hover": {
                      color: "primary",
                    },
                  },
                },
              },
            }}
          />
          {/* <SlideSidebar /> */}
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
    px: [10, 30],
    width: "90vw",
  },

  ".headroom--pinned &": {
    ">div": {
      py: "xxs",
    },
  },
}
