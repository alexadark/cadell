/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Twitter, Facebook, Linkedin } from "./icons"
import { FiShare2 } from "react-icons/fi"
import { Underline } from "grommet-icons"

export const SocialShare = ({ url, title, media, ...props }) => {
  return (
    <>
      <Flex
        sx={{
          mb: 20,
          justifyContent: "center",
        }}
        {...props}
      >
        <span
          sx={{
            fontWeight: "bold",
            borderBottom: "1px solid #ddd",
            width: 100,
            textAlign: "center",
            pb: 10,
          }}
        >
          Share
        </span>
      </Flex>

      <div
        sx={{
          ...socialStyles.share.name,
          mb: `l`,
        }}
      >
        <Twitter url={url} title={title}>
          Twitter
        </Twitter>
        /
        <Facebook url={url} quote={title}>
          Facebook
        </Facebook>
        /<Linkedin url={url}>Linkedin</Linkedin>
      </div>
    </>
  )
}

const socialStyles = {
  follow: {
    justifyContent: "center",
    color: "text",
    ".inverse &": {
      color: "textInverse",
    },

    a: {
      color: "text",
      ".inverse &": {
        color: "textInverse",
      },

      p: "xxs",
      mx: 4,
      transition: ".6s",
      "&:hover": { opacity: 0.6 },
    },
    svg: {
      width: "18px",
      height: "18px",
    },
  },
  share: {
    icon: {
      border: "1px solid",
      borderColor: "text",
      display: "flex",
      width: "1.5rem",
      height: "1.5rem",
      mx: "auto",
      alignItems: "center",
      justifyContent: "center",
      // bg: 'primary',

      borderRadius: "50%",
      svg: {
        color: "text",
      },
    },
    name: {
      variant: "text.special",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
      "&>*": {
        variant: "special.link",
        mx: 4,
        cursor: "pointer",
      },
    },
  },
}
