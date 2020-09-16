/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Twitter, Facebook, Linkedin } from './icons'
import { FiShare2 } from 'react-icons/fi'

export const SocialShare = ({ url, title, media }) => {
  return (
    <>
      <span
        sx={{
          ...socialStyles.share.icon,
          mt: `m`,
          mb: `xs`,
        }}
      >
        <FiShare2 />
      </span>

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
        /
        <Linkedin url={url}>
          Linkedin
        </Linkedin>
      </div>
    </>
  )
}

 const socialStyles = {
  follow: {
    justifyContent: 'center',
    color: 'text',
    '.inverse &': {
      color: 'textInverse',
    },

    a: {
      color: 'text',
      '.inverse &': {
        color: 'textInverse',
      },

      p: 'xxs',
      mx: 4,
      transition: '.6s',
      '&:hover': { opacity: 0.6 },
    },
    svg: {
      width: '18px',
      height: '18px',
    },
  },
  share: {
    icon: {
      border: '1px solid',
      borderColor: 'text',
      display: 'flex',
      width: '1.5rem',
      height: '1.5rem',
      mx: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      // bg: 'primary',

      borderRadius: '50%',
      svg: {
        color: 'text',
      },
    },
    name: {
      variant: 'text.special',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'center',
      '&>*': {
        variant: 'special.link',
        mx: 4,
        cursor: 'pointer',
      },
    },
  },
}
