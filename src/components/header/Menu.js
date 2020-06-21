/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery, Link } from "gatsby"
import { createLocalLink } from "../../utils"

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
  return menuItem.connectedObject.__typename === "WpMenuItem" ? (
    <a href={menuItem.url}>{menuItem.label}</a>
  ) : createLocalLink(menuItem.url) ? (
    <Link to={createLocalLink(menuItem.url)}>{menuItem.label}</Link>
  ) : (
    menuItem.label
  )
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

const renderSubMenu = menuItem => {
  return (
    <li className="has-subMenu menu-item" key={menuItem.id}>
      {renderLink(menuItem)}

      <ul className="menuItemGroup sub-menu">
        {menuItem.childItems.nodes.map(item => renderMenuItem(item))}
      </ul>
    </li>
  )
}

const Menu = ({ ...props }) => {
  const data = useStaticQuery(MENU_QUERY)
  const { menuItems } = data.wpMenu

  return (
    <nav className="menu" sx={{ variant: `menus.header` }} {...props}>
      <ul role="menu">
        {data.wpMenu.menuItems.nodes.map(menuItem => {
          if (menuItem.childItems.nodes.length) {
            return renderSubMenu(menuItem)
          } else {
            return renderMenuItem(menuItem)
          }
        })}
      </ul>
    </nav>
  )
}

export default Menu
