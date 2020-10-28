import React from 'react'
import styled from 'styled-components'

// import tokens from '../../theme/tokens'

const IconsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const SocialIconsList = ({ children }) => <IconsList>{children}</IconsList>

export default SocialIconsList
