
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


export const whyTitle = "Why Work With Me";
export const why = [
  ["I look at your whole business.", "I look at how customers move through it, and at the work your team does behind the scenes. Most people only look at one."],
  ["I'll tell you what to fix first.", "You get a short list of the problems costing you the most, with the biggest first."],
  ["I use the simplest fix.", "That might be a better process, two tools connected, an automation, or an AI assistant. If you don't need AI, I'll say so."],
  ["You approve everything.", "Nothing is built until you've agreed to the plan. You also see what the system does on its own and what stays with your team."],
  ["We check that it worked.", "Before we start, we agree on the numbers to track. After launch, we measure again."],
];


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