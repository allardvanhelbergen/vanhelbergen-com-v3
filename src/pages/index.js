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

import Layout from '../templates/frontpage-template'
import SocialIcon, { SocialIconList } from '../components/SocialIcon'
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
    <SocialIconList>
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
    </SocialIconList>
    {/* <div>
      <p>
        I’m a User Experience Designer based in Sydney, Australia. I have a
        passion for design systems, design process and tooling.
      </p>
    </div> */}
    {/* <p>
      I am a UX Designer currently based in Berlin. I’m a Vrije Universiteit,
      Amsterdam alumnus with an M.Sc. in Human Computer Interaction (Information
      Science: Multimedia and Culture). With an international background and
      great interest in workflows and the structuring of information, I am keen
      on designing interaction in that works for the target persona.
    </p>

    <p>
      Currently I work at Brandwatch in Berlin, where I work on the Analytics
      web app and take care of the various facets of (user)research and
      strategies around upgrading the frontend design and development process.
      Previously, I worked for deltamethod and on the Search Quality Evaluation
      team for Google in Dublin, where I did UX and front end development on the
      tools team.
    </p>

    <p>
      Being a bit of a process geek I like to focus on strategic UX work;
      guiding the design thinking processes and fitting that into Agile
      environments. I have a strong background in web development and frontend
      design, having done full-stack development and progressing to more pure
      frontend things for various clients and employers. In the past I have also
      done a lot of desktop publishing things, creating textiles prints,
      posters, flyers and even books.
    </p>

    <p>
      Other than that I’m an avid (wind-/kite-/everything-)surfer, skateboarder
      and snowboarder getting an adrenaline fix whenever I get the chance.
    </p> */}
  </Layout>
)

export default IndexPage
