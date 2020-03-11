import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from './default-page-template'
import BlogPrevNextNav from '../components/BlogPrevNextNav'

export default ({ data, pageContext }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      {post.frontmatter.featuredImage &&
        post.frontmatter.featuredImage.childImageSharp.fluid && (
          <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
        )}
      <h1>{post.frontmatter.title}</h1>
      <p>Posted on {post.frontmatter.date}</p>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <BlogPrevNextNav pageContext={pageContext} />
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
        featuredImage {
          childImageSharp {
            fluid(
              traceSVG: {
                color: "#f90"
                turnPolicy: TURNPOLICY_MINORITY
                blackOnWhite: false
              }
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
