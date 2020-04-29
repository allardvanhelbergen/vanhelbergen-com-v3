import React from 'react'
import PropTypes from 'prop-types'
import tw from 'twin.macro'
import styled, { createGlobalStyle } from 'styled-components'

import BaseLayout from './base-template'
import tokens from '../theme/tokens'

const FullPageStyle = createGlobalStyle`
  html,
  body,
  #___gatsby,
  #___gatsby > div {
    height: 100%;
  }
`

const FrontPageContainer = styled.div`
  ${tw`sm:max-w-2xl
  m-auto px-5`}
`

const Layout = ({ children }) => (
  <BaseLayout>
    <FullPageStyle />
    <FrontPageContainer>{children}</FrontPageContainer>
  </BaseLayout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
