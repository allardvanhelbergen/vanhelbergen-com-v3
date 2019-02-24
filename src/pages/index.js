import React from 'react'
import styled from 'styled-components'
import {
  // FaDribbble,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMediumM,
  FaYoutube,
} from 'react-icons/fa'

import Layout from '../layouts/frontpage-layout'
import SocialIcon from '../components/SocialIcon'
import IconsList from '../components/SocialIconsList'
import tokens from '../theme/tokens'

const WelcomeText = styled.div`
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

const WelcomeMain = styled.h1`
  color: #f5a52b;
  text-shadow: 0 0 0 rgb(217, 136, 15), 0 1px 0 rgb(210, 129, 8),
    0 2px 0 rgb(204, 123, 2), 0 3px 0 rgb(198, 117, -4),
    0 4px 0 rgb(192, 111, -10), 0 5px 0 rgb(185, 104, -17),
    0 6px 0 rgb(179, 98, -23), 0 7px 0 rgb(173, 92, -29),
    0 8px 7px rgba(0, 0, 0, 0.6), 0 8px 1px rgba(0, 0, 0, 0.5),
    0 0 7px rgba(0, 0, 0, 0.2);

  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 3.75rem; // 60px
  line-height: 1.2;

  @media (min-width: ${tokens.breakpoint.smallAndUp}) {
    font-size: 5rem; // 80px
  }
  @media (min-width: ${tokens.breakpoint.mediumAndUp}) {
    font-size: 6.25rem; // 100px
    margin-bottom: 2rem;
  }
  @media (min-width: ${tokens.breakpoint.largeAndUp}) {
    font-size: 8.125rem; // 130px
    margin-bottom: 3rem;
  }
`

const WelcomeTagLine = styled.h2`
  background-color: #d8d8d8;
  color: transparent;
  text-shadow: 0 2px 3px rgba(255, 255, 255, 0.5);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;

  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.75rem; // 56px
  line-height: 1.2;

  @media (min-width: ${tokens.breakpoint.smallAndUp}) {
    font-size: 2.3rem; // 80px
  }
  @media (min-width: ${tokens.breakpoint.mediumAndUp}) {
    font-size: 2.875rem; // 100px
  }
  @media (min-width: ${tokens.breakpoint.largeAndUp}) {
    font-size: 3.75rem; // 130px
    line-height: 1.5;
  }
`

const IndexPage = () => (
  <Layout>
    <WelcomeText>
      <WelcomeMain>Hi, I’m Allard.</WelcomeMain>
      <WelcomeTagLine>UX&nbsp;Designer Frontend&nbsp;Aficionado</WelcomeTagLine>
    </WelcomeText>
    <IconsList>
      <SocialIcon url="http://www.linkedin.com/in/allardvanhelbergen">
        <FaLinkedinIn />
      </SocialIcon>
      <SocialIcon url="https://github.com/allardvanhelbergen">
        <FaGithub />
      </SocialIcon>
      <SocialIcon url="https://medium.com/@vanhelbergen">
        <FaMediumM />
      </SocialIcon>
      {/* <SocialIcon url="https://dribbble.com/allardvanhelbergen">
        <FaDribbble />
      </SocialIcon> */}
      <SocialIcon url="https://www.instagram.com/allardvanhelbergen/">
        <FaInstagram />
      </SocialIcon>
      <SocialIcon url="https://www.youtube.com/user/djzoos">
        <FaYoutube />
      </SocialIcon>
      <SocialIcon url="https://www.facebook.com/allard.van.helbergen">
        <FaFacebookF />
      </SocialIcon>
    </IconsList>
  </Layout>
)

export default IndexPage
