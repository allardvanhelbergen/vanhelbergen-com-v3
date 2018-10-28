import React from 'react'
import PropTypes from 'prop-types'

import BaseLayout from './base-layout'
import HeaderNav from '../components/header-nav'
import '../components/layout.css'

const Layout = ({ children }) => (
  <BaseLayout>
    <HeaderNav />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  </BaseLayout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
