/** @jsx jsx */
import { jsx, Box } from "theme-ui"
// eslint-disable-next-line no-unused-vars
import React from "react"
import { RecentPosts, Newsletter } from "./widgets"
import { sidebarStyles } from "../styles/sidebarStyles"

export const Sidebar = ({ ...props }) => {
  return (
    <>
      <Box className="sidebar" sx={sidebarStyles} {...props}>
        <Box sx={{ my: `l` }}>
          <RecentPosts />
          <Newsletter />
        </Box>
      </Box>
    </>
  )
}

export default Sidebar
