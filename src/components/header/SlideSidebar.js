/** @jsx jsx */
import { jsx, Box, MenuButton } from "theme-ui"
import React from "react"
import { useState } from "react"
import { Menu as MenuIcon, Close } from "grommet-icons"
import { Layer, Button } from "grommet"
import Menu from "./Menu.js"

import slideSidebarStyles from "../../styles/slideSidebarStyles"

const SlideSidebar = ({ ...props }) => {
  const [isMenuOpen, setOpenMenu] = useState(false)
  const [openClass, setOpenClass] = useState(false)

  const openMenu = () => {
    setOpenClass(true)
    setOpenMenu(true)
  }
  const closeMenu = () => {
    setOpenClass(false)
    setTimeout(() => setOpenMenu(false), 200)
  }

  return (
    <Box {...props}>
      <MenuButton
        aria-label="Toggle Menu"
        onClick={openMenu}
        className={openClass ? "btn-menu-opened" : "btn-menu-closing"}
        // sx={{
        //   variant: `buttons.hamburger`,
        // }}
      />
      {isMenuOpen && (
        <Layer
          position="right"
          full="vertical"
          modal
          responsive={false}
          onClickOutside={closeMenu}
          onEsc={closeMenu}
          sx={{ ...style }}
        >
          <Button
            icon={<Close />}
            a11yTitle="Close navigation menu"
            sx={{
              pointer: `cursor`,
              svg: {
                stroke: `headerColor`,
                width: `15px`,
                height: `15px`,
              },
            }}
            className="close"
            onClick={closeMenu}
          />

          <Menu />
        </Layer>
      )}
    </Box>
  )
}

export default SlideSidebar

const style = {
  fontFamily: "body",
  borderRadius: 0,
  bg: "white",
  width: ["100%", "468px"],
  display: "flex",
  overflowY: "scroll",
  boxShadow: ["none", "-10px 0 40px rgba(0,0,0,0.3)"],
  animationDuration: ".6s",

  p: "xl",
  "&.menu-closing": {
    // animation: `${pehaafadein} 1 .6s 0s cubic-bezier(0.165, 0.84, 0.44, 1)`,
    boxShadow: ["none", "-10px 0 0 rgba(0,0,0,0)"],
  },
  ".close": {
    cursor: "pointer",
    position: "fixed",
    top: 3,
    right: 3,
    svg: { stroke: "primary" },
  },
  ".menu": {
    a: {
      textDecoration: "none",
      color: "white",
      fontFamily: "heading",
      textTransform: "uppercase",
      "&:hover": {
        color: "red",
      },
    },
    mb: "xxl",
    li: {
      mb: 0,
    },
    ul: {
      m: 0,
      p: 0,

      listStyle: "none",
      ".menu-item": {
        display: "block",
        py: "xs",
        borderBottom: "1px solid rgba(255,255,255,.15)",
        color: "text",
        fontFamily: "body",

        a: {
          color: "text",
          fontFamily: "body",
        },
        "&:last-of-type": {
          border: "none",
        },
      },
      "ul a": {
        pl: "m",
      },
      "ul ul a": {
        pl: "xl",
      },
    },
    "nav > ul": { mt: "xl" },
    "[aria-current]": {
      fontStyle: "italic",
      fontWeight: "body",
    },
    button: {
      top: -4,
    },
  },
}
