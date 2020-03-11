import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const NextPrevNav = styled.nav`
  margin: 4em 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  .right {
    text-align: right;
  }
`

const BlogPrevNextNav = ({ pageContext }) => {
  const prev = pageContext.hasOwnProperty('prev') ? pageContext.prev : null
  const next = pageContext.hasOwnProperty('next') ? pageContext.next : null

  return (
    <NextPrevNav>
      <p>
        {prev && (
          <>
            Previous: <br />
            <Link to={prev.fields.slug}>{prev.frontmatter.title}</Link>
          </>
        )}
      </p>
      <p className="right">
        {next && (
          <>
            Next: <br />
            <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
          </>
        )}
      </p>
    </NextPrevNav>
  )
}

BlogPrevNextNav.propTypes = {
  pageContext: PropTypes.object,
}

export default BlogPrevNextNav
