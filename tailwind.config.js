/** Brand tokens (client palette, four colours only). Change the hex values here and the whole site follows.
 *  cream #F8FAFC  main background (off-white)
 *  ink   #0F172A  deep navy: headings, navigation, footer, dark sections, primary buttons
 *  slate #475569  body text and descriptions
 *  sand  #D6CEC2  warm stone: badges, rounded panels, soft section tints, highlights on navy
 *  No teal and no amber anywhere. */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0F172A', soft: '#1E293B', deep: '#0A1020' },
        cream: { DEFAULT: '#F8FAFC' },
        slate: { DEFAULT: '#475569', light: '#64748B' },
        sand: { DEFAULT: '#D6CEC2' },
        accent: '#D6CEC2',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        flow: { '0%': { top: '0%', opacity: 0 }, '20%,80%': { opacity: 1 }, '100%': { top: '100%', opacity: 0 } },
      },
      animation: { float: 'float 7s ease-in-out infinite', flow: 'flow 2.4s linear infinite' },
    },
  },
  plugins: [],
};