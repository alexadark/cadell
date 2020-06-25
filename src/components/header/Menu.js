/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Collapse } from "../ui-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"

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

const renderLink = menuItem => {
  return <AnchorLink to={menuItem.url}>{menuItem.label}</AnchorLink>
}

const renderMenuItem = menuItem => {
  if (menuItem.childItems && menuItem.childItems.nodes.length) {
    return renderSubMenu(menuItem)
  } else {
    return (
      <li className="menu-item" key={menuItem.id}>
        {renderLink(menuItem)}
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

const renderSubMenu = (menuItem, orientation) => {
  return (
    <li
      className="has-subMenu menu-item"
      key={menuItem.id}
      sx={{ position: "relative" }}
    >
      {renderLink(menuItem)}

      <WithCollapse orientation={orientation} menuItem={menuItem}>
        <ul className="menuItemGroup sub-menu">
          {menuItem.childItems.nodes.map(item => renderMenuItem(item))}
        </ul>
      </WithCollapse>
    </li>
  )
}

const Menu = ({ orientation, ...props }) => {
  const data = useStaticQuery(MENU_QUERY)
  const { menuItems } = data.wpMenu

  return (
    <nav className="menu" sx={{ variant: `menus.header` }} {...props}>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
      <ul role="menu">
        {menuItems.nodes.map(menuItem => {
          if (menuItem.childItems.nodes.length) {
            return renderSubMenu(menuItem, orientation)
          } else {
            return renderMenuItem(menuItem)
          }
        })}
      </ul>
    </nav>
  )
}

export default Menu
