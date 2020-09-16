/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line no-unused-vars
import React from "react"
import {
  PostEntryTitle,
  PostEntryMedia,
  PostEntryContent,
  PostEntryInfo,
  PrevNextPostNavigation,
} from "./index"
import normalize from "normalize-path"
// import { SocialShare } from '../social'

export const PostEntry = ({ post, ctx, location, ...props }) => {
  const noImgClass = !post.featuredImage ? "no-img" : ""
  const media = post.featuredImage
    ? post.featuredImage.localFile.childImageSharp.fluid.src
    : null
  return (
    <article
      className="entry"
      sx={{
        ".entry-content": {
          pb: `m`,
          borderBottom: t => `1px solid ${t.colors.border}`,
        },
      }}
      {...props}
    >
      <PostEntryMedia location={location} post={post} className="entry-media" />

      <div className={`content ${noImgClass}`}>
        <PostEntryTitle
          location={location}
          post={post}
          className="entry-title"
        />
        <PostEntryInfo className="entry-info" post={post} />

        <PostEntryContent location={location} post={post} />

        {location === "single" && (
          <>
            {/* <SocialShare
              url={normalize(`/${post.uri}`)}
              title={post.title}
              media={media}
            /> */}
            <PrevNextPostNavigation ctx={ctx} />
          </>
        )}
      </div>
    </article>
  )
}
