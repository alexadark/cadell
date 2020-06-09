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
          sx={slideSidebarStyles}
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
