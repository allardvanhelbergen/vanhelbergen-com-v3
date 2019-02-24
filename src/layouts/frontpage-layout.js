import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'

import BaseLayout from './base-layout'
import tokens from '../theme/tokens'

const fullPageStyles = createGlobalStyle`
  html,
  body,
  #___gatsby,
  #___gatsby > div {
    height: 100%;
  }
`

const FrontPageContainer = styled.div`
  margin: 0 auto;
  padding: 1.25rem 1.5rem; // 20px 24px

  @media (min-width: ${tokens.breakpoint.mediumAndUp}) {
    max-width: 45rem; // 720px
  }

  @media (min-width: ${tokens.breakpoint.largeAndUp}) {
    max-width: 60rem; // 960px
  }

  @media (min-width: ${tokens.breakpoint.extraLargeAndUp}) {
    max-width: 75rem; // 1200px
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Layout = ({ children }) => (
  <BaseLayout>
    <fullPageStyles />
    <FrontPageContainer>{children}</FrontPageContainer>
  </BaseLayout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
