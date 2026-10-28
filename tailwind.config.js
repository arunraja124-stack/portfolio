/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070a12',
        panel: '#0d1220',
        panel2: '#131a2e',
        line: '#222b45',
        mute: '#9aa4bf',
        violet: { DEFAULT: '#8b7cf6', soft: '#b4a9ff' },
        sky: { DEFAULT: '#5b8cff' },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Figtree', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
