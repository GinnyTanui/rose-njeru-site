# Rose Njeru Automation: homepage + 4 service pages

React + Vite + Tailwind CSS v3 + React Router + react-icons.

    npm install
    npm run dev        # local dev server
    npm run build      # production build in /dist

Brand tokens: tailwind.config.js (colours + fonts). All copy: src/data.js. Booking link: BOOK_URL in src/data.js.
Routes: /  and  /services/:slug  (business-audit, operations-automation, integration-build, ai-agents)
Deploying: public/_redirects is the SPA fallback for Netlify; other hosts need an equivalent rewrite to /index.html.
