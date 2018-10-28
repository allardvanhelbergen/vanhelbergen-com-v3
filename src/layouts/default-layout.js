import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseLayout from './base-layout'
import HeaderNav from '../components/header-nav'
import '../components/layout.css'

const Content = styled.div`
  margin: 0 auto;
  max-width: 60rem; // 960px
  padding: 1.25rem 1.5rem; // 20px 24px
`

const Layout = ({ children }) => (
  <BaseLayout>
    <HeaderNav />
    <Content>{children}</Content>
  </BaseLayout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
