import React from 'react'
// import styled from 'styled-components'
import { graphql, Link } from 'gatsby'

import Layout from '../templates/default-page-template.js'

export default ({ data }) => {
  return (
    <Layout>
      <hgroup>
        <h1>Portfolio</h1>
        <h2>2019</h2>
      </hgroup>
      <table>
        <tbody>
          {data.allMdx.edges.map(({ node }) => (
            <tr key={node.id}>
              <td>{node.frontmatter.date}</td>
              <td>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { pageType: { eq: "portfolio" } } }
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
