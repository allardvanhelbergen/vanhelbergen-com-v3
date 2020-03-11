import React from 'react'
// import styled from 'styled-components'
import { graphql, Link } from 'gatsby'

import Layout from '../templates/default-page-template.js'

export default ({ data }) => {
  return (
    <Layout>
      <hgroup>
        <h1>Writings</h1>
        <h2>Blogs</h2>
      </hgroup>
      <table>
        <tbody>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <tr key={node.id}>
              <td>{node.frontmatter.date}</td>
              <td>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <h2>Papers and publications </h2>
      <table>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <tr key={node.id}>
            <td>{node.frontmatter.date}</td>
            <td>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </td>
          </tr>
        ))}
      </table> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { pageType: { eq: "blog" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
