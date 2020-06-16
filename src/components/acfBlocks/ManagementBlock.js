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
            fixed(toFormat: JPG, width: 200) {
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
    <section id={anchor || ""} className="management">
      <Container sx={{ px: "30px !important" }}>
        <Grid columns={[1, 1, 2]} gap={50}>
          {members &&
            members.map((member, i) => {
              const { name, content, email, image } = member
              return (
                <div className="member">
                  <Img
                    fixed={image.localFile.childImageSharp.fixed}
                    alt={name}
                  />
                  <h4>{name}</h4>
                  <p>{content}</p>

                  <a href={`mailto:${email}`}>Email - {email}</a>
                </div>
              )
            })}
        </Grid>
        <div className="info" dangerouslySetInnerHTML={{ __html: info }} />
      </Container>
    </section>
  )
}
