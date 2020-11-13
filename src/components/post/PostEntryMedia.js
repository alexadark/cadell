/** @jsx jsx */
import { jsx, AspectRatio } from "theme-ui"
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Link } from "gatsby"
import Image from "../images/Image"

const WithLink = ({ post, location, children }) =>
  location === "single" ? (
    children
  ) : (
    <Link to={`${post.uri}`} aria-label="View the entire post">
      {children}
    </Link>
  )

export const PostEntryMedia = ({ post, location, ...props }) => {
  const img = post.featuredImage
  const isCaseStudy = post.categories.nodes
    .map(cat => cat.slug)
    .includes("case-studies")

  return (
    <>
      {img && (
        <WithLink location={location} post={post}>
          {isCaseStudy ? (
            <AspectRatio className="entry-media" ratio={12 / 3}>
              <Image img={img} />
            </AspectRatio>
          ) : (
            <div className="entry-media" {...props}>
              <Image img={img} />
            </div>
          )}
        </WithLink>
      )}
    </>
  )
}
