/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: {
        '50': '#f6f7f9',
        '100': '#eceff2',
        '200': '#d4dbe3',
        '300': '#aebccb',
        '400': '#8297ae',
        '500': '#637b94',
        '600': '#4e637b',
        '700': '#405064',
        '800': '#384454',
        '900': '#323c48',
        '950': '#222831',
      },
      secondary: {
        '50': '#f4f5f1',
        '100': '#e6e7da',
        '200': '#d0d1b7',
        '300': '#b6b68e',
        '400': '#a09e6f',
        '500': '#928e60',
        '600': '#7c7652',
        '700': '#655d43',
        '800': '#564e3d',
        '900': '#4c4437',
        '950': '#312b22',
      },
    }
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')
  ],

}

