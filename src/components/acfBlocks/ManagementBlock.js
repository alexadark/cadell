/** @jsx jsx */
import { jsx, Grid, Container, Flex, Box } from "theme-ui"
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
                    fixed={image?.localFile?.childImageSharp?.fixed}
                    alt={name}
                    className="gsReveal"
                  />
                  <h4 className="name gsReveal">{name}</h4>
                  <p
                    className="content gsReveal"
                    sx={name.toLowerCase() !== "richard" && { mb: 50 }}
                  >
                    {content}
                  </p>
                  <Box
                    sx={{
                      position: "relative",
                    }}
                  >
                    <a className="mail gsReveal" href={`mailto:${email}`}>
                      Email - {email}
                    </a>
                    {name.toLowerCase().includes("richard") && (
                      <img
                        src="/private-client.png"
                        sx={{
                          maxWidth: "18%",
                          position: "absolute",
                          right: 0,
                          top: [-20, -50],
                        }}
                      />
                    )}
                  </Box>
                </div>
              )
            })}
        </Grid>
        <Grid
          className="recognition gsReveal"
          columns={[1, 2, 4]}
          gap={20}
          sx={{ my: [50, 70, 100] }}
        >
          <img src="/step.jpg" alt="" />
          <img src="/step-16-17.png" alt="" />
          <img src="/step17-18.png" alt="" />
          <img src="/spears.png" alt="" />
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
  pt: 50,
  pb: 100,
  scrollMarginTop: 80,
  ".name": {
    fontFamily: "body",
    color: "black",
    mt: 10,
  },
  ".content": {},
  ".mail": {
    color: "purple",
    fontSize: "s",
    "&:hover": {
      color: "black",
    },
  },
  ".info": {
    // mt: 100,
  },
}
