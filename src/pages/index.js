import React from 'react'
import styled from 'styled-components'

import Layout from '../layouts/base-layout'
import Hero from '../components/hero'

const HeroTextWrapper = styled.section`
  padding: 2em;
`

const ThreeDText = styled.h2`
  font: 8.125rem/2 'Helvetica Neue', Helvetica, Arial, sans-serif; // 130px
  color: #f5a52b;
  font-weight: bold;
  text-shadow: 0 0 0 rgb(217, 136, 15), 0 1px 0 rgb(210, 129, 8),
    0 2px 0 rgb(204, 123, 2), 0 3px 0 rgb(198, 117, -4),
    0 4px 0 rgb(192, 111, -10), 0 5px 0 rgb(185, 104, -17),
    0 6px 0 rgb(179, 98, -23), 0 7px 0 rgb(173, 92, -29),
    0 8px 7px rgba(0, 0, 0, 0.6), 0 8px 1px rgba(0, 0, 0, 0.5),
    0 0 7px rgba(0, 0, 0, 0.2);
`

const InsetText = styled.h3`
  background-color: #d8d8d8;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 3.5rem; // 56px
  text-shadow: 0 2px 3px rgba(255, 255, 255, 0.5);
`

const IndexPage = () => (
  <Layout>
    <Hero>
      <HeroTextWrapper>
        <ThreeDText>Hi, I’m Allard.</ThreeDText>
        <InsetText>UX Designer | Frontend Aficionado</InsetText>
      </HeroTextWrapper>
    </Hero>
  </Layout>
)

export default IndexPage
