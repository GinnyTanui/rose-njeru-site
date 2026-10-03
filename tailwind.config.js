/** Brand tokens: swap these hex values when final brand colours/fonts arrive. */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0B3B3C', soft: '#12504F', deep: '#072A2B' }, // deep teal
        cream: { DEFAULT: '#F1EEE6', sand: '#E6E1D3' },                // warm paper
        accent: '#F2A93B',                                              // amber highlight
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
