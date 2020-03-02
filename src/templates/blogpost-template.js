import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from './default-page-template'

const NextPrevNav = styled.nav`
  margin: 4em 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  .right {
    text-align: right;
  }
`

export default ({ data, pageContext }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <NextPrevNav>
        <p>
          {pageContext.prev && (
            <>
              Previous: <br />
              <Link to={pageContext.prev.fields.slug}>
                {pageContext.prev.frontmatter.title}
              </Link>
            </>
          )}
        </p>
        <p className="right">
          {pageContext.next && (
            <>
              Next: <br />
              <Link to={pageContext.next.fields.slug}>
                {pageContext.next.frontmatter.title}
              </Link>
            </>
          )}
        </p>
      </NextPrevNav>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
