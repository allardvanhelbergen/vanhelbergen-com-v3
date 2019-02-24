import React from 'react'
import styled from 'styled-components'

import tokens from '../theme/tokens'

const IconsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;

  @media (min-width: ${tokens.breakpoint.smallAndUp}) {
    margin-bottom: 1rem;
  }
  @media (min-width: ${tokens.breakpoint.mediumAndUp}) {
    margin-bottom: 2rem;
  }
  @media (min-width: ${tokens.breakpoint.largeAndUp}) {
    margin-bottom: 4rem;
  }
`

const SocialIconsList = ({ children }) => <IconsList>{children}</IconsList>

export default SocialIconsList
