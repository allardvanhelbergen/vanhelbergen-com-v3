import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const IconCircle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 5rem;
  margin: 0.75rem;
  border-radius: 50%;
  font-size: 3rem;

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
