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
import { SocialShare } from "../social"
import { postStyles } from "../../styles"

export const PostEntry = ({ post, ctx, location, ...props }) => {
  const noImgClass = !post.featuredImage ? "no-img" : ""
  const media = post.featuredImage
    ? post?.featuredImage?.localFile?.childImageSharp?.fluid?.src
    : null
  const isCaseStudy = post.categories.nodes
    .map(cat => cat.slug)
    .includes("case-studies")
  const isLightTitle = post.featuredImage.altText !== "darkTitle"

  return (
    <article
      className={`entry `}
      sx={{
        ...postStyles,

        mt: location === "single" && [0, 40, 60],
        ".entry-content": {
          pb: `m`,
          borderBottom: `1px solid #ddd`,
          mb: `l`,
        },
      }}
      {...props}
    >
      <div
        className={`mediaTitle ${isCaseStudy ? "caseStudy" : ""}`}
        sx={{ position: "relative" }}
      >
        <PostEntryMedia
          location={location}
          post={post}
          className="entry-media"
        />

        <div className={`content ${noImgClass}`}>
          <PostEntryTitle
            location={location}
            post={post}
            className={`entry-title ${isLightTitle ? "light" : ""}`}
            sx={{
              "&.light": {
                color: "white !important",
                a: {
                  color: "white !important",
                },
              },
              ".caseStudy &": {
                position: "absolute",
                top: "5%",
                left: 50,
                color: "black",
                textShadow: "4px 4px 15px rgba(0, 0, 0, .8)",
                a: {
                  color: "black",
                },
              },
            }}
          />
        </div>

        <PostEntryInfo className="entry-info" post={post} />

        <PostEntryContent location={location} post={post} />

        {location === "single" && (
          <>
            <SocialShare
              url={normalize(`/${post.uri}`)}
              title={post.title}
              media={media}
            />
            <PrevNextPostNavigation ctx={ctx} />
          </>
        )}
      </div>
    </article>
  )
}

const caseStudyStyles = {
  "&.caseStudy": {
    ".entry-title": {
      position: "absolute",
      top: 50,
      left: 20,
      color: "white",
    },
  },
}
