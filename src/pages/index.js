import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import {
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMediumM,
} from 'react-icons/fa'

import BaseLayout from '../templates/base-template'
import Layout from '../templates/frontpage-template'
import SocialIcon, { SocialIconList } from '../components/SocialIcon'
import tokens from '../theme/tokens'
import ArrowSVG from '../images/arrow-down.inline.svg'

const MyWelcome = styled.section`
  ${tw`h-screen  
  flex flex-col justify-center justify-between`}
`

const WelcomeText = styled.div`
  ${tw`h-screen  
  flex flex-col justify-center`}

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
  ${tw`font-sans m-0`}
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
  margin: 0;
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

const DownArrow = styled.div`
  ${tw`text-center `}

  p {
    ${tw`m-0`}
  }

  svg {
    ${tw`w-8 h-3 inline-block`}
  }
`

const MyAboutMe = styled.section`
  ${tw`h-screen
  bg-white shadow-inner
  flex flex-col justify-center`}
`

const MySocialIcons = styled.section`
  ${tw`m-5 sm:m-8 md:m-13 lg:m-21 xl:m-34`}
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const IndexPage = () => (
  <BaseLayout>
    <MyWelcome>
      <WelcomeText>
        <WelcomeMain>Hi, I’m Allard.</WelcomeMain>
        <WelcomeTagLine>UX&nbsp;Designer</WelcomeTagLine>
      </WelcomeText>
      <DownArrow>
        <p>scroll down</p>
        <ArrowSVG />
      </DownArrow>
    </MyWelcome>

    <MyAboutMe>
      <Layout>
        <h3>About me</h3>
        <p>
          I have a passion for design systems, design process, and tooling. I'm
          a highly technical UX designer and love to dig into meaty problems
          that require multiple levels of abstraction.
        </p>
        <p>
          I'm currently working a declarative UI system for Forge in the
          Ecosystem Platform team at Atlassian. Previously, I worked on the
          Atlassian Design Guidelines and the Atlaskit library in Atlassian's
          Design System team. And before that, I worked at Google in Dublin and
          Brandwatch in Berlin, as well as a bunch of start-up and agency
          things.
        </p>
        <p>
          Want to know more?
          <br />
          Check out my portfolio, articles, or talks.
        </p>
      </Layout>
    </MyAboutMe>

    {/* <section id="portfolio">
      <h2>Selected projects</h2>
      <p>
        A selection of <strong>Design System</strong>,{' '}
        <strong>UX Strategy</strong> and{' '}
        <strong>Collaborative Design Thinking</strong> works from my portfolio.
      </p>
      <div className="tile">Project</div>
      <p>
        I have been building and designing things since I was a teenager. Check
        out more of my projects
      </p>
      <a href="">Archive</a>
    </section> */}

    {/* <section id="Articles">
      Some musings about <strong>Design System Architecture</strong>, building{' '}
      <strong>Components</strong>
      <div className="summary">Article</div>
      Archive
    </section> */}

    {/* <section id="talks">
      <div className="talk">Talk</div>
    </section> */}

    <MySocialIcons>
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
        <SocialIcon url="https://dribbble.com/allardvanhelbergen">
          <FaDribbble />
        </SocialIcon>
        <SocialIcon url="https://www.instagram.com/allardvanhelbergen/">
          <FaInstagram />
        </SocialIcon>
      </SocialIconList>
    </MySocialIcons>
  </BaseLayout>
)

export default IndexPage
