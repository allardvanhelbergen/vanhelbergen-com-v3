import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'
import tokens from './tokens'
import bodyBackgroundImage from '../images/noise-100x100-90noise-4opacity.png'

/**
 * Preflight: An opinionated set of base styles for Tailwind projects.
 * Built on top of normalize.css
 * https://tailwindcss.com/docs/preflight/
 * https://unpkg.com/tailwindcss@1.2.0/dist/base.css
 */
import './tailwind.css'

const GlobalStyles = createGlobalStyle`
  html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    width: 100vw;
    max-width: 100vw;
    scroll-behavior: smooth;
    background: url(${bodyBackgroundImage});
    background-color: ${tokens.color.background};
    color: ${tokens.color.text.default};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  [tabindex="-1"]:focus {
    outline: 0 !important;
  }

  h1 {
    ${tw`text-6xl`}
  }

  h2 {
    ${tw`text-4xl`}
  }

  a {
    color: ${tokens.color.text.link};
    background-color: transparent;
    
    &:hover {
      color: ${tokens.color.text.linkHover};
      text-decoration: none;
    }

    /* A elements that don't have a class get default styles */
    &:not([class]) {
      text-decoration-skip-ink: auto;
    }
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1rem;
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
