import config from "../../config"
import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetaData = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  return data.site.siteMetadata
}

export const createLocalLink = url => {
  if (`#` === url) {
    return null
  }
  return url.replace(config.wordPressUrl, ``)
}
