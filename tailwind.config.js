/** Brand tokens: "Daylight blueprint". Change a hex here and the whole site follows.
 *  cream  #EEF4FF  paper (main background)
 *  brand  #2F5BFF  electric blue (hero + feature bands, CTAs, links)
 *  ink    #10141A  headings and body text, footer
 *  muted  #4F5B6B  supporting text
 *  mint   #A8D8B9  line-work only (illustrations, thin rules), never text on light backgrounds
 *  sand   #DCE7FF  soft blue tint for badges and small panels
 *  orange #FF8A3D  supporting accent (CTAs on blue/dark, eyebrow lines, card numbers, a few highlighted words)
 *
 *  Type scale (rem, fluid). Tune the whole site from here:
 *  display = home hero · h1 = page heroes · h2 = section titles · h3 = card titles
 *  lead = intro paragraphs · body = running text · small = captions, buttons · eyebrow = labels
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#10141A', soft: '#1B2230', deep: '#0B0E13' },
        brand: { DEFAULT: '#2F5BFF', deep: '#2147D6', dark: '#1B38B8' },
        cream: { DEFAULT: '#EEF4FF' },
        muted: { DEFAULT: '#4F5B6B' },
        slate: { DEFAULT: '#4F5B6B', light: '#64748B' },
        mint: { DEFAULT: '#A8D8B9' },
        sand: { DEFAULT: '#DCE7FF' },
        accent: '#A8D8B9',
        // Warm accent. DEFAULT is for fills, lines and text on DARK backgrounds. On light backgrounds use
        // strong (large text, icons, numbers: 3.5:1) or ink (small text and links: 4.8:1); plain orange is too pale there.
        orange: { DEFAULT: '#FF8A3D', soft: '#FFA55E', strong: '#E0620F', ink: '#BF4F0A' },
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.125rem, 1.55rem + 2.5vw, 3.25rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        h1: ['clamp(1.875rem, 1.45rem + 1.8vw, 2.625rem)', { lineHeight: '1.12', letterSpacing: '-0.022em' }],
        h2: ['clamp(1.5rem, 1.25rem + 1vw, 2.125rem)', { lineHeight: '1.2', letterSpacing: '-0.018em' }],
        h3: ['clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        lead: ['clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)', { lineHeight: '1.65' }],
        body: ['clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)', { lineHeight: '1.7' }],
        small: ['0.9375rem', { lineHeight: '1.55' }],
        eyebrow: ['0.8125rem', { lineHeight: '1.3', letterSpacing: '0.14em' }],
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