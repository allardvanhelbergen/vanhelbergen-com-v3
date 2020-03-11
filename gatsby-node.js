/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const pageTypeToTemplateMap = [
  { pageType: 'blog', template: './src/templates/blogpost-template.js' },
  {
    pageType: 'portfolio',
    template: './src/templates/portfolio-item-template.js',
  },
]

const PAGE_QUERY = `
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
    allMdx(sort: { order: ASC, fields: [frontmatter___date] }) {
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
`

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if ([`MarkdownRemark`, `Mdx`].includes(node.internal.type)) {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(PAGE_QUERY)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const { createPage } = actions
  const edges = [
    ...result.data.allMarkdownRemark.edges,
    ...result.data.allMdx.edges,
  ]

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
