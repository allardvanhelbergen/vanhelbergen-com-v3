/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    // const slug = createFilePath({ node, getNode, basePath: `blog` })
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              pageType
            }
          }
        }
      }
    }
  `)

  const pageTypeToTemplateMap = [
    { pageType: 'blog', template: './src/templates/blogpost-template.js' },
    {
      pageType: 'portfolio',
      template: './src/templates/portfolio-item-template.js',
    },
  ]

  const { createPage } = actions
  const edges = result.data.allMarkdownRemark.edges

  pageTypeToTemplateMap.forEach(({ pageType, template }) => {
    let filteredEdges = edges.filter(
      edge => edge.node.frontmatter.pageType === pageType
    )
    filteredEdges.forEach(({ node }, index) => {
      const prev = index === 0 ? null : filteredEdges[index - 1].node
      const next =
        index === filteredEdges.length - 1
          ? null
          : filteredEdges[index + 1].node

      createPage({
        path: node.fields.slug,
        component: path.resolve(template),
        context: {
          slug: node.fields.slug,
          prev,
          next,
        },
      })
    })
  })
}
