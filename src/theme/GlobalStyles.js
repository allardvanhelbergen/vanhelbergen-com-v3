import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'
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
    ${tw`text-base leading-base
      sm:text-lg sm:leading-lg
      font-serif text-gray-800 
      bg-gray-100`}
    min-height: 100vh;
    width: 100vw;
    max-width: 100vw;
    scroll-behavior: smooth;
    background: url(${bodyBackgroundImage});
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    font-variant-ligatures: common-ligatures discretionary-ligatures historical-ligatures contextual;
    font-variant-numeric: oldstyle-nums proportional-nums;
    font-feature-settings: 'pnum';
  }

  [tabindex="-1"]:focus {
    outline: 0 !important;
  }

  h1 {
    ${tw`text-3xl leading-3xl 
      sm:text-4xl sm:leading-3xl
      my-7
      font-serif font-medium tracking-tighter`}
  }

  h2 {
    ${tw`text-2xl leading-2xl 
      sm:text-3xl sm:leading-3xl 
      mt-7 mb-4
      font-sans font-semibold tracking-tighter`}
  }
  h3 {
    ${tw`text-xl leading-xl
      sm:text-2xl sm:leading-2xl
      mt-7 mb-3
      font-serif tracking-tight text-gray-600`}
    font-variant-caps: small-caps;
  }
  h4 {
    ${tw`text-xl leading-xl
      font-sans font-semibold`}
  }
  h5 {
    ${tw`text-lg leading-lg
      font-medium`}
  }
  h6 {
    ${tw`text-base leading-base
      font-sans font-bold text-gray-600`}
    font-variant-caps: small-caps;
  }

  p {
    ${tw`my-2 font-serif`}
  }

  sub,
  sup {
    font-size: 62%;
    line-height: 50%;
  }

  a {
    ${tw`bg-transparent text-orange-800`}
    text-decoration: underline;
    transition: color 0.2s ease-in-out;
    
    &:visited {
      ${tw`text-orange-900`}
    }

    &:hover, 
    &:active,
    &:focus {
      ${tw`text-orange-400`}
      text-decoration: none;
    }
  }

  abbr {
    ${tw`text-orange-800`}
    cursor: help;
  }

  ul,
  ol {
    ${tw`px-7 mb-7`}
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
    
    ol{
      list-style: lower-alpha
    }
  }

  ol ol, 
  ol ul, 
  ul ol, 
  ul ul {
    margin-bottom: 0;
  }

  dl {
    ${tw`mb-7`}
    
    dt {
      ${tw`block font-bold`}
    }
    
    dd {
      ${tw`pl-7`}
    }
  }

  blockquote {
    ${tw`py-2 px-4 mb-7
    border-l-4 border-orange-400
    rounded
    bg-gray-200 
    font-sans italic text-gray-700`}

    blockquote {
      ${tw`mb-0`}
    }
  }

  kbd, 
  pre,
  code {
    ${tw`bg-gray-200 text-purple-800`}
    font-size: .875em;
  }

  pre {
    ${tw`p-4 
    border-l-4 border-purple-800 
    rounded`}
    line-height: 1.5em;
  }

  :not(pre) > code, 
  kbd {
    ${tw`inline-block px-1 rounded-sm`}
    line-height: 1.5em;
    white-space: nowrap;
  }

  table {
    ${tw`font-sans`}
    font-size: 80%;
    /* line-height: 80%; */

    th, 
    td {
      ${tw`px-2 text-left align-top`}
    }
  
    th {
      ${tw`border-b`}
    }
  }

  hr {
    ${tw`my-7 mx-auto p-0 
    border-none border-0 
    h-px w-10/12 
    text-center overflow-visible`}
    background-image: linear-gradient(to right, #f7fafc, #718096, #f7fafc);
    
    &:after {
      ${tw`inline-block relative px-1 
      rounded-full bg-white 
      text-base text-gray-700 leading-none`}
      content: '§';
      top: -0.875rem;
      @media (min-width: 640px) {
        top: -1.175rem;
      }
    }
  }


  /* Natural flow and rhythm in articles by default */
  article > * + * {
    ${tw`mt-4`}
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
