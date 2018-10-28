import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'

import BaseLayout from './base-layout'
import '../components/layout.css'

const MyStyle = createGlobalStyle`
  html,
  body,
  #___gatsby,
  #___gatsby > div {
    height: 100%;
  }

  p {
    color: green;
  }
`

const FrontPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Layout = ({ children }) => (
  <BaseLayout>
    <FrontPageContainer>{children}</FrontPageContainer>
    <MyStyle />
  </BaseLayout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
