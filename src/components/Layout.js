/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import Header from "./header/Header"
import { Global } from "@emotion/core"
import { globalStyles } from "../styles/GlobalStyles"
import { Grommet } from "grommet"
import grommetTheme from "../styles/grommet"
import { useGsapReveal } from "../hooks"

import "../styles/scss/styles.scss"

const Layout = ({ children }) => {
  useGsapReveal(50, 2, [".gsReveal"])

  return (
    <Grommet theme={grommetTheme}>
      <Global styles={globalStyles} />
      <Header />
      <main sx={{ pt: 100 }}>{children}</main>
    </Grommet>
  )
}

export default Layout
