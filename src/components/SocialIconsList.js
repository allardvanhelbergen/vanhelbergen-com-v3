import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0 4rem;
`

const SocialIconsList = ({ children }) => <Section>{children}</Section>

export default SocialIconsList
