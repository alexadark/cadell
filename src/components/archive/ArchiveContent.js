/** @jsx jsx */
import React from "react"
import { jsx, Container, Flex } from "theme-ui"

import { Sidebar } from "../Sidebar"
import { PostsList, Pagination } from "./index"

export const ArchiveContent = ({ posts, ctx, name }) => {


  const containerStyles = {
    maxWidth: "container",
    ".posts-list": {
      width: [`100%`, `100%`, `100%`, `70%`],
    },
    ".sidebar": { width: [`100%`, `100%`, `100%`, `30%`] },
  }

  return (
    <Container
      sx={{ ...containerStyles, maxWidth: 'xl', mt:[0,40,60]}}
      className="mainContainer"
    >
      <Flex
        sx={{
          flexWrap: [`wrap`, `wrap`, `wrap`, `nowrap`],
          alignItems: `flex-start`,
        }}
      >
        <PostsList posts={posts} />
        <Sidebar/>
      </Flex>
      <Pagination ctx={ctx} />
    </Container>
  )
}
