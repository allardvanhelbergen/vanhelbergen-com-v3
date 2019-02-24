import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseLayout from './base-layout'
import HeaderNav from '../components/header-nav'
import tokens from '../theme/tokens'

const Content = styled.div`
  margin: 0 auto;
  padding: 1.25rem 1.5rem; // 20px 24px

  @media (min-width: ${tokens.breakpoint.mediumAndUp}) {
    max-width: 45rem; // 720px
  }

  @media (min-width: ${tokens.breakpoint.largeAndUp}) {
    max-width: 60rem; // 960px
  }
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
