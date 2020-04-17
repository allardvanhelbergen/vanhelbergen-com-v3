/**
 * Overrides of Tailwind default config
 * https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontSize: {
      // Adapted from Goldenratio calculator
      // https://grtcalculator.com/
      xs: '0.625rem', // 10px/16; sub, sup
      sm: '0.8125rem', // 13px/24; figcaption
      base: '1rem', // 16px/28; h4 & p
      lg: '1.125rem', // 20px/36, h3
      xl: '1.625rem', // 26px/44 h2
      '2xl': '2.0625rem', // 33px/52; h1
      '3xl': '2.625rem', // 42px/68; sub-title
      '4xl': '3.375rem', // 54px/88; title
      '5xl': '4.25rem', // 68px/104;
      '6xl': '5.5rem', // 88px/136;
      // Bigger 112/172, 140/216136/4
    },
    lineHeight: {
      // relative heights
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      // absolute heights
      '3': '.75rem', // 12px
      '4': '1rem', // 16px
      '5': '1.25rem', //
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      // custom absolut heights
      xs: '1rem', // 10px/16; sub, sup
      sm: '1.5rem', // 13px/24; figcaption
      base: '1.75rem', // 16px/28; h4 & p
      lg: '2.25rem', // 20px/36, h3
      xl: '2.75rem', // 26px/44 h2
      '2xl': '3.25rem', // 33px/52; h1
      '3xl': '4.25rem', // 42px/68; sub-title
      '4xl': '5.5rem', // 54px/88; title
      '5xl': '6.5rem', // 68px/104;
      '6xl': '8.5rem', // 88px/136;
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
