const tokens = {
  breakpoint: {
    // Mobile first, so smallest size has no breakpoint.
    smallAndUp: '576px',
    mediumAndUp: '768px',
    largeAndUp: '992px',
    extraLargeAndUp: '1201px',
  },
  color: {
    background: '#eee',
    text: {
      default: '#212529',
      link: '#007bff',
      linkHover: '#0056b3',
    },
  },
  font: {
    base: {
      family: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
        "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", 
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      size: '1.25rem',
      lineHeight: '1.4',
    },
    code: {
      family: `'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono',
        'Liberation Mono', Menlo, Courier, monospace`,
      size: '1em',
    },
  },
}

export default tokens
