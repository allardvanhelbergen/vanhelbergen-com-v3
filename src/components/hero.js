import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  text-align: center;
  margin-bottom: 2em;
`

const Hero = ({ children }) => <Section>{children}</Section>

export default Hero
