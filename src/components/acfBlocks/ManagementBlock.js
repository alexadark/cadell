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
              ...GatsbyImageSharpFixed_noBase64
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
        <h3 className="geReveal" sx={{ variant: "text.heading" }}>
          Management
        </h3>
        <Grid columns={[1, 1, 2]} gap={100}>
          {members &&
            members.map((member, i) => {
              const { name, content, email, image } = member
              return (
                <div key={i} className="member">
                  <Img
                    fixed={image.localFile.childImageSharp.fixed}
                    alt={name}
                    className="gsReveal"
                  />
                  <h4 className="name gsReveal">{name}</h4>
                  <p className="content gsReveal">{content}</p>

                  <a className="mail gsReveal" href={`mailto:${email}`}>
                    Email - {email}
                  </a>
                </div>
              )
            })}
        </Grid>
        <div
          className="info gsReveal"
          dangerouslySetInnerHTML={{ __html: info }}
        />
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
