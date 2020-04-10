import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import tokens from '../../theme/tokens'

const IconCircle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  transform: perspective(1px) translateZ(0);
  transition: all 0.5s ease-in-out;

  :hover,
  :focus,
  :active {
    background-color: lightgray;
    color: #333;

    * {
      transform: perspective(1px) translateZ(0);
      transition: all 0.5s ease-in-out;
      color: #333;
    }
  }

  height: 5rem;
  width: 5rem;
  margin: 0.5rem;
  font-size: 3rem;
  line-height: 1rem;

  @media (min-width: ${tokens.breakpoint.smallAndUp}) {
    margin: 0.625rem;
  }
  @media (min-width: ${tokens.breakpoint.mediumAndUp}) {
    margin: 0.75rem;
  }
  @media (min-width: ${tokens.breakpoint.largeAndUp}) {
    margin: 1rem;
  }
  @media (min-width: ${tokens.breakpoint.extraLargeAndUp}) {
    margin: 1.5rem;
  }
`
const IconWrapper = styled.div`
  display: relative;
  color: #d8d8d8;
`

const SocialIcon = ({ url, children }) => (
  <IconCircle href={url}>
    <IconWrapper>{children}</IconWrapper>
  </IconCircle>
)

SocialIcon.propTypes = {
  url: PropTypes.string,
}

export default SocialIcon
