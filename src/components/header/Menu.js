/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect } from "react"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { graphql, useStaticQuery, Link } from "gatsby"
import { createLocalLink } from "../../utils"
import { Collapse } from "../ui-components"
import { window } from "browser-monads"

const MENU_QUERY = graphql`
  fragment MenuFields on WpMenuItem {
    id
    label
    url
    target
    connectedObject {
      __typename
    }
  }

  query GET_MENU_ITEMS {
    wpMenu(name: { eq: "main" }) {
      menuItems {
        nodes {
          ...MenuFields
          childItems {
            nodes {
              ...MenuFields
            }
          }
        }
      }
    }
  }
`

const RenderLink = ({ menuItem, closeMenu, orientation }) => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollToPlugin)
      gsap.core.globals("ScrollToPlugin", ScrollToPlugin)
    }
  }, [])
  const scrollToItem = anchor =>
    gsap.to(window, { duration: 1, scrollTo: anchor })

  return menuItem.connectedObject.__typename === "WpMenuItem" ? (
    <a
      onClick={e => {
        // e.preventDefault()
        // scrollToItem(menuItem.url)
        window.location.href = menuItem.url
        orientation === "vertical" && closeMenu()
      }}
      // href={menuItem.url}
      sx={{ cursor: "pointer" }}
    >
      {menuItem.label}
    </a>
  ) : createLocalLink(menuItem.url) ? (
    <Link to={createLocalLink(menuItem.url)}>{menuItem.label}</Link>
  ) : (
    menuItem.label
  )
}

const renderMenuItem = (menuItem, closeMenu) => {
  if (menuItem.childItems && menuItem.childItems.nodes.length) {
    return renderSubMenu(menuItem, closeMenu)
  } else {
    return (
      <li onClick={closeMenu} className="menu-item" key={menuItem.id}>
        <RenderLink menuItem={menuItem} closeMenu={closeMenu} />
      </li>
    )
  }
}

const WithCollapse = ({ orientation, children, menuItem }) =>
  orientation === "vertical" ? (
    <Collapse menuItem={menuItem}>{children}</Collapse>
  ) : (
    children
  )

const renderSubMenu = (menuItem, orientation, closeMenu) => {
  return (
    <li
      className="has-subMenu menu-item"
      key={menuItem.id}
      sx={{ position: "relative" }}
    >
      <RenderLink menuItem={menuItem} closeMenu={closeMenu} />

      <WithCollapse orientation={orientation} menuItem={menuItem}>
        <ul className="menuItemGroup sub-menu">
          {menuItem.childItems.nodes.map(item => (
            <RenderLink
              menuItem={item}
              closeMenu={closeMenu}
              oruentation={orientation}
            />
          ))}
        </ul>
      </WithCollapse>
    </li>
  )
}

const Menu = ({ orientation, closeMenu, ...props }) => {
  const data = useStaticQuery(MENU_QUERY)
  const { menuItems } = data.wpMenu

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollToPlugin)
      gsap.core.globals("ScrollToPlugin", ScrollToPlugin)
    }
  }, [])

  return (
    <nav className="menu" sx={{ variant: `menus.header` }} {...props}>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
      <ul role="menu">
        {menuItems.nodes.map(menuItem => {
          if (menuItem.childItems.nodes.length) {
            return renderSubMenu(menuItem, orientation, closeMenu)
          } else {
            return renderMenuItem(menuItem, closeMenu, orientation)
          }
        })}
      </ul>
    </nav>
  )
}

export default Menu
