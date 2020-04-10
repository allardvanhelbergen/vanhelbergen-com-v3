import React from 'react'
import BlogPrevNextNav from './BlogPrevNextNav'

const prev = {
  fields: { slug: 'previous-slug' },
  frontmatter: { title: 'Previous title' },
}

const next = {
  fields: { slug: 'next-slug' },
  frontmatter: { title: 'Next title' },
}

const pageContextPreviousOnly = { prev }
const pageContextNextOnly = { next }
const pageContextBoth = { prev, next }

export const All = () => (
  <div>
    <b>Both</b>
    <div>
      <BlogPrevNextNav pageContext={pageContextBoth} />
    </div>
    <b>Previous only</b>
    <div>
      <BlogPrevNextNav pageContext={pageContextPreviousOnly} />
    </div>
    <b>Next only</b>
    <div>
      <BlogPrevNextNav pageContext={pageContextNextOnly} />
    </div>
  </div>
)

export default {
  title: 'Components/BlogPrevNextNav',
  component: BlogPrevNextNav,
}
