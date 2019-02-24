const tokens = {
  breakpoint: {
    // Mobile first, so smallest size has no breakpoint.
    smallAndUp: '576px',
    mediumAndUp: '768px',
    largeAndUp: '992px',
    extraLargeAndUp: '1201px',
  },
  color: {
    text: {
      default: '#212529',
    },
  },
  fontFamilyBase: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", 
    "Segoe UI Symbol", "Noto Color Emoji"`,
  fontFamilyCode: `'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono',
    'Liberation Mono', Menlo, Courier, monospace`,
}

export default tokens
