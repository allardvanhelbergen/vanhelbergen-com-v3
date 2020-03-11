import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseLayout from './base-template'
import HeaderNavBar from '../components/HeaderNavBar'
import tokens from '../theme/tokens'

const Content = styled.main`
  margin: auto;
  padding: 10rem 1.5rem; // 20px 24px

  @media (min-width: ${tokens.breakpoint.mediumAndUp}) {
    max-width: 45rem; // 720px
  }

  @media (min-width: ${tokens.breakpoint.largeAndUp}) {
    max-width: 60rem; // 960px
  }
`

const Layout = ({ children }) => (
  <BaseLayout>
    <HeaderNavBar />
    <Content role="main">{children}</Content>
  </BaseLayout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
