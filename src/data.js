// All site content in one file: site settings, homepage, About, case studies, services and pricing.
// SITE.url is assumed from her email domain: confirm it, then also update index.html, sitemap.xml and robots.txt.
export const SITE = {
  "name": "Rose Njeru Automation",
  "url": "https://njeruautomation.com",
  "email": "rose@njeruautomation.com",
  "linkedin": "https://www.linkedin.com/in/rose-njeru/",
  "upwork": "https://www.upwork.com/freelancers/~0101dd2356373bcdfb",
  "github": "https://github.com/rosemwikalinjeru-dev",
  "phone": "+254705043081",
  "phoneDisplay": "+254 705 043 081",
  "location": ""
};

export const CTA_LABEL = 'Book a Free Consultation';
export const CTA_PATH = '/consultation';

export const homeCta = {
  "h": "Find Where Your Operations Could Work Better",
  "p": "Understand what's slowing your processes down, where opportunities may be getting missed, and what could be automated, connected, or improved first."
};

export const services = [
  {
    "slug": "business-audit",
    "seoTitle": "Business Audit: Find Where Your Business Loses Time",
    "no": "01",
    "name": "Business Audit",
    "visual": "audit",
    "short": "Understand where your business is losing time, money, and opportunities — before deciding what to automate.",
    "listLabel": "What we assess",
    "list": [
      "Business processes",
      "Tools & software stack",
      "Automation opportunities",
      "AI readiness",
      "Cost & process efficiency"
    ],
    "hero": "A full review of how your business runs, covering operations, tools, costs, and customer flow, with a dollar figure on what is being lost through missed leads, dropped customers, and wasted effort.",
    "seo": "Business Audit for service businesses: find where you lose time and money and get a 90-day prioritised action plan.",
    "whyTitle": "Why You Might Need a Business Audit",
    "why": [
      "Manual work, disconnected tools, broken automations, or processes that take more time than they should can quietly drain your business.",
      "A Business Audit shows you what's causing the friction and what to fix first."
    ],
    "includesTitle": "What We Review",
    "includes": [
      [
        "How Work Flows",
        "Where work slows down, gets repeated, or falls through the cracks."
      ],
      [
        "Your Tools & Systems",
        "What you're using, what's disconnected, and where you're doing things manually."
      ],
      [
        "Opportunities to Improve",
        "Where better processes, automation, or integrations could save time and improve the customer experience."
      ],
      [
        "Where AI Fits",
        "Tasks where AI could realistically support your team or reduce repetitive work."
      ],
      [
        "Time & Cost Leaks",
        "Unnecessary software, inefficient processes, and manual work costing you time or money."
      ]
    ],
    "getTitle": "What You Get",
    "getLead": "A clear 90-day action plan.",
    "getIntro": "A prioritised roadmap showing what to fix, automate, remove, or tackle first — based on business impact, urgency, and effort.",
    "get": [],
    "who": {
      "intro": "For businesses dealing with manual work, disconnected tools, broken automations, or inefficient processes and need clarity on what to fix next.",
      "items": []
    },
    "faqs": [
      [
        "What does a Business Audit look at?",
        "We review how your business operates, including your processes, tools, customer flow, software costs, and opportunities to improve efficiency."
      ],
      [
        "Will the audit identify where my business is losing money?",
        "Yes. The audit looks at areas such as missed leads, dropped customers, unnecessary software costs, manual work, and process inefficiencies to help identify where money or time may be getting lost."
      ],
      [
        "Will you tell me what I should automate?",
        "Yes. The audit identifies processes and repetitive tasks where automation could improve efficiency, along with areas where automation may not be appropriate."
      ],
      [
        "Will you look at the software and tools I already use?",
        "Yes. We review your current tools and how they work together, including overlaps, disconnected systems, and areas where your existing software may not be being used effectively."
      ],
      [
        "Will you tell me where AI could help my business?",
        "Yes. As part of the audit, we identify practical opportunities where AI could support your business processes."
      ],
      [
        "What will I receive at the end of the audit?",
        "You will receive a prioritised 90-day action plan showing what to fix, automate, remove, or address first, based on urgency, business impact, and effort."
      ],
      [
        "How long does a Business Audit take?",
        "The delivery timeframe depends on the business and the scope of the review, but the audit can take between 2 and 30 days."
      ],
      [
        "Do I need to know exactly what is wrong before booking an audit?",
        "No. The audit is designed to help you understand where problems and opportunities exist and what you should address first."
      ]
    ],
    "cta": {
      "h": "See what's slowing things down",
      "p": "Review your current processes, tools, and workflows to identify where improvements could make the biggest difference."
    },
    "includesIntro": "We look at the systems and processes behind how your business operates."
  },
  {
    "slug": "operations-automation",
    "seoTitle": "Operations Automation & Workflow Automation",
    "no": "02",
    "name": "Operations Automation",
    "visual": "workflow",
    "short": "Turn manual, disconnected processes into connected systems that move work from trigger to outcome.",
    "listLabel": "What we build",
    "list": [
      "Workflow mapping",
      "Process automation",
      "End-to-end workflows",
      "Human intervention points",
      "Error & exception handling",
      "Testing & optimisation"
    ],
    "tagline": "Automate the processes that keep your business running.",
    "hero": "We automate your customer-facing and internal processes, connecting the people, tools, and departments involved so work moves smoothly from start to finish, with less manual effort.",
    "seo": "Operations automation that turns manual, disconnected processes into connected workflows, with human checkpoints, error handling and a clear handover.",
    "whyTitle": "Why Your Business Might Need Operations Automation",
    "why": [
      "Repetitive admin, manual data entry, follow-ups, and handoffs between people and systems can slow your team down.",
      "Operations Automation connects these steps so work moves forward with less manual effort."
    ],
    "includesTitle": "What Our Operations Automation Service Includes",
    "includesIntro": "We map how work gets done, then automate the steps where it makes sense.",
    "includes": [
      [
        "Business Audit",
        "Identify repetitive work, bottlenecks, and automation opportunities."
      ],
      [
        "Workflow Mapping",
        "Map processes from trigger to outcome and find where work gets stuck."
      ],
      [
        "Process Automation",
        "Automate repetitive tasks, handoffs, and manual data entry."
      ],
      [
        "Connected Workflows",
        "Connect multiple steps, tools, and systems into one workflow."
      ],
      [
        "Human Checkpoints",
        "Keep your team involved where decisions, approvals, or judgement are needed."
      ],
      [
        "Testing & Safeguards",
        "Test workflows and handle errors, missing information, and failed steps."
      ],
      [
        "Documentation & Handover",
        "Document the workflows and show your team how to use and manage them."
      ]
    ],
    "getTitle": "What You Get",
    "get": [
      [
        "Less admin",
        "Reduce repetitive tasks, data entry, and follow-ups."
      ],
      [
        "Fewer missed steps",
        "Keep work moving between people and systems."
      ],
      [
        "More opportunities captured",
        "Reduce delays in customer-facing processes."
      ],
      [
        "Scalable workflows",
        "Systems that can handle more work as your business grows."
      ]
    ],
    "who": {
      "intro": "Service businesses with established processes, recurring work, and teams that spend too much time moving work between people, tools, and systems.",
      "items": []
    },
    "faqs": [
      [
        "What is Operations Automation?",
        "Operations Automation involves identifying manual tasks and repetitive steps within your business processes that can be automated, then connecting those steps into workflows that move work from one stage to the next."
      ],
      [
        "Does Operations Automation remove people from the process?",
        "No. Some parts of a process require human judgment. We identify where automation can handle tasks and where your team should remain involved."
      ],
      [
        "What types of processes can be automated?",
        "This depends on how your business operates. We look at customer-facing and internal processes, including repetitive tasks, handoffs between people or systems, data entry, follow-ups, and other workflow steps that can be automated."
      ],
      [
        "Will you automate my entire process from start to finish?",
        "Where appropriate, yes. We can connect several steps into an end-to-end workflow that moves work from the initial trigger to the intended outcome, while keeping human checkpoints where needed."
      ],
      [
        "What happens if something goes wrong in an automated workflow?",
        "Workflows can include safeguards for missing information, failed steps, and situations that require human attention. These are tested and optimised before handover."
      ],
      [
        "Will you review my existing processes before building the automation?",
        "Yes. The service includes a Business Audit and Workflow Mapping to understand how your processes currently work and where automation can improve them."
      ],
      [
        "How long does Operations Automation take?",
        "Delivery is up to 4 weeks, depending on the processes and automation being built."
      ],
      [
        "What happens after the automation is built?",
        "The workflow is tested and optimised, then documented and handed over so you understand how it works and how to manage it."
      ],
      [
        "Can I get ongoing maintenance after the automation is built?",
        "Yes. Optional workflow maintenance is available for $150 per month."
      ]
    ],
    "cta": {
      "h": "See where automation could help",
      "p": "Identify repetitive processes and workflow gaps where automation could reduce manual work and keep things moving."
    },
    "getLead": "Less manual work. Smoother operations. More capacity to grow."
  },
  {
    "slug": "integration-build",
    "seoTitle": "Integration Build: Connect Your Business Tools",
    "no": "03",
    "name": "Integration Build",
    "visual": "integration",
    "short": "Connect the tools your business already uses so information moves automatically between systems.",
    "listLabel": "What we connect",
    "list": [
      "CRM & customer records",
      "Booking systems",
      "Forms",
      "Email & communication",
      "Payments",
      "Accounting software"
    ],
    "hero": "We connect the tools your business already uses so information moves between them automatically, and your team isn't constantly copying, updating, or chasing data across different systems.",
    "seo": "Integration Build: connect your CRM, bookings, forms, payments, email and accounting so data moves automatically.",
    "whyTitle": "Why You Might Need an Integration Build",
    "why": [
      "Your business may rely on different tools for customers, bookings, forms, payments, email, accounting, and more.",
      "When those systems don't share information, it can create gaps, duplicate information, and make it harder to keep data consistent.",
      "An Integration Build connects your existing tools so information can move between them automatically."
    ],
    "includesTitle": "What Our Integration Build Includes",
    "includes": [
      [
        "Business Audit",
        "Identify where information needs to move between your systems."
      ],
      [
        "System Connections",
        "Connect your CRM, forms, bookings, payments, email, accounting tools, and more."
      ],
      [
        "Shared Customer Records",
        "Keep customer information consistent across connected systems."
      ],
      [
        "Field Mapping",
        "Match information between systems so data transfers correctly."
      ],
      [
        "Data Cleanup & Checks",
        "Find duplicates, inconsistencies, and outdated information before connecting systems."
      ],
      [
        "Integration Map",
        "See how your tools, data, and processes connect."
      ]
    ],
    "getTitle": "What You Get",
    "getLead": "Connected systems with less manual data handling.",
    "get": [
      [
        "Less data entry",
        "Information moves automatically where the integration allows it."
      ],
      [
        "Fewer duplicates",
        "Keep customer information consistent across systems."
      ],
      [
        "Faster handoffs",
        "Move information between tools without waiting for manual updates."
      ],
      [
        "Clearer systems",
        "Understand how your tools and data connect."
      ]
    ],
    "who": {
      "intro": "Businesses that use 2 or more software tools and still move information between them manually.",
      "items": []
    },
    "faqs": [
      [
        "Do I need to replace my existing software?",
        "Not necessarily. The goal is to connect the tools your business already uses where an integration makes sense."
      ],
      [
        "What types of systems can you connect?",
        "This depends on your business and the systems you use. Integrations can involve tools such as CRM, booking, forms, phone, email, payment, and accounting systems."
      ],
      [
        "Will you clean up our existing data?",
        "Data cleanup and checks are included to help identify and remove duplicate or inconsistent records where applicable."
      ],
      [
        "Will we know how our systems are connected?",
        "Yes. An integration map provides a visual or logical guide showing how your systems, data, and processes connect."
      ]
    ],
    "cta": {
      "h": "See how your systems could connect",
      "p": "Look at the tools you use and identify where connecting them could improve how information moves between systems."
    },
    "includesIntro": "We connect your existing systems and make sure information moves between them accurately."
  },
  {
    "slug": "ai-agents",
    "seoTitle": "AI Agents for Customer Questions & Bookings",
    "no": "04",
    "name": "AI Agents",
    "visual": "agent",
    "short": "Give your business an AI agent designed to handle a specific job, connected to your knowledge and tools.",
    "listLabel": "What we build",
    "list": [
      "Business knowledge",
      "Voice & messaging",
      "Tool connections",
      "Human handoff",
      "Testing & optimisation",
      "Launch & handover"
    ],
    "hero": "A custom AI agent built to handle one specific job end-to-end, trained on your services and policies, and connected to the tools it needs.",
    "heroExtra": "Whether answering questions, booking appointments, responding to messages, or helping your team find information, the agent handles its defined task and knows when to hand over to a person.",
    "seo": "AI Agents: a custom AI agent built for one specific job, connected to your tools, with human handoff.",
    "whyTitle": "Why You Might Need an AI Agent",
    "why": [
      "Customers ask the same questions. Teams look up the same information. Bookings and requests follow the same steps.",
      "An AI agent can handle a defined business task using your information and connected tools and hand over to your team when human judgement is needed."
    ],
    "includesTitle": "What Our AI Agent Service Includes",
    "includes": [
      [
        "Business Audit",
        "Identify the task the agent should handle."
      ],
      [
        "Business Knowledge",
        "Train it on your services, prices, policies, FAQs, and SOPs."
      ],
      [
        "Communication Channel",
        "Connect it to WhatsApp, SMS, email, voice, or social DMs, depending on its role."
      ],
      [
        "Tool Connections",
        "Connect the tools it needs to perform its job."
      ],
      [
        "Human Handoff",
        "Pass situations to your team when human judgement is needed."
      ],
      [
        "Testing & Optimisation",
        "Test real questions, edge cases, actions, and handoffs before launch."
      ],
      [
        "Launch & Handover",
        "Deploy the agent and give your team what they need to manage it."
      ]
    ],
    "getTitle": "What You Get",
    "getLead": "A live AI agent built to handle a specific business task.",
    "get": [
      [
        "A defined job",
        "The agent is built around a clear, specific task."
      ],
      [
        "Your business knowledge",
        "Answers based on your information, not generic responses."
      ],
      [
        "Connected tools",
        "Access to the systems it needs to perform its job."
      ],
      [
        "Human handoff",
        "Your team steps in when needed."
      ],
      [
        "Tested and ready",
        "Common requests, edge cases, and handoffs tested before launch."
      ]
    ],
    "who": {
      "intro": "For businesses handling repetitive customer requests, questions, or multi-step processes that follow a clear pattern.",
      "items": [
        "Customers repeatedly ask about your services, prices, policies, or availability.",
        "Your team keeps looking up the same information.",
        "You receive recurring customer requests across different channels.",
        "A defined process could be handled without someone doing every step manually."
      ]
    },
    "faqs": [
      [
        "Does the AI agent do everything in my business?",
        "No. Each agent is built around one specific business job identified from your business processes."
      ],
      [
        "What information does the agent use?",
        "The agent can be built using your services, policies, prices, hours, FAQs, and SOPs, depending on what it needs to perform its specific job."
      ],
      [
        "Can the agent book appointments?",
        "Yes, where appropriate. An agent can be built to book appointments based on your availability and rules."
      ],
      [
        "What happens when the AI cannot handle a request?",
        "The agent can hand the request over to a person when human judgment or attention is needed."
      ],
      [
        "Can the agent connect to our existing tools?",
        "Yes. The agent can be connected to the relevant business tools required for its specific job."
      ]
    ],
    "cta": {
      "h": "See where an AI agent could fit",
      "p": "Identify a specific task or process where an AI agent could support your business and your team."
    },
    "includesIntro": "We build an AI agent around a specific job in your business."
  }
];

export const pricing = [
  {
    "slug": "business-audit",
    "name": "Business Audit",
    "price": "$250",
    "delivery": "2 to 30 days, depending on the business",
    "includes": [
      "Process overview",
      "Tools and stack audit",
      "Opportunity assessment",
      "AI readiness review",
      "Cost efficiency review"
    ],
    "get": "A 90-day prioritised action plan showing what to fix, automate, remove, and tackle first."
  },
  {
    "slug": "operations-automation",
    "name": "Operations Automation",
    "price": "$500",
    "delivery": "Up to 4 weeks",
    "maintenance": "$150/month",
    "includes": [
      "Business Audit",
      "End-to-end workflow mapping",
      "Process automation for the bottlenecks found",
      "Human intervention points",
      "Error and exception handling",
      "Testing and optimisation",
      "Documentation and handover"
    ],
    "get": "More revenue opportunities captured, less admin time, and smoother operations that can support growth."
  },
  {
    "slug": "integration-build",
    "name": "Integration Build",
    "price": "$75–$200",
    "priceNote": "by number of tools connected",
    "delivery": "2 to 14 days, depending on the integration",
    "tiers": [
      [
        "Up to 3",
        "$75"
      ],
      [
        "Up to 5",
        "$120"
      ],
      [
        "5 and above",
        "$200"
      ]
    ],
    "includes": [
      "Business Audit",
      "System connection (CRM, booking, forms, phone, email, payments, accounting)",
      "Shared customer records",
      "Field mapping",
      "Data cleanup and checks",
      "Integration map"
    ],
    "get": "Fewer hours spent moving and checking data, fewer duplicate or missed records, and faster handoffs."
  },
  {
    "slug": "ai-agents",
    "name": "AI Agents",
    "price": "$700",
    "delivery": "2 to 5 days for a single agent",
    "maintenance": "$150/month",
    "includes": [
      "Business Audit",
      "Business knowledge (services, policies, prices, hours, FAQs, SOPs)",
      "Channels: SMS, voice, email, WhatsApp, Facebook and Instagram DMs",
      "Tools connection",
      "Human handoff",
      "Testing and optimisation",
      "Launch and handover"
    ],
    "get": "A live AI agent built for one specific job, connected to your information and tools, and tested, with human handoff when needed."
  }
];


// ===== Homepage, About and case-study copy (taken word-for-word from the client document) =====
// New website content, taken word-for-word from the client document (Website_Content.pdf).
// data.js is untouched: services, pricing and the service-page copy still live there.

/* ---------- Introduction (hero) ---------- */
export const intro = {
  scenarios: [
    "A lead messages you at 9pm and hears back the next afternoon.",
    "A job finishes, and the invoice goes out a week later.",
    "Your office manager types the same customer details into three different tools.",
    "A new hire asks the same question for the fifth time because the answer isn't written down anywhere.",
  ],
  headline: "These aren't people's problems. They're process problems, and they're fixable.",
  body: "I find where they're happening and fix them with the simplest tool that works: an automation, a connection between your tools, or an AI assistant",
};

/* ---------- Problem section ---------- */
export const problem = {
  title: "Where does your business leak?",
  text: "It's rarely one big problem. It's small gaps at every stage, from the first inquiry to the final payment, and in all the work your team does that customers never see.",
  journeyTitle: "Follow one customer through your business",
  journey: [
    ["Enquiry", "A message comes in at 9pm. Nobody sees it until the next afternoon."],
    ["Qualifying", "Your team asks the same five questions every time, including people who were never going to buy."],
    ["Quote", "Someone builds it from scratch. It goes out two days later."],
    ["Booking", "Messages go back and forth to find a time. Then the customer doesn't show, because nobody reminded them."],
    ["The work", "The job details live in a text thread and in one person's head."],
    ["Invoice and payment", "The invoice goes out a week late"],
    ["After the job", "No review request and no follow-up, so the customer has no reason to come back."],
  ],
  weekTitle: "Now look at what your team does all week",
  week: [
    "The same customer details get typed into three different tools.",
    "A job is handed to the next person with half the information missing.",
    "Someone builds the weekly report by hand every Friday.",
    "Approvals sit in someone's inbox until they remember them.",
    "Staff schedules, time off, and onboarding live in spreadsheets.",
    "A new hire asks the same question for the fifth time, because the answer isn't written down anywhere.",
    "Only you know how some things get done, so when you're away, work stops.",
  ],
  closingLead: "Each gap looks small. Together they cost you customers, hours, and money.",
  closingRest: "Most of them are easy to miss, because everyone has learned to work around them.",
};

/* ---------- What we help with ---------- */
export const help = {
  eyebrow: "What we help with",
  title: "Fix the gaps at every stage, with your customers and inside your business",
  text: "Each fix below answers a gap from the section above.",
  groups: [
    {
      title: "With your customers",
      items: [
        ["Every enquiry gets answered.", "The 9pm message gets a reply in minutes, with your prices, availability, and next step. Your team picks it up in the morning with the conversation already in front of them."],
        ["Every lead gets followed up.", "Quotes go out the same day. Leads that go quiet get a nudge, and nobody has to remember to send it."],
        ["Every booking turns up.", "Customers pick a time without the back-and-forth, and get a reminder before they're due. Fewer no-shows."],
        ["Every job gets paid and reviewed.", "The invoice goes out when the work is done. Late payers get a reminder, and happy customers get asked for a review."],
      ],
    },
    {
      title: "Inside your business",
      items: [
        ["Information gets typed once.", "A customer's details are entered once and appear in every tool that needs them."],
        ["Handoffs arrive complete.", "When a job moves from one person to the next, everything they need comes with it."],
        ["Reports build themselves.", "The weekly numbers are ready when you need them, without anyone spending Friday afternoon on a spreadsheet."],
        ["Answers are easy to find.", "Your procedures live somewhere your team can ask, \"How do we do this here?\" and get a clear answer, even when you're not around."],
      ],
    },
  ],
};

/* ---------- Case studies (one per service, keyed by service slug) ---------- */
export const caseStudies = [
  {
    slug: "business-audit",
    service: "Business Audit",
    no: "01",
    title: "Business Audit: Ridgeline Plumbing Co.",
    blocks: [
      { h: "The situation", p: "An 11-person plumbing company in Columbus. Leads came in by phone, web form, and text. Quotes went out when someone had time. Nobody could say how many leads were lost or what that cost." },
      { h: "What the audit did", list: [
        "Mapped one customer from first call to paid invoice, and one job from dispatch to handover",
        "Marked every step as done by a person, by software, or by both",
        "Found where leads, quotes, and invoices stalled",
        "Put a dollar figure on each stall",
      ] },
      { h: "What the owner got", tone: "result", p: "A one-page map of how work actually flows, a ranked list of what to fix first, and a 90-day plan. It also said what not to automate and why." },
    ],
    measure: ["leads with no reply", "quotes unsent after 48 hours", "days from finished job to invoice"],
  },
  {
    slug: "operations-automation",
    service: "Operations Automation",
    no: "02",
    title: "Operations Automation: Ridgeline Plumbing Co.",
    blocks: [
      { h: "The situation", p: "Four things ran on memory and goodwill: following up on quotes, taking in new leads, scheduling jobs, and collecting payment." },
      { h: "What I built", p: "One connected flow:", flow: [
        ["Lead comes in", "details captured once, and the customer gets a reply"],
        ["Quote sent", "quiet quotes get a follow-up automatically"],
        ["Job booked", "the right technician is assigned with the job details attached"],
        ["Job done", "invoice goes out, and late payers get a reminder"],
      ] },
      { h: "Where people stay in charge", tone: "callout", p: "A person confirms the job and handles anything urgent or unusual. I mark these steps as deliberately not automated, so the owner can see what the system will never do alone." },
    ],
    measure: ["time to first reply", "quote follow-up rate", "days to payment"],
  },
  {
    slug: "integration-build",
    service: "Integration Build",
    no: "03",
    title: "Integration Build",
    blocks: [
      { h: "The situation", p: "The job system (Jobber), the customer spreadsheet, and the messaging tool didn't talk to each other. The same customer was typed in two or three places, and records disagreed." },
      { h: "What I built", list: [
        "Connected the job system, the records database, and text messaging",
        "Matched each field so a customer's name, address, and job history move together",
        "Handled the awkward cases: phone numbers and ZIP codes saved in the wrong format, duplicate customers",
        "Drew an integration map showing what connects to what",
      ] },
      { h: "Result for the owner", tone: "result", p: "Customer details are entered once. When a job is marked complete, the review request and the invoice start on their own." },
    ],
    measure: ["records with duplicates or missing fields", "hours per week spent retyping"],
  },
  {
    slug: "ai-agents",
    service: "AI Agents",
    no: "04",
    title: "AI Agents",
    blocks: [
      { h: "The situation", p: "A clinic's phones stop at closing time, but patients keep texting. Questions about prices, hours, and booking waited until morning, and some patients booked elsewhere in the meantime." },
      { h: "What I built", p: "An AI agent that answers by text and chat when the office is closed. It uses only the clinic's own information: services, prices, hours, and policies. It books or collects the details for a booking, and hands anything it shouldn't decide to a person, with a summary so the patient doesn't repeat themselves." },
      { h: "Where it stops", tone: "callout", p: "It doesn't give medical advice. Urgent or unusual messages go straight to a human." },
    ],
    measure: ["questions resolved without staff", "handoff rate", "bookings made out of hours"],
    bonus: {
      label: "Bonus for owners new to AI",
      title: "Internal SOP Agent for a property management team",
      text: "The staff ask \"what's our refund policy?\" or \"how do we handle a late cancellation?\" and get an answer from the company's own procedures. No customer-facing AI is needed, so it's a low-risk first step.",
    },
  },
];

/* ---------- Our Process ---------- */
export const process = {
  eyebrow: "Our Process",
  title: "How we work together, in four steps",
  text: "You don't need to know anything about AI or automation. You tell me how the business runs and where it hurts. I handle the rest, and you approve before anything is built.",
  steps: [
    {
      title: "Understand how your business really runs",
      text: "I follow one customer from first enquiry to final payment. Then I look at the work behind it, because that's where most of the hidden time goes.",
      columns: [
        ["With your customers", ["Enquiries and lead follow-up", "Quotes and proposals", "Booking and reminders", "Invoices and payment", "Reviews and repeat business", "Customer support"]],
        ["Inside your business", ["Staff onboarding and training", "Scheduling, time off, and shift changes", "Approvals: expenses, purchases, discounts", "Purchasing, stock, and supplier orders", "Hiring and contracts", "Weekly reporting and record-keeping", "Finding the right procedure or document"]],
      ],
      notes: [["You", "a conversation, and access to the tools you use."], ["You get", "a simple map of how work flows today, and where it stalls."]],
    },
    {
      title: "Decide what to fix first",
      text: "For each gap, I tell you whether the fix is a clearer process, a connection between your tools, an automation, or an AI assistant. I also tell you what should stay with people.",
      exampleLabel: "For example:",
      examples: [
        "A new hire's paperwork, accounts, and training schedule can start on their own once you approve the hire.",
        "An expense or discount request can go to the right person for approval, with a reminder if it sits.",
        "A stock level that drops too low can trigger a supplier order for your sign-off.",
        "Questions your team keeps asking can be answered from your own procedures.",
      ],
    },
    {
      title: "Build it",
      text: "I build the fix and connect it to the tools you already use, such as your CRM, calendar, accounting software, spreadsheets, and team chat. Where a decision needs a person, the system stops and asks.",
    },
    {
      title: "Test it, hand it over, and check that it worked",
      text: "I test with real situations, including the awkward ones: missing information, an approval nobody answers, a tool that goes down. Then I document how it works and show your team how to run it. After launch, we check the numbers on both sides: faster replies and payments for customers, fewer hours spent on admin and reporting for your team.",
    },
  ],
};

/* ---------- Tools We Use ---------- */
export const toolsSection = {
  title: "Tools We Use",
  heading: "We work with the tools you already have, and add new ones only when needed",
  text: "The tools matter less than the problem they solve. I pick the simplest one that does the job and fits your budget. If your team already uses something, we build around it.",
  groups: [
    {
      title: "Automation",
      tagline: "moves work between steps and tools",
      text: "Like a set of instructions that runs by itself: \"when this happens, do that.\"",
      tools: ["Zapier", "Make", "n8n", "Microsoft Power Automate"],
      usedFor: "sending a quote after an enquiry, starting an invoice when a job finishes, routing an approval.",
    },
    {
      title: "Your records and data",
      tagline: "keeps everything in one place",
      text: "Where customer details, jobs, staff information, and reports live.",
      tools: ["Airtable", "Notion", "GoHighLevel"],
      usedFor: "one customer record, a team knowledge base, a live dashboard.",
    },
    {
      title: "AI and messaging",
      tagline: "answers questions and talks to customers or staff",
      text: "An assistant that works from your own information and hands it over to a person when it should.",
      tools: ["Claude (Anthropic)", "Twilio (SMS)", "Vapi (voice)", "WhatsApp"],
      usedFor: "after-hours replies, appointment booking, and staff asking \"how do we do this here?\"",
    },
    {
      title: "Custom code",
      tagline: "for what ready-made tools can't do",
      tools: ["Python"],
      usedFor: "unusual data clean-up, a connection no tool offers, a report built to your needs.",
    },
  ],
  existing: {
    title: "Your existing tools",
    tagline: "we connect them",
    tools: ["CRM", "Booking systems", "Accounting software", "Email", "Calendar", "Spreadsheets", "Team chat", "Payment tools"],
    text: "We connect them, so you don't have to replace anything.",
  },
};

/* ---------- Why Work With Me ---------- */
export const whyTitle = "Why Work With Me";
export const why = [
  ["I look at your whole business.", "I look at how customers move through it, and at the work your team does behind the scenes. Most people only look at one."],
  ["I'll tell you what to fix first.", "You get a short list of the problems costing you the most, with the biggest first."],
  ["I use the simplest fix.", "That might be a better process, two tools connected, an automation, or an AI assistant. If you don't need AI, I'll say so."],
  ["You approve everything.", "Nothing is built until you've agreed to the plan. You also see what the system does on its own and what stays with your team."],
  ["We check that it worked.", "Before we start, we agree on the numbers to track. After launch, we measure again."],
];

/* ---------- Homepage FAQs (a "●" line renders as a bullet) ---------- */
export const homeFaqs = [
  ["What can you actually do for my business?", "I fix the slow, manual parts of how your business runs. That includes how customers get answered, booked, and paid, and how your team handles work behind the scenes, like handoffs, records, and reports."],
  ["How do I know what to automate?", "You don't need to know. I look at your business and show you the problems costing you the most time or money. Then I tell you which ones are worth fixing and which ones should stay as they are."],
  ["Do I need AI?", "Not always. Often the fix is a clearer process, two tools connected, or a simple automation. I only use AI when it's the best fit, and I'll tell you if it isn't."],
  ["I don't know much about AI. Is that a problem?", "No. You don't need to know anything about it. Tell me what's slowing your business down, and I'll explain the options in plain words."],
  ["Is this only for customer-facing work?", "No. I also fix the work your team does every day: onboarding new staff, approvals, scheduling, purchasing, weekly reports, and finding the right procedure."],
  ["Do I have to replace my software?", "Usually not. I connect the tools you already use, so information moves between them without anyone retyping it."],
  ["Can you automate a whole process from start to finish?", "Yes, where it makes sense. Some steps should still be done by a person, like approving a quote or handling an urgent call. I'll show you which is which before I build anything."],
  ["What is an AI agent?", "Think of it as a trained team member that lives in your software. It does one job, such as answering customer questions after hours, booking appointments, or telling your team how a procedure works. It uses your own information and hands over to a person when it should."],
  ["Will this replace my team?", "No. It takes the repetitive work off them, so they can spend their time on the things that need a person."],
  ["What if something goes wrong?", "I test the awkward cases before launch, like missing information or a tool that stops working. If a step fails, the system alerts a person instead of failing silently."],
  ["How long does it take?", "● Business Audit: 2 to 30 days, depending on your business\n● Integration Build: 2 to 14 days\n● AI Agent: 2 to 5 days\n● Operations Automation: up to 4 weeks"],
  ["How much does it cost?", "Each service has a fixed price, listed on the Pricing section. After the audit, you'll know the cost of each fix before you decide."],
  ["Do you offer support after it's built?", "Yes. Operations Automation and AI Agents can include ongoing maintenance at $150 a month."],
  ["Why work with you?", "I look at your whole business, tell you what to fix first, use the simplest fix that works, and check that it worked."],
];

/* ---------- About ---------- */
export const about = {
  greeting: "Hi, I'm Rose.",
  intro: "I'm a business systems and automation specialist based in Nairobi. I help service businesses stop losing time, leads, and money to slow, manual work, through process fixes, connected tools, automation, and AI where it fits.",
  journey: {
    title: "My Journey",
    paragraphs: [
      "I started down this path because I watched my friend’s  business lose customers because messages sat unanswered overnight, and the fix was simpler than anyone thought.",
      "I studied statistics and econometrics, and I've worked with data in SQL, Excel, and Python. That's why I measure: before I build anything, we agree on what to track, and after launch we check whether it worked.",
      "I've built 10+  systems so far, including an after-hours AI agent for a dental clinic, a plumbing company's full lead-to-payment workflow, and an AI receptionist for a med spa. These are demonstration builds, and you can see how each one works in the case studies.",
    ],
  },
  beyond: {
    title: "Beyond the Work",
    text: "I also teach mathematics, so explaining complicated things in plain words is a habit. When I'm not building workflows, you'll usually find me playing soccer and nature walks",
  },
  together: {
    title: "Let's Work Together",
    text: "Not sure what's slowing your business down? That's normal. Tell me how it runs, and I'll tell you what's worth fixing first.",
  },
};