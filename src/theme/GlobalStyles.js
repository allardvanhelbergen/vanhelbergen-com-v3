import { createGlobalStyle } from 'styled-components'

import tokens from './tokens'
import bodyBackgroundImage from '../images/noise-100x100-90noise-4opacity.png'

const GlobalStyles = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }
  
  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  html {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-size: 100%
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    background: url(${bodyBackgroundImage});
    background-color: ${tokens.color.background};
    color: ${tokens.color.text.default};
    font-family: ${tokens.font.base.family};
    font-size: ${tokens.font.base.size};
    font-weight: 400;
    line-height: ${tokens.font.base.lineHeight};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
  }

  [tabindex="-1"]:focus {
    outline: 0 !important;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  a {
    color: ${tokens.color.text.link};
    background-color: transparent;
  }

  a:hover {
    color: ${tokens.color.text.linkHover};
    text-decoration: none;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1rem;
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: ${tokens.font.code.family};
    font-size: ${tokens.font.code.size};
  }

  pre {
    overflow: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* Utility styles */
  [hidden] {
    display: none !important;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`

export default GlobalStyles
