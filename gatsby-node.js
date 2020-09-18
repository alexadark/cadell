const createSitePages = require(`./create/createSitePages`)
const createPosts = require(`./create/createPosts`)

const createUsers = require(`./create/createUsers`)

exports.createPages = async ({ actions, graphql }) => {
  await createSitePages({ actions, graphql })
  await createPosts({ actions, graphql })
  await createUsers({ actions, graphql })
}
