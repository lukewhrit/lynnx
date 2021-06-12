module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: require('tailwindcss/colors'),
      fontSize: {
        '4.5xl': ['2.45rem', {
          lineHeight: '3rem',
        }],
        '1.5xl': ['1.35rem', {
          lineHeight: '2rem',
        }],
      },
      borderWidth: {
        2.5: '2.5px',
        3: '3px',
      },
      height: {
        30: '7.25rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
