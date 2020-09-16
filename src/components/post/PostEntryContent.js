/** @jsx jsx */
import { jsx, Box } from "theme-ui"

export const PostEntryContent = ({ post, location, ...props }) => {
  const content = location === "single" ? post.content : post.excerpt
  const attributes = location === "single" ? { id: "content" } : {}
  return (
    <Box {...attributes} {...props}>
      <Box
        className="entry-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Box>
  )
}
