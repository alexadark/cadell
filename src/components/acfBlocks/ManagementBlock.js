/** @jsx jsx */
import { jsx, Grid, Container } from "theme-ui"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export const fragment = graphql`
  fragment managementBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_ManagementBlock {
    anchor
    info
    members {
      name
      content
      email
      image {
        localFile {
          childImageSharp {
            fixed(toFormat: JPG, width: 145) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export const ManagementBlock = ({ anchor, info, members }) => {
  return (
    <section id={anchor || ""} className="management" sx={{ ...style }}>
      <Container sx={{ px: "30px !important" }}>
        <Grid columns={[1, 1, 2]} gap={100}>
          {members &&
            members.map((member, i) => {
              const { name, content, email, image } = member
              return (
                <div key={i} className="member">
                  <Img
                    fixed={image.localFile.childImageSharp.fixed}
                    alt={name}
                  />
                  <h4 className="name">{name}</h4>
                  <p className="content">{content}</p>

                  <a className="mail" href={`mailto:${email}`}>
                    Email - {email}
                  </a>
                </div>
              )
            })}
        </Grid>
        <div className="info" dangerouslySetInnerHTML={{ __html: info }} />
      </Container>
    </section>
  )
}

const style = {
  mt: 50,
  mb: 150,
  ".name": {
    fontFamily: "body",
    color: "black",
    mt: 10,
  },
  ".content": {
    mb: 50,
  },
  ".mail": {
    color: "purple",
    fontSize: "s",
    "&:hover": {
      color: "black",
    },
  },
  ".info": {
    mt: 100,
  },
}
