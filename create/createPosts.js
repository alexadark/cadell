const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)
const blogTemplate = path.resolve(`./src/templates/blog.js`)
const postTemplate = path.resolve(`./src/templates/post.js`)

const gql = require("fake-tag")

const GET_POSTS = gql`
  query($limit: Int) {
    allWpPost(limit: $limit, sort: { order: DESC, fields: date }) {
      edges {
        previous {
          uri
        }
        node {
          uri
        }
        next {
          uri
        }
      }
    }
  }
`
module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  //create a page for each post
  const postsQuery = await graphql(GET_POSTS)
  const posts = postsQuery.data.allWpPost.edges

  posts.map(post => {
    createPage({
      path: post.node.uri,
      component: postTemplate,
      context: {
        uri: post.node.uri,
        prev: post.previous ? post.previous.uri : null,
        next: post.next ? post.next.uri : null,
      },
    })
  })

  // Create a blog page containing all "posts" and paginate.

  paginate({
    createPage,
    pathPrefix: "/blog",
    component: blogTemplate,
    items: posts,
    itemsPerPage: 10,
  })
}
