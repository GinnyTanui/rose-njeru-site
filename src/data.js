// ONE place for all site content. Edit text here; pages only lay it out.
//   1. SITE         contact details and links
//   2. pricing      shown ONLY on the Pricing page (never on service pages)
//   3. about        About page copy
//   4. services     the five services and their detail-page copy + SEO titles/meta
//   5. caseStudies  case-study write-ups
//   6. homepage     hero, categories, "difference", process, tools, why, FAQs, closing CTA
// Inline links inside text are written [label](/path). Service names and slugs must match everywhere:
//   Business Process Audit · Operational Process Automation · Systems and Data Integration · AI Agents · Sales & Marketing Automation

/* ---------- 1. Site ---------- */
export const SITE = {
  "name": "Rose Njeru Automation",
  "url": "https://njeruautomation.com",
  "email": "rose@njeruautomation.com",
  "linkedin": "https://www.linkedin.com/in/rose-njeru/",
  "upwork": "https://www.upwork.com/freelancers/~0101dd2356373bcdfb",
  "github": "https://github.com/rosemwikalinjeru-dev",
  "phone": "+254705043081",
  "phoneDisplay": "+254 705 043 081"
};

export const CTA_LABEL = 'Book a Free Consultation';
export const CTA_PATH = '/consultation';

/* ---------- 2. Pricing (Pricing page only) ---------- */
export const pricing = [
  {
    "slug": "business-process-audit",
    "name": "Business Process Audit",
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
    "slug": "operational-process-automation",
    "name": "Operational Process Automation",
    "price": "$500",
    "delivery": "Up to 4 weeks",
    "maintenance": "$150/month",
    "includes": [
      "Business Process Audit",
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
    "slug": "systems-and-data-integration",
    "name": "Systems and Data Integration",
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
      "Business Process Audit",
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
      "Business Process Audit",
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

/* ---------- 3. About ---------- */
export const about = {
  title: 'Better Systems. Less Operational Friction.',
  intro: [
    'I help service-based businesses improve the way they work through better processes, connected systems, automation and practical AI solutions.',
    'Technology should make everyday work easier, not introduce more complexity. The focus is on understanding where time, money and opportunities are being lost, then building solutions that address those problems and deliver measurable improvements.',
  ],
  believe: {
    title: 'What I Believe',
    stats: [['65.1%', 'reported improved employee performance'], ['45.2%', 'said it helped their businesses save money']],
    paras: [
      'AI is creating practical opportunities for businesses to improve how they operate. In an OECD survey of small and medium-sized businesses using generative AI, 65.1% reported improved employee performance, while 45.2% said it helped their businesses save money.',
      'These improvements matter because growing businesses often find themselves managing more work through disconnected tools, repetitive administration and processes that depend too heavily on manual effort.',
      'Enquiries go unanswered, follow-ups get missed, information is entered more than once, and teams spend valuable time coordinating tasks that could work more efficiently.',
      "But adopting AI doesn't automatically solve these problems. Technology only makes a difference when it addresses a real operational need.",
      'Sometimes a process needs to be fixed first. Sometimes existing tools need to communicate. And sometimes a task is better handled by a well-designed AI solution.',
    ],
    emphasis: 'I believe better systems start with understanding the problem, choosing the right approach and measuring whether the solution makes a meaningful difference.',
    source: { label: 'OECD: How are SMEs using generative AI?', url: 'https://www.oecd.org/en/publications/generative-ai-and-the-sme-workforce_2d08b99d-en/full-report/component-4.html', note: 'Findings reflect SMEs surveyed that were already using generative AI.' },
  },
  different: {
    title: 'Why I Do Things Differently',
    items: [
      ['Understand Before Automating', "Every engagement starts with understanding how work currently happens, from customer enquiries and scheduling to delivery, invoicing and payment. This helps identify the actual causes of inefficiency rather than automating a process that isn't working."],
      ['Measure Before and After', 'With a background in statistics and data analysis, I bring a measurement-focused approach to improvement. We establish relevant baseline measures before implementation and review them afterwards to understand the difference.'],
      ['Build Beyond Recommendations', 'The work goes beyond identifying opportunities. From process improvements and system integrations to automated workflows and AI agents, solutions are designed, built, tested and documented.'],
      ['Keep People in Control', 'Automation should support the people doing the work. Solutions are designed with clear responsibilities, defined boundaries and human handover where judgement or approval is needed.'],
    ],
  },
  how: {
    title: 'How I Work',
    subtitle: 'From Understanding the Problem to Measuring the Results',
    steps: [
      ['01', 'Understand', 'Examine existing processes, tools and responsibilities to understand how work gets done and where problems occur.'],
      ['02', 'Prioritise', 'Identify the most important opportunities for improvement and determine which problems should be addressed first.'],
      ['03', 'Design and Build', 'Develop the appropriate solution, whether that involves improving a process, connecting systems, automating workflows or introducing an AI agent.'],
      ['04', 'Test and Improve', 'Test the solution against real working scenarios, launch it with the necessary documentation and review agreed performance measures.'],
    ],
    closing: "The goal is not simply to introduce new technology. It's to make everyday operations work better.",
  },
  meet: {
    title: 'Meet Rose',
    role: 'Rose Njeru | AI Automation & Business Systems Specialist',
    paras: [
      'Based in Nairobi, Kenya, I work with service-based businesses to improve their operations through process improvement, connected systems, automation and AI.',
      'With a background in statistics and econometrics, and experience working with SQL, Excel and Python, I bring an analytical approach to understanding operational challenges and measuring improvements.',
      "I've built more than 10 demonstration systems, including an after-hours AI agent for a dental clinic, a plumbing company's lead-to-payment workflow and an AI receptionist for a medical spa.",
      'My approach combines understanding how businesses work with building practical technology that makes everyday operations easier.',
    ],
  },
  solutions: {
    title: 'From Operational Challenges to Working Solutions',
    paras: [
      'The work includes practical systems built around real operational needs, from customer communication and lead management to connected workflows and AI-powered assistance.',
      'Explore the case studies to see how these solutions are structured and the problems they are designed to address.',
    ],
  },
  cta: {
    title: "Let's Find What Could Work Better",
    paras: [
      'Not every operational challenge has an obvious solution. Sometimes the first step is simply understanding where the problem starts.',
      "Let's look at how your processes work, identify what is worth improving and determine the most practical way forward.",
    ],
  },
};

/* ---------- 4. Services (detail-page copy) ---------- */
const BA = '/services/business-process-audit';
const SDI = '/services/systems-and-data-integration';
const OPA = '/services/operational-process-automation';
const SMA = '/services/sales-and-marketing-automation';
const AI = '/services/ai-agents';

export const services = [
  {
    slug: 'business-process-audit', no: '01', name: 'Business Process Audit', hero: 'audit', related: [],
    short: 'Find out where inquiries, jobs and payments get stuck, what it costs you, and what to fix first.',
    title: 'Business Process Audit for Service Businesses | Rose Njeru',
    meta: 'A business process audit maps how inquiries, jobs and payments move through your business, finds the bottlenecks and gives you a prioritised action plan.',
    keyword: 'business process audit',
    h1: 'Business Process Audit',
    lede: 'Find out where inquiries, jobs and payments are getting stuck, what it is costing you, and what to fix first, before you spend on tools or automation.',
    cta: ['Book a Free Consultation', 'See Pricing'],
    sections: [
      { type: 'intro', title: "When Work Keeps Stalling and You Can't See Why",
        paras: ['A business process audit follows work through your business from the moment a customer enquires to the moment payment arrives, along with the internal steps that keep it moving. I look at how leads are handled, how jobs are scheduled, how information passes between your team and your tools, and how invoices get paid.',
          'You come away with a clear picture of where things break down, what those gaps cost, and which problems to tackle first. The action plan is built around your business, not a list of software to buy. Not every problem needs automation; sometimes the process itself needs fixing first.'],
        list: { label: 'Signs an audit is worth doing', items: ['Leads go unanswered because nobody owns follow-up.', 'Staff copy customer details between tools instead of serving customers.', 'Marketing, sales and operations sit in separate systems, creating gaps and duplicated work.', 'Lead sources, conversion rates and lost revenue are unclear.', 'Money goes on tools without knowing which problem to solve first.'] } },
      { type: 'suits', cta: false, title: 'What Happens with an Audit', items: ['Missed inquiries and gaps in follow-up are identified, along with where potential customers drop off.', 'Repetitive tasks and unnecessary manual work are mapped to reveal opportunities to save time.', 'Gaps between teams, processes, and tools are exposed, showing where information gets lost or work stalls.', 'Lead conversion, pipeline performance, and potential revenue losses become measurable.', 'A prioritised action plan sets out what to fix, simplify, connect, or automate based on business impact and effort.'] },
      { type: 'cards', title: 'What the Business Process Audit Covers', items: [
        ['Inquiry handling', 'How new inquiries are handled, how long customers wait for a reply, and where potential jobs are lost.'],
        ['Scheduling and bookings', 'How appointments are booked and confirmed, and what happens with cancellations, reschedules and no-shows.'],
        ['Customer communication', 'How customers are kept informed from first inquiry to job completion, and where follow-ups are missed.'],
        ['Quotes, invoices and payment', 'How quotes are prepared, invoices sent and payments collected, and where delays occur.'],
        ['Handoffs and task ownership', 'How work moves between team members, who owns each step, and where tasks get stuck or forgotten.'],
        ['Tools and data', 'How your tools share information, where staff repeat the same work, and which disconnected systems cause delays or errors.']] },
      { type: 'cards', title: 'What You Receive from the Audit', items: [
        ['Current process map', 'A step-by-step map of how work moves from new inquiry through delivery to payment.'],
        ['Bottleneck and root cause analysis', 'Where work is delayed, information goes missing or tasks are repeated, and why it keeps happening.'],
        ['Cost and impact assessment', 'An estimate of the time, money and potential revenue affected by each problem, based on the information available.'],
        ['Prioritised action plan', 'Improvements ranked by impact, cost and effort, with quick wins separated from longer-term changes. Each item says whether it needs a process change, clearer responsibilities, better use of existing tools or automation.'],
        ['Recommended future process', 'How tasks should flow, who is responsible at each stage, and where steps should be simplified, standardised, connected or automated.'],
        ['Baseline performance metrics', 'Starting measures such as response times, missed inquiries, quote turnaround, time on repetitive tasks and payment delays, so you can check whether changes work. My background in statistics and data analysis shapes how these are chosen.'],
        ['90-day implementation roadmap', 'What to do first, what resources you may need, and how to track progress over three months.']] },
      { type: 'steps', title: 'How the Audit Works', items: [
        ['Discover', 'We talk through the business, current challenges and goals.'],
        ['Map', 'I trace how work gets done, from inquiries and internal tasks to service delivery and payment.'],
        ['Analyse', 'I find where work is delayed, information is lost and revenue is at risk, identify root causes and rank the biggest problems.'],
        ['Deliver', 'I present the findings, process maps, recommendations and action plan, and show how to measure progress.']] },
      { type: 'links', title: 'Audit First or Automate First?', intro: 'The audit shows which of these is the right next step:', items: [
        ['Information is retyped between tools', 'Systems and Data Integration', SDI],
        ['Reminders, quotes and invoices depend on memory', 'Operational Process Automation', OPA],
        ['Leads wait too long or follow-up stops', 'Sales & Marketing Automation', SMA],
        ['Staff answer the same questions all day', 'AI Agents', AI],
        ['The process itself is unclear', 'That is what the audit fixes first', null]] },
      { type: 'suits', title: 'Who a Business Process Audit Suits', items: ["Owners who know things aren't running smoothly but can't pinpoint where the problems start.", 'Businesses considering automation that are unsure which processes are worth it, or whether automation is the answer.', 'Teams spending their days chasing updates, correcting mistakes and repeating the same tasks.', 'Growing businesses where more customers and work have made the old way harder to manage.'] },
      { type: 'callout', title: 'What the Audit Fee Covers',
        paras: ['The audit fee covers the assessment of your current business processes, the time spent identifying problems, and the work required to prepare your findings and recommendations.'],
        list: { label: 'You receive', items: ['A review of how your business handles customer inquiries, follow-ups, scheduling, service delivery, internal tasks, invoicing, and payments.', 'A process map showing how work currently moves through your business.', 'An analysis of bottlenecks, repeated tasks, missed handoffs, and the underlying causes of these problems.', 'An assessment of the time, costs, and potential revenue affected by the identified issues, based on the information available.', 'A prioritised action plan outlining what to fix first, why it matters, and whether the solution requires a process change, clearer responsibilities, better use of existing tools, or automation.', 'Recommended next steps and measures you can use to track improvement.'] },
        after: ['The fee covers the assessment, documentation, findings, and recommendations. It does not include building automations, purchasing software, connecting systems, or ongoing support unless these are explicitly included in your agreement.'] },
    ],
    faqs: [
      ['How is this different from a financial audit?', 'A business process audit reviews how work operates: inquiries, scheduling, handoffs, invoicing and payment collection. It does not review accounts, tax or statutory compliance.'],
      ['Do I have to buy new software afterwards?', 'No. Recommendations may be process changes, clearer responsibilities or better use of tools you already have. Automation is recommended only where it fits.'],
      ['Can I use the plan without working with you?', 'Yes. The audit stands alone.'],
      ['Will I get numbers?', 'You get estimates of the time, cost and revenue affected, based on the information available, plus baseline metrics to measure against. Where data is missing, the report says so.'],
      ['How long does it take?', 'The audit takes between 2 and 30 days, depending on the size of the business and the scope of the review.'],
    ],
    ctaBlock: { h: 'Ready to See Where Your Process Is Losing Time?', p: "Tell me how work runs today and where it stalls, and we'll see whether an audit is the right place to start." },
  },
  {
    slug: 'operational-process-automation', no: '02', name: 'Operational Process Automation', hero: 'workflow', related: ['business-process-audit', 'systems-and-data-integration'],
    short: 'Take reminders, quotes, invoices and handoffs off your team so they run at the right moment.',
    title: 'Operational Process Automation: Quotes & Invoices | Rose Njeru',
    meta: 'Operational process automation for appointment reminders, quotes, invoices and job handoffs, so routine admin stops depending on someone remembering.',
    keyword: 'operational process automation',
    h1: 'Operational Process Automation for Reminders, Quotes and Invoicing',
    lede: 'Replace the reminders, spreadsheets and memory your admin relies on with workflows that run at the right time, with the right information.',
    cta: ['Book a Free Consultation', 'See Pricing'],
    sections: [
      { type: 'intro', title: 'Automate Your Business Processes, From Reminders to Invoicing',
        paras: ['Someone has to send the reminder. Someone has to follow up on the quote. Someone has to update the job status, prepare the invoice, and check whether the customer has paid.',
          'When these tasks depend on someone remembering to do them, things get missed as the workload grows.',
          "Process Automation takes repetitive tasks off your team's hands by automating routine steps at the right time and with the right information. Your team spends less time chasing tasks and more time serving customers and getting work done."],
        compare: [
          { label: 'Running it manually', items: ['Someone has to remember to send every appointment reminder.', 'Quotes sit, waiting to be prepared or followed up on.', "Invoices go out late, and overdue payments aren't chased consistently.", 'Team members spend time asking for updates and tracking down job details.', 'Customer updates depend on someone having time to send them.', "Tasks get missed when responsibilities aren't clear."] },
          { label: 'Running it automatically', good: true, items: ['Appointment confirmations and reminders are sent according to schedule.', 'Quotes are prepared from approved templates and followed up at the right time.', 'Completed jobs trigger the invoicing process, and overdue invoices receive scheduled reminders.', 'Job details and tasks are passed to the next person when specific steps are completed.', 'Customers receive timely updates without staff having to type each message.', 'Tasks are assigned and tracked, with alerts when action is needed.'] }] },
      { type: 'cards', title: 'What I Automate', items: [
        ['Appointment reminders and confirmations', 'Send booking confirmations, reminders and rescheduling links automatically, so customers remember appointments and can change them without back-and-forth.'],
        ['Quotes and estimates', "Generate quotes from approved templates and pricing rules, send them, and follow up when there's no reply."],
        ['Invoicing and payment reminders', 'Trigger invoice preparation when a job is marked complete and send reminders for overdue payments, shortening the gap between finishing work and getting paid.'],
        ['Job handoffs and task assignment', 'When a job reaches the next stage, notify the responsible person and pass along the details, deadlines and required actions.'],
        ['Customer status updates', 'Send a message when an appointment is confirmed, a technician is on the way, a job is complete or the customer needs to act.'],
        ['Review requests', 'Ask for a review after a completed job, with sensible timing and respecting customer preferences.'],
        ['Internal admin and reporting', 'Automate recurring reports, routine data entry, status updates and task tracking.']] },
      { type: 'steps', title: 'Simplify First, Then Automate', intro: 'Automating a confusing process only makes the confusion happen faster, so each build starts with the process.', items: [
        ['Map the process', 'See how the work is done now, who handles each step, and where delays, repeated tasks and workarounds occur.'],
        ['Fix the process', 'Simplify unnecessary steps, clarify responsibilities and standardise what must work consistently before it is automated.'],
        ['Build and test', 'Configure the workflow and test normal cases, missing information, duplicate events and exceptions that need a person.'],
        ['Launch and measure', 'Go live, document how it works, set error alerts, and compare performance with the starting measures.']] },
      { type: 'callout', title: 'Where People Stay in Charge', paras: ["The goal isn't to automate everything. Decisions that need human judgment stay with your team, exceptions are flagged for a person, and error alerts are configured where the tools allow. You receive documentation explaining what triggers each step and what to do when something goes wrong."] },
      { type: 'suits', title: 'Who Operational Process Automation Suits', items: ["Owners who spend evenings catching up on admin that didn't get done during the day.", 'Businesses losing time and money to missed appointments, forgotten follow-ups and late invoices.', 'Teams that keep asking, "Who was supposed to handle that?"', 'Growing teams trying to handle more work with the same manual processes.'] },
    ],
    faqs: [
      ['How is operational process automation different from systems integration?', 'Integration moves information between tools. Operational process automation runs the steps that follow from it: sending, preparing, assigning and chasing. Many projects use both.'],
      ['Which tasks are not worth automating?', 'Anything that needs judgment, or that happens too rarely to repay the setup. That is why each build starts by mapping the process.'],
      ['Can you automate a messy process?', `I'd fix it first. A [Business Process Audit](${BA}) is the quickest way to see what to simplify.`],
      ['Will customers know messages are automated?', 'You decide what is sent, when, and in what tone. Messages are written to sound like you.'],
      ['What if a step fails?', 'Where the tools allow it, error alerts tell you, and the documentation covers what to check.'],
    ],
    ctaBlock: { h: 'Ready to Take Routine Admin Off Your Team?', p: "Tell me which tasks keep slipping, and we'll look at which ones are worth automating first." },
  },
  {
    slug: 'systems-and-data-integration', no: '03', name: 'Systems and Data Integration', hero: 'integration', related: ['business-process-audit', 'operational-process-automation'],
    short: 'Connect the CRM, forms, booking, invoicing and payment tools you already use so details are entered once.',
    title: 'Systems and Data Integration & CRM Sync | Rose Njeru',
    meta: 'Connect your CRM, forms, booking, invoicing and payment tools so information moves automatically. Tested integrations with error alerts and documentation.',
    keyword: 'systems and data integration',
    h1: 'Systems and Data Integration',
    lede: 'Connect the CRM, forms, booking, invoicing and payment tools you already use, so details are entered once and every system stays up to date.',
    cta: ['Book a Free Consultation', 'See Pricing'],
    sections: [
      { type: 'intro', title: 'Connect Your Business Systems for Seamless Data Flow',
        paras: ["Your business may already have the tools it needs. The problem is that they don't share information. A customer fills in a form and someone copies their details into the CRM. A booking is confirmed but the calendar isn't updated. A job is completed and someone still creates the invoice by hand.",
          'Systems and data integration connects your existing tools so information moves between them automatically. I connect your CRM, forms, booking system, calendar, invoicing, payments and messaging tools to cut repeated work, prevent avoidable errors and keep records current.'],
        compare: [
          { label: 'Disconnected tools', items: ['The same customer details get entered into multiple systems.', "Customer records don't match between your CRM and invoicing software.", 'New inquiries sit in an inbox until someone remembers to check.', 'Staff spend time tracking down information across different tools.', "Reports show conflicting numbers because systems aren't updated consistently."] },
          { label: 'Connected tools', good: true, items: ['Customer details are captured once and shared with the systems that need them.', 'Customer records stay consistent across connected tools.', 'New inquiries enter your CRM and automatically notify the right person.', 'Bookings, job updates, and invoices trigger the next steps without unnecessary manual work.', "Reports draw on more consistent data, making it easier to understand what's happening in your business."] }] },
      { type: 'cards', title: 'What I Connect', items: [
        ['Website and social lead forms to CRM', 'Website forms, Facebook lead forms and other inquiry sources send details straight to your CRM, where leads can be tagged, assigned and routed.'],
        ['Booking system to calendar', 'Bookings sync with the right calendars, and confirmations and reminders go out automatically. Changes and cancellations update connected systems where supported.'],
        ['CRM to invoicing', 'When a job reaches the agreed completion stage, customer and job details can pass to your invoicing system instead of being re-entered.'],
        ['Payments to customer records', "Payment updates can sync with connected customer and accounting records, so you can see what's paid and what's outstanding."],
        ['Phone and SMS to CRM', 'Where your phone and messaging tools support it, calls and texts can be logged against the right customer record.'],
        ['Custom API and webhook connections', 'When two tools have no ready-made integration, I check whether their APIs or webhooks can connect them and build the connection where possible.']] },
      { type: 'steps', title: 'How a Systems Integration Is Built', items: [
        ['Map', 'List the tools you use, what each holds, and where your team copies data or switches between systems.'],
        ['Design', 'Decide how information should move, which system is the main record for each type of data, and what triggers each action.'],
        ['Build and test', 'Configure the connections and test normal transactions, missing information, duplicate records and other likely failures.'],
        ['Launch and document', 'Go live with error alerts configured, and document how the connections work and how to handle common issues.']] },
      { type: 'callout', title: 'Integrations That Keep Working Even When Something Goes Wrong', paras: ['An integration should do more than move data when everything goes right. Where the tools allow it, I build in error alerts, duplicate checks and safeguards against processing the same event twice, and I test how the connection behaves when information is missing or a service is briefly unavailable.', 'You also receive documentation showing what connects to what, what triggers each action and what to check if something fails.'] },
      { type: 'suits', title: 'Who Systems and Data Integration Suits', items: ["Businesses running several tools that don't share information.", 'Teams spending hours copying details between systems.', "Owners who find conflicting customer records or reports they can't rely on.", 'Businesses whose current integrations are unreliable or hard to maintain.', 'Growing teams that need information to move between sales, scheduling, delivery and finance without manual updates.'] },
    ],
    faqs: [
      ['Which tools can you connect?', 'It depends on what each tool offers: native connections, APIs or webhooks. I confirm what is possible during mapping, and I say so if two tools can’t be connected reliably.'],
      ['Do I have to replace my current tools?', 'No. The aim is to make the tools you already pay for work together.'],
      ["What about records that already don't match?", 'I review them during mapping, and whether a clean-up is needed is agreed before building.'],
      ['What happens if a connection fails?', 'Where the tools allow it, error alerts tell you, duplicate checks prevent repeat processing, and the documentation shows what to check.'],
      ['How do I know which integration to start with?', `A [Business Process Audit](${BA}) shows where information gets stuck and which connection would make the biggest difference.`],
    ],
    ctaBlock: { h: 'Ready to Connect Your Tools?', p: "Tell me which tools your team keeps moving information between, and we'll look at what can be connected." },
  },
  {
    slug: 'ai-agents', no: '04', name: 'AI Agents', hero: 'aiagent', related: ['business-process-audit', 'operational-process-automation', 'sales-and-marketing-automation'],
    short: 'AI agents that answer routine questions, qualify leads and sort inbox admin, with a handover to your team.',
    title: 'AI Receptionist & AI Agents for Small Business | Rose Njeru',
    meta: 'AI agents that answer customer questions, qualify leads and handle inbox admin, with clear limits and a handover to your team.',
    keyword: 'AI agents for small business',
    h1: 'AI Agents for Small Business: Front Desk, Inbox and Internal Questions',
    lede: 'AI agents that answer routine customer questions, qualify leads and sort inbox admin, within clear limits and with a handover to your team.',
    cta: ['Book a Free Consultation', 'See Pricing'],
    sections: [
      { type: 'intro', title: "Routine Questions Are Taking Your Team's Day",
        paras: ['Your team answers the same questions, follows up leads, handles appointment requests and searches for information every day. When work builds up, customers wait and important tasks get pushed back.',
          "AI agents can take on suitable parts of this work: responding to customer inquiries, asking qualifying questions, helping book appointments and finding answers in your documentation. When a request needs human judgment or falls outside the agent's instructions, it hands over to your team. Each agent is designed around your actual processes, connected to the tools you use, and given clear limits."] },
      { type: 'compare', title: 'AI Agents or Traditional Automation?', compare: [
          { label: 'Traditional automation', items: ['Follows predefined rules and triggers', 'Works best when requests are predictable', 'Needs new rules when the process changes'] },
          { label: 'AI agents', good: true, items: ['Interpret messages written in different ways', 'Work with information from emails, documents and conversations', 'Respond from your approved knowledge and rules', 'Escalate what needs a person'] }],
        outro: `For predictable, repetitive tasks, [Operational Process Automation](${OPA}) or [Sales & Marketing Automation](${SMA}) is often the better choice. Agents earn their place where the work involves language, finding information or varied requests. Some solutions combine both.` },
      { type: 'cards', title: 'What I Build', items: [
        ['After-hours AI receptionist', "Answers routine questions when you're closed, captures inquiry details and helps customers book where your booking system supports it. Urgent, unusual or sensitive requests go to a person under your rules."],
        ['AI voice agent', 'Answers incoming calls, works out what the caller needs, collects details and handles approved requests. It can connect to your CRM or booking system and transfer calls to your team.'],
        ['AI lead qualification agent', 'Asks prospects what your business needs to know, records the answers and routes suitable inquiries to the right person.'],
        ['Customer inquiry agent', 'Answers routine questions on supported channels such as website chat or messaging, using your approved information on services, hours, policies and next steps. Uncertain or sensitive questions go to your team.'],
        ['Database reactivation agent', `Reconnects with eligible past leads or customers using personalised messages, handles replies, spots interest and directs people to book, with outreach following applicable consent and opt-out requirements. The scheduled-message version is under [Sales & Marketing Automation](${SMA}).`],
        ['Internal SOP assistant', "Lets your team ask about procedures and policies and get answers grounded in your documents. If it isn't covered, it points the employee to the right person instead of guessing."],
        ['Document and inbox assistant', 'Reviews incoming emails or supported documents, identifies the request, extracts details, categorises it and prepares it for the next step. Sending a reply, updating a record or approving a request can require human confirmation depending on the risk.']] },
      { type: 'steps', title: 'How an AI Agent Is Built and Tested', items: [
        ['Define', 'Identify the task, who handles it now, what information the agent needs and what success looks like.'],
        ['Design', 'Set its responsibilities, approved information sources, permitted actions, escalation rules and boundaries, and decide which steps stay rule-based.'],
        ['Build and test', 'Connect it to the relevant tools and test real situations: unclear requests, missing information, wrong assumptions and cases needing a person.'],
        ['Launch and monitor', 'Go live with monitoring, review performance, fix errors and compare results with the baseline.']] },
      { type: 'cards', title: 'Measuring What an AI Agent Achieves', intro: "Every project starts with a clear baseline so you can compare performance after launch. Depending on the agent's purpose, we can measure:", items: [
        ['Response time', 'How long customers wait for an answer.'],
        ['Routine inquiries handled', 'How many requests are resolved without staff intervention.'],
        ['Booking completion', 'How many conversations result in completed bookings.'],
        ['Lead qualification', 'How many inquiries are assessed and routed correctly.'],
        ['Human handoffs', 'How often the agent needs your team and whether the handoff includes the right information.'],
        ['Staff time saved', 'How much time is spent on the tasks the agent handles.'],
        ['Answer quality', 'How often responses are accurate, relevant, and consistent with your approved information.']],
        outro: 'The measures depend on the use case. I establish what can be tracked before building, then report what the available data actually shows.' },
      { type: 'suits', title: 'Who AI Agents Suit', items: ['Service businesses receiving calls and inquiries outside business hours.', 'Teams answering the same customer questions repeatedly.', 'Businesses that must qualify leads before a team member gets involved.', 'Owners with old leads that need appropriate follow-up.', 'Teams that keep interrupting managers about documented procedures.', 'Businesses handling large volumes of emails, messages or documents that need sorting and routing.'] },
    ],
    faqs: [
      ['Will the agent make things up?', 'It is designed to answer only from the information you approve, to say so when it doesn’t know, and to hand over when unsure. It is tested against unsupported answers and monitored after launch. No AI system is error-free, which is why escalation and review are part of every build.'],
      ['Can customers still reach a person?', 'Yes. Handover rules are defined for each agent, and urgent or sensitive requests are routed to your team under your rules.'],
      ['Do I need an AI agent or ordinary automation?', `If requests are predictable, automation is simpler. If they vary in wording or need information looked up, an agent may help. A [Business Process Audit](${BA}) can settle it.`],
      ['Which channels and tools can it work with?', 'That depends on your phone, booking, CRM and messaging tools. I confirm what is supported during the Define step.'],
      ['What happens to customer data?', 'The information an agent can access is decided at the design stage, and I explain what it can see and use before anything is built.'],
    ],
    ctaBlock: { h: 'Ready to Hand Routine Requests to an AI Agent?', p: 'Tell me which questions and tasks keep landing on your team, and we’ll look at which ones an agent could take on safely.' },
  },
  {
    slug: 'sales-and-marketing-automation', no: '05', name: 'Sales & Marketing Automation', hero: 'leads', related: ['business-process-audit', 'ai-agents'],
    short: 'Respond to new inquiries quickly, follow up consistently and see which leads turn into bookings.',
    title: 'Sales & Marketing Automation for Service Businesses | Rose Njeru',
    meta: 'Respond to new inquiries quickly and follow up consistently: instant response, lead qualification, missed-call text-back and CRM tracking.',
    keyword: 'sales and marketing automation',
    h1: 'Sales & Marketing Automation for Service Businesses',
    lede: 'Respond to new inquiries quickly, follow up consistently, and see which leads turn into bookings.',
    cta: ['Book a Free Consultation', 'See Pricing'],
    sections: [
      { type: 'intro', title: 'Turn More of Your Leads Into Booked Customers',
        paras: ['You spend money and time attracting leads through ads, your website, and referrals. But what happens after someone enquires?',
          'Some wait hours for a reply. Others receive one follow-up and never hear from you again. Meanwhile, your team is busy handling existing customers and everyday tasks.',
          "Sales & Marketing Automation helps you respond to new inquiries quickly, identify suitable leads, follow up consistently, and keep track of who's ready to book. So fewer opportunities get lost simply because someone forgot to follow up."],
        compare: [
          { label: 'Without automation', items: ['Leads wait hours or days for a response while your team handles other work.', 'Follow-ups stop when someone gets busy or forgets.', 'Every inquiry receives the same follow-up, regardless of what the lead needs.', 'Potential customers sit in your CRM without another contact.', 'You spend money generating leads but struggle to see which ones become paying customers.'] },
          { label: 'With automation', good: true, items: ['New inquiries receive a timely acknowledgment, including outside business hours where the setup supports it.', 'Follow-up messages go out according to a schedule until the lead books, opts out, or reaches the end of the sequence.', 'Leads are sorted by your criteria, helping your team prioritize suitable, interested prospects.', "Older leads can receive relevant follow-ups when there's a valid reason to reconnect.", 'Your CRM tracks lead status and booking outcomes, giving you a clearer view of what happens after someone enquires.'] }] },
      { type: 'cards', title: 'What I Build', items: [
        ['Instant Lead Response', 'Connect website forms, ad leads, and other inquiry sources to a workflow that acknowledges new inquiries promptly and notifies the right person. Where appropriate, the response can include the next step, such as answering a few questions or booking a call.'],
        ['Lead Qualification and Routing', 'Ask the questions that matter to your business, such as the service needed, location, budget, or preferred timing. Route suitable leads to the right team member and flag inquiries that need a personal response.'],
        ['Lead Follow-Up Sequences', "Set up scheduled follow-ups for leads who haven't booked or responded. For example, Facebook and Instagram leads can receive messages on days 3, 7, and 14, based on your sales process. Follow-ups stop when someone books, opts out, or no longer qualifies."],
        ['Missed-Call Text-Back', 'When your team misses a call, send a text acknowledging the missed call and explaining how the caller can reach you or request an appointment. Keep the conversation moving instead of leaving the caller to try another business.'],
        ['Database Reactivation', 'Reconnect with older leads and previous customers using relevant messages and appropriate contact permissions. Invite them to book, ask whether they still need the service, or share an offer that fits their needs.'],
        ['CRM and Pipeline Automation', 'Automatically update lead records, assign follow-up tasks, and move opportunities through your sales pipeline when specific actions happen. Your team can see who needs attention without manually updating every record.']] },
      { type: 'steps', title: 'How It Works', items: [
        ['Audit', "Trace where leads come from, how quickly they're contacted, what happens during follow-up, and where potential customers drop off."],
        ['Design', 'Define qualification questions, message timing, routing rules, opt-out handling, and when a person needs to take over.'],
        ['Build and test', 'Connect your lead sources, CRM, and messaging tools. Test different scenarios, including incomplete inquiries, repeat leads, bookings, and opt-outs.'],
        ['Launch and measure', 'Put the workflows into use, document how they work, and compare response times and booking outcomes against the starting figures.']] },
      { type: 'cards', title: 'What I Measure', intro: 'Before launch I set a baseline from the data in your existing process. After launch we compare the same measures:', items: [
        ['Lead response time', 'How long inquiries wait for a reply.'],
        ['Contact rate', 'How many leads your team reaches.'],
        ['Qualification rate', 'How many inquiries meet your criteria.'],
        ['Lead-to-booking rate', 'How many inquiries become appointments or bookings.'],
        ['Follow-up conversion', 'How many bookings come from follow-up messages.'],
        ['Cost per booked customer', 'Where cost and booking data are available.']] },
      { type: 'callout', title: 'Follow-Up That Still Sounds Like You', paras: ["Automation shouldn't make your messages sound robotic. They are written in your tone, for your services. You decide what is sent, when, and when a team member takes over. Workflows respect applicable consent requirements and opt-out requests, and interested or unusual inquiries can be routed to a person."] },
      { type: 'suits', title: 'Who Sales & Marketing Automation Suits', items: ['Businesses paying for ads but unsure how many inquiries become customers.', "Teams that can't reach every new lead while serving existing customers.", 'Owners with a CRM full of inquiries that never got consistent follow-up.', 'Service businesses where customers contact several providers before choosing one.', 'Businesses that rely on staff remembering to call, text or email every prospect.'] },
    ],
    faqs: [
      ['Does this cover running ads or email newsletters?', 'It covers what happens after someone enquires: response, qualification, follow-up and tracking.'],
      ['How do you handle consent and opt-outs?', 'Messages respect applicable consent requirements, and sequences stop when someone opts out. We agree the rules for your market during design.'],
      ['Will it work with my CRM?', 'It depends on your CRM and messaging tools. I confirm what is possible before building.'],
      ["How will I know it's working?", 'Through the baseline: response time, contact rate and lead-to-booking rate before and after, using the data available.'],
      ['How is this different from an AI agent?', `Follow-up here runs on scheduled rules you set. An AI agent can hold a conversation and answer questions; see [AI Agents](${AI}).`],
    ],
    ctaBlock: { h: 'Ready to Stop Losing Leads to Slow Follow-Up?', p: "Tell me where your inquiries come from and what happens next, and we'll see where leads are dropping off." },
  },
];

/* Each audit page links to the four builds. */
services[0].related = ['operational-process-automation', 'systems-and-data-integration', 'ai-agents', 'sales-and-marketing-automation'];

/* ---------- 5. Case studies ---------- */
export const caseStudies = [
  { slug: 'business-audit', service: 'business-process-audit', no: '01', label: 'Business Process Audit', client: 'Ridgeline Plumbing Co. (11 staff, Columbus, Ohio)',
    challengeTitle: 'Customers Called. Some Never Heard Back.',
    challenge: ['Ridgeline Plumbing Co. is an 11-person plumbing company serving homeowners across Columbus, Ohio. Customers reached the business by phone, web form, and text, but when the team was out on jobs, calls went unanswered, web enquiries sat in the inbox, and text messages got buried. Some customers never received a response. Others received quotes days later, after they had already hired another plumber.',
      "Every missed enquiry was a potential job lost. A homeowner who needed a leaking pipe fixed or a water heater replaced wasn't likely to wait days for a quote when another plumber could respond within hours. Each lost job meant revenue the business had no chance to recover.",
      'The gaps continued beyond the first enquiry. New leads were recorded inconsistently, scheduling relied on whoever was available in the office, and customer details were sometimes lost between the initial contact and the booked job. Technicians occasionally arrived without the information they needed, creating delays and extra work.',
      "The team knew enquiries were slipping through the cracks, but couldn't quantify how many jobs they were losing, how much potential revenue was going to competitors, or where the process was breaking down. Before investing in automation, they needed to identify where customers were being lost and put a number on the cost."],
    solutionTitle: 'Lead Response, Intake & Scheduling Audit',
    solution: ['The audit traced every route a customer could take to reach Ridgeline Plumbing Co.: phone, web form, or text. It examined what happened from the first enquiry to the booked job and quote.',
      'It identified where enquiries went unanswered, where customer information was lost, where scheduling broke down, and how long customers waited for quotes. It also connected those gaps to their financial impact: jobs potentially lost to competitors, revenue left uncollected, and time wasted correcting preventable errors.',
      'Ridgeline received a ranked list of problems by financial impact, along with a 90-day action plan showing what to fix first, what to measure, and where automation could make the biggest difference.'],
    itemsLabel: 'What the audit covered',
    items: [['Missed calls', 'Tracked calls that went to voicemail, whether customers received callbacks, and how many enquiries remained unresolved.'], ['Web enquiries', 'Measured response times and identified forms that sat unanswered in the inbox.'], ['Customer texts', 'Checked which messages received no reply and where follow-ups fell through.'], ['Lead intake', 'Mapped how enquiries were recorded and identified missing or inconsistent customer details.'], ['Scheduling and handoffs', 'Traced how booked jobs moved from the office to technicians and where information or bookings broke down.'], ['Quote turnaround', "Measured the time between a customer's first contact and the quote being sent."], ['Revenue impact', 'Estimated the value of jobs lost or put at risk because of unanswered enquiries, delayed quotes, and failed follow-ups, using available enquiry and job data.'], ['Prioritisation', 'Ranked each problem by estimated financial impact and effort to fix, then built a 90-day plan around the highest-priority issues.']],
    measure: ['Missed calls without a callback', 'Enquiries without a response', 'Incomplete lead records', 'Average time to first response', 'Time from first contact to quote', 'Enquiry-to-booking conversion rate', 'Estimated revenue lost from unconverted enquiries'] },
  { slug: 'operations-automation', service: 'operational-process-automation', no: '02', label: 'Operational Process Automation', client: 'Ridgeline Plumbing Co.',
    challengeTitle: 'When Everyone Was Busy, Important Things Fell Through the Cracks',
    challenge: ['At Ridgeline Plumbing Co., keeping work moving depended on someone remembering the next step. Someone had to follow up on a quote, record a new inquiry, confirm a booking, pass job details to a technician, or chase an outstanding payment.',
      'These tasks were easy to overlook when the phone kept ringing, technicians needed answers, and new jobs were coming in. A quote could sit untouched until the customer hired another plumber. A new inquiry might be entered into one system but never make it onto the schedule. Customer details had to be entered again, creating more work and more opportunities for mistakes. And after a job was completed, an invoice could remain unpaid simply because nobody had time to follow up.',
      "The problem wasn't that the team didn't care. They were trying to manage incoming work, coordinate jobs, and keep customers informed while relying on memory, manual updates, and scattered information to hold everything together.",
      'Every missed follow-up risked losing a job. Every scheduling gap created extra coordination. Every delayed payment meant money the business had earned but couldn’t yet use.',
      'Ridgeline needed a more reliable way to move each inquiry, job, and payment to the next step without depending on someone remembering to do it.'],
    solutionTitle: 'Four Automations to Keep Jobs Moving and Payments Coming In',
    solution: ['I designed four connected automations to address the points where Ridgeline Plumbing Co. was losing time, dropping follow-ups, and delaying payments. Each automation handles a specific part of the operation, reducing reliance on manual reminders while keeping people in control of important decisions.'],
    itemsLabel: 'The four automations', numbered: true,
    items: [['Lead Capture & Intake', "New inquiries from phone, web forms, and text are recorded in one place. Customer details are captured consistently, and an acknowledgement is sent so inquiries don't sit unnoticed while the team is out on jobs."], ['Quote Follow-Up', 'When a quote goes unanswered, the system triggers a follow-up after a defined period. Staff can see which quotes still need attention and step in when a customer has questions or needs a revised quote.'], ['Job Scheduling & Handoffs', 'Once a job is confirmed, the relevant details are organised for scheduling and passed to the assigned technician. Human confirmation remains in place for bookings and assignments that require a decision.'], ['Invoicing & Payment Reminders', 'When a job is marked complete, the system triggers the invoicing process. Outstanding invoices are tracked, and payment reminders are sent according to a defined schedule, helping the team follow up without manually checking every account.']],
    measure: ['First-response time', 'Quote follow-up rate', 'Inquiry-to-booking conversion', 'Completeness of technician handoffs', 'Time from job completion to invoice', 'Average time to payment'] },
  { slug: 'integration-build', service: 'systems-and-data-integration', no: '03', label: 'Systems and Data Integration', client: 'Ridgeline Plumbing Co.',
    challengeTitle: 'Three Tools. Three Versions of the Same Customer.',
    challenge: ['Ridgeline used a job management system, a customer spreadsheet, and a messaging tool to manage its work. But the tools operated separately, so staff had to copy customer details from one system to another to keep records updated and customers informed.',
      'The same customer could appear under slightly different names, with inconsistent phone numbers or addresses across systems. Duplicate records accumulated, job histories became harder to track, and staff had to spend time checking which details were correct before acting.',
      "The problem wasn't simply duplicate data. When the systems couldn't reliably share information, completing a job didn't automatically update the other tools or trigger the next customer communication. Every handoff created another opportunity for an error or a missed step."],
    solutionTitle: 'Connecting the Job System, Customer Database & SMS',
    solution: ["I designed an integration connecting Ridgeline's job management system, customer database, and SMS tool so information could move between them without staff repeatedly entering the same details.", 'The integration standardises customer data, keeps records consistent across systems, and uses job status changes to trigger the next action where appropriate.'],
    itemsLabel: 'What was built',
    items: [['Connected the three systems', 'Established how customer and job information moves between the job management system, customer database, and SMS tool.'], ['Mapped the data fields', 'Matched customer names, phone numbers, addresses, job details, and job status across systems so each tool receives the information it needs.'], ['Handled inconsistent data', 'Added validation and formatting rules for phone numbers and ZIP codes, along with duplicate checks to reduce conflicting customer records.'], ['Automated post-job actions', 'Configured job completion to trigger the appropriate invoice process and customer review request, reducing the need for staff to initiate each step manually.'], ['Documented the integration', 'Created an integration map showing how the systems connect, what information passes between them, and which events trigger downstream actions.']],
    measure: ['Duplicate and incomplete records', 'Time spent re-entering customer data', 'Integration failures', 'Percentage of completed jobs that trigger the required follow-up actions'] },
  { slug: 'ai-agents', service: 'ai-agents', no: '04', label: 'AI Agents', client: 'After-hours agent for a clinic',
    challengeTitle: 'Patients Needed Answers After the Office Closed',
    challenge: ["The clinic closed at the end of the day, but patient questions didn't stop. Someone might text to ask about prices, check opening hours, or book an appointment for the following morning.",
      'Those messages waited until staff returned. By then, some patients may have contacted another clinic, while others had to wait hours for a simple answer or an available appointment.',
      "Keeping staff available after hours to handle routine inquiries and bookings wasn't practical. But leaving messages unanswered meant missed booking opportunities and a frustrating first experience for potential patients."],
    solutionTitle: 'After-Hours AI Agent for SMS & Chat',
    solution: ["I built an AI agent that responds to patient inquiries by text and chat outside clinic hours. It answers routine questions using the clinic's approved information, checks appointment availability, and books appointments directly. When a conversation requires human attention, it hands over the details so staff can pick up without making the patient repeat everything."],
    itemsLabel: 'What the agent does',
    items: [['Answers routine questions', "Provides information about clinic hours, services, prices, and policies using the clinic's approved knowledge base."], ['Books appointments directly', 'Checks availability, helps patients choose a suitable time, and books appointments without waiting for staff to return.'], ['Transfers conversations with context', "Passes the patient's request and conversation summary to staff when human involvement is needed."], ['Stays within clear boundaries', 'Never diagnoses conditions, recommends treatment, or provides medical advice.'], ['Escalates urgent or unusual messages', 'Routes these conversations to a human rather than attempting to handle them independently.']],
    measure: ['Routine inquiries resolved without staff intervention', 'Appointments booked after hours', 'Booking completion rate', 'Percentage of conversations handed off to staff', 'Cancellations and no-shows for after-hours bookings'] },
  { slug: 'lead-follow-up', service: 'sales-and-marketing-automation', no: '05', label: 'Sales & Marketing Automation', client: 'Service business running Facebook lead ads',
    challengeTitle: 'Leads Came In. Follow-up Fell Behind.',
    challenge: ['The business ran Facebook lead ads to attract new customers, but generating enquiries was only half the job. Leads arrived throughout the day and landed in the same queue, regardless of their needs, readiness to buy, or fit for the service.',
      "The team worked through enquiries as time allowed, often calling whoever appeared first rather than prioritising the strongest opportunities. Staff spent time chasing people who weren't ready to buy while genuinely interested prospects waited for a response.",
      'And when a lead didn’t book on the first call, follow-up was inconsistent. Some prospects needed a few days to decide, compare options, or find the right time. Without a reliable process to reconnect with them, those opportunities went cold.',
      'The business was paying to generate leads but had no consistent way to qualify them, prioritise follow-up, or track which enquiries eventually became customers.'],
    solutionTitle: 'Facebook Lead Qualification & 3-7-14 Day Follow-Up Automation',
    solution: ["I built an automated system that captures each Facebook lead as soon as it arrives, qualifies the enquiry against the business's criteria, and routes it to the appropriate next step. Leads that haven't booked enter a scheduled follow-up sequence on days 3, 7, and 14.", 'This gives the team a clearer picture of who needs attention, keeps potential customers engaged, and makes it easier to connect advertising spend to actual bookings.'],
    itemsLabel: 'What the system does',
    items: [['Captures every new lead', 'Automatically sends Facebook lead form submissions into the lead management system, reducing manual entry and missed enquiries.'], ['Qualifies incoming enquiries', "Checks each lead against the business's criteria, such as the required service, location, and readiness to proceed."], ['Prioritises sales-ready leads', 'Alerts the team when a qualified prospect is ready for a call or booking, so staff can focus on the strongest opportunities first.'], ['Follows up on days 3, 7, and 14', "Sends scheduled follow-up messages to leads who haven't booked, giving interested prospects another opportunity to respond."], ['Tracks every lead', 'Stores contact details, qualification status, follow-up activity, and booking outcomes in one place, making it easier to see which campaigns generate customers rather than just enquiries.']],
    measure: ['Qualified leads by campaign', 'Time to first response', 'Lead-to-booking conversion rate', 'Follow-up response rate', 'Bookings attributed to the day 3, 7, and 14 messages', 'Cost per booked customer'] },
  { slug: 'sop-agent', service: 'ai-agents', no: '06', label: 'AI Agents', client: 'For owners new to AI: Internal SOP Agent for a property management team',
    challengeTitle: 'Staff Needed Answers. Managers Kept Getting Interrupted.',
    challenge: ['When staff needed to check a refund policy, handle a late cancellation, or confirm the correct procedure for a tenant request, they often had to ask a manager or search through internal documents.',
      "The questions were routine, but answering them repeatedly interrupted managers' work. Searching for the right document took time, and staff could get inconsistent answers when procedures weren't easy to find.",
      "The team needed a faster way to access existing company knowledge without adding another tool for managers to maintain or allowing AI to make decisions it wasn't qualified to make."],
    solutionTitle: 'An Internal AI Agent for SOPs & Company Policies',
    solution: ["I built an internal AI agent that answers staff questions using the company's documented standard operating procedures (SOPs) and policies. Instead of searching through folders or waiting for a manager, employees can ask a question in plain language and get an answer based on approved internal documentation.", "The agent is designed for internal use only. It helps staff find information; it doesn't replace company policies, approve exceptions, or make decisions on behalf of management."],
    itemsLabel: 'What the agent does',
    items: [['Answers everyday policy questions', 'Helps staff find guidance on refunds, late cancellations, tenant requests, and other documented procedures.'], ['Uses approved company documentation', "Grounds its answers in the organisation's own SOPs and policies rather than relying on general AI knowledge."], ['Keeps staff in control', 'Directs employees to a manager when a question falls outside the documented procedures or requires an exception.'], ['Stays internal', 'Staff use the agent to access company knowledge; customers and tenants never interact with it directly.']],
    measure: ['Staff questions resolved without manager intervention', 'Time spent searching for procedures', 'Repeat policy questions escalated to managers', 'Percentage of answers requiring human clarification'] },
];

/* ---------- 6. Homepage ---------- */
export const practical = {
  title: 'Practical Ways Better Systems Improve Your Operations',
  text: 'Explore how process improvement, automation, connected systems and AI can help reduce manual work, improve customer experiences and make everyday operations easier to manage.',
  items: [
    ['business-process-audit', 'Identify What Is Slowing Your Operations Down', 'Understand where delays, repeated tasks and disconnected processes are affecting your operations. A Business Process Audit examines how work moves through your organisation and identifies what needs attention first.'],
    ['operational-process-automation', 'Automate Repetitive Operational Tasks', 'Reduce the time spent on routine administration, follow-ups, scheduling, customer updates and payment reminders. Automated workflows help move tasks forward without relying on someone to remember every step.'],
    ['systems-and-data-integration', 'Connect the Tools You Already Use', 'Bring your CRM, booking platforms, calendars, invoicing systems and other tools together. Connected systems allow information to flow between platforms, reducing duplicate data entry and inconsistent records.'],
    ['sales-and-marketing-automation', 'Turn More Enquiries Into Customers', 'Improve how enquiries are received, followed up and managed. Sales and marketing automation can support lead responses, qualification, follow-ups and routing, helping reduce the number of opportunities that go unattended.'],
    ['ai-agents', 'Put AI Agents to Work on Everyday Tasks', 'Use AI agents to respond to customer questions, support appointment booking, retrieve information and assist with internal tasks. Each agent is designed around approved information, defined responsibilities and human handover when needed.'],
  ],
};

export const roi = {
  title: 'Turning Operational Improvements into Measurable ROI',
  text: 'Explore how process improvement, automation, connected systems and AI can help reduce manual work, improve customer experiences and make everyday operations easier to manage.',
  items: [
    ['business-process-audit', 'Business Process Audit', 'Understand where delays, repeated tasks and disconnected processes are affecting your operations. A Business Process Audit examines how work moves through your organisation and identifies what needs attention first.'],
    ['operational-process-automation', 'Operational Process Automation', 'Reduce the time spent on routine administration, follow-ups, scheduling, customer updates and payment reminders. Automated workflows help move tasks forward without relying on someone to remember every step.'],
    ['systems-and-data-integration', 'Systems and Data Integration', 'Bring your CRM, booking platforms, calendars, invoicing systems and other tools together. Connected systems allow information to flow between platforms, reducing duplicate data entry and inconsistent records.'],
    ['sales-and-marketing-automation', 'Sales & Marketing Automation', 'Improve how enquiries are received, followed up and managed. Sales and marketing automation can support lead responses, qualification, follow-ups and routing, helping reduce the number of opportunities that go unattended.'],
    ['ai-agents', 'AI Agents', 'Use AI agents to respond to customer questions, support appointment booking, retrieve information and assist with internal tasks. Each agent is designed around approved information, defined responsibilities and human handover when needed.'],
  ],
};

export const homeHero = {
  title: 'Make your operations work smarter with AI and automation.',
  text: 'I help growing businesses simplify everyday operations, reduce repetitive work and connect the tools they already use so they spend less time managing processes and more time growing their business.',
};
export const categories = [
  { no: '01', title: 'Improve processes', text: "Find what's slowing work down and make everyday tasks easier.", to: '/services/business-process-audit' },
  { no: '02', title: 'Connect systems', text: 'Make the tools you already use share information automatically.', to: '/services/systems-and-data-integration' },
  { no: '03', title: 'Build automation', text: 'Automate repetitive tasks and build AI assistants.', to: '/services/operational-process-automation' },
];
export const difference = {
  eyebrow: '02 / AI & AUTOMATION',
  title: 'Where AI and automation make a difference.',
  text: 'From handling repeated processes to connecting different systems, AI and automation offer practical ways to improve how work gets done. Understanding where each can help is the first step towards building systems that work better together.',
  items: [
    ['01 / PROCESS AUTOMATION', 'Repeated steps can happen automatically.', 'Routine processes such as sending updates, organising information and managing follow-ups can be automated, reducing manual work and keeping things moving.'],
    ['02 / SYSTEM INTEGRATION', 'Different tools can work together.', 'Connecting platforms allows information to move between systems, helping keep records up to date and reducing the effort involved in managing separate tools.'],
    ['03 / AI-POWERED SOLUTIONS', 'AI can handle work that requires understanding.', 'AI can interpret requests, answer questions, process information and support customer communication, making it useful for tasks that require more flexibility.'],
    ['04 / PROCESS IMPROVEMENT', 'Better processes create a stronger foundation.', 'Reviewing how work is carried out helps identify opportunities to simplify steps, improve coordination and build systems that support changing needs.'],
  ],
};
export const casesTitle = 'Case Studies: Turning Operational Challenges into Measurable Improvements';

export const process = {
  eyebrow: '4 STEPS TO AI & AUTOMATION',
  title: 'Our AI & Automation Process in Four Simple Steps',
  text: 'A structured, collaborative approach to understanding your processes, identifying opportunities and building solutions that fit the way your business operates.',
  steps: [
    { no: '01', name: 'Business Process Discovery', title: 'Understand how your business really runs.',
      paras: ['I start by looking at how work moves through your business, following the customer journey from the first enquiry to final payment. I also examine the processes happening behind the scenes, including how your team handles information, responsibilities, approvals and everyday activities.', 'This helps me understand how different processes connect, where time and effort are spent, and where improvements could make a difference.'],
      result: 'This step builds a clear picture of your current processes before any changes or technology decisions are made.' },
    { no: '02', name: 'AI & Automation Strategy', title: 'Decide what to improve and how to approach it.',
      paras: ['Once I understand your processes, I assess each opportunity to determine the most suitable solution. Some areas may benefit from a simpler process, others from connecting existing tools or automating repetitive steps. Where a process requires more flexibility, an AI-powered solution may be appropriate.', 'I also identify where human judgement, decisions and approvals should remain part of the process.'],
      result: 'This step gives you a clear direction, with practical recommendations based on your needs rather than technology for its own sake.' },
    { no: '03', name: 'Solution Development & Integration', title: 'Build solutions that fit your existing systems.',
      paras: ['With the approach agreed upon, I develop the solutions and connect them to the tools you already use, such as your CRM, calendar, accounting software, spreadsheets and team communication platforms.', "I configure how information moves between systems, how automated processes are triggered and where human input is required. Each solution is built around the processes we've identified and the outcomes we're working towards."],
      result: 'This step turns the agreed plan into working solutions that connect with your existing tools and processes.' },
    { no: '04', name: 'Testing, Handover & Optimisation', title: 'Make sure everything works as intended.',
      paras: ['Before launch, I test the solutions against real situations, including missing information, delayed approvals and system interruptions. This helps identify issues and check that processes behave as expected.', 'Once ready, I document how everything works and guide your team through using the solutions. After implementation, we review the results, looking at improvements in customer response times, payment processes and the time spent on administration and reporting.'],
      result: 'This step ensures your solutions are tested, understood by your team and ready to improve as your needs change.' },
  ],
};

export const toolsSection = {
  heading: 'Tools That Make Your Systems Work Better',
  text: "I work with the tools you already use and introduce new ones only when they serve a clear purpose. The right technology isn't necessarily the most advanced; it's the one that solves the problem, fits your processes and works within your budget.",
  groups: [
    { title: 'Automation', tagline: 'moves work between steps and tools', text: 'Like a set of instructions that runs by itself: "when this happens, do that."', tools: ['Zapier', 'Make', 'n8n', 'Microsoft Power Automate'], usedFor: 'sending a quote after an enquiry, starting an invoice when a job finishes, routing an approval.' },
    { title: 'Your records and data', tagline: 'keeps everything in one place', text: 'Where customer details, jobs, staff information, and reports live.', tools: ['Airtable', 'Notion', 'GoHighLevel'], usedFor: 'one customer record, a team knowledge base, a live dashboard.' },
    { title: 'AI and messaging', tagline: 'answers questions and talks to customers or staff', text: 'An assistant that works from your own information and hands it over to a person when it should.', tools: ['Claude (Anthropic)', 'Twilio (SMS)', 'Vapi (voice)', 'WhatsApp'], usedFor: 'after-hours replies, appointment booking, and staff asking "how do we do this here?"' },
    { title: 'Custom code', tagline: "for what ready-made tools can't do", tools: ['Python'], usedFor: "unusual data clean-up, a connection no tool offers, a report built to your needs." },
  ],
  existing: { title: 'Your existing tools', tagline: 'we connect them', tools: ['CRM', 'Booking systems', 'Accounting software', 'Email', 'Calendar', 'Spreadsheets', 'Team chat', 'Payment tools'], text: "We connect them, so you don't have to replace anything." },
};

export const whyTitle = 'Why Work With Me?';
export const why = [
  ['We measure the impact, not just the implementation', "My background in statistics and data analysis shapes how I evaluate business improvements. Before a build, I establish a baseline for the process we're improving. After implementation, I compare the results using the same metrics, whether that's lead response time, booking rates, hours spent on manual work, or delays between job completion and payment. You can see what changed and where further improvements are needed."],
  ['From the process map to the working system', "I don't stop at identifying problems or writing recommendations. I design and build workflows, connect business tools, and develop AI agents around the way your business operates. You get a practical solution designed to work within your existing processes and systems."],
  ['Automation with a clear purpose', "Not every task needs AI, and not every problem needs automation. I focus on the changes that address the actual problem, using the simplest suitable solution rather than adding tools or complexity your business doesn't need."],
];

export const homeFaqs = [
  ['How can AI and automation actually help my business?', 'AI and automation can help reduce repetitive manual tasks, connect the tools you use and make everyday processes easier to manage. Depending on your needs, this could include handling customer enquiries, organising information, managing follow-ups or improving internal processes.'],
  ['How do I know which processes are worth automating?', 'Not every process needs automation. I start by understanding how things currently work, identifying repetitive steps or areas that could be improved, and determining where automation or AI would bring real value.'],
  ['Will your solutions work with the tools and software I already use?', 'In many cases, yes. I assess the tools you currently use and explore how they can be connected. Compatibility depends on the platforms involved and the integration options they support.'],
  ['Is AI automation suitable for a small business?', "Yes. AI and automation aren't only for large organisations. Solutions can be designed around the size, needs and resources of a business, starting with processes where improvements would make the biggest difference."],
  ['Will I lose control over processes once they are automated?', 'No. Automation is designed to support how you work, not take control away from you. Solutions can include approval steps, notifications and human handovers so you remain involved wherever your input is needed.'],
  ['Can I trust AI to handle important tasks and customer interactions accurately?', "AI can assist with tasks such as answering questions, processing information and supporting customer communication. However, it can sometimes make mistakes. That's why solutions should be tested, monitored and designed with human involvement where accuracy or judgement is important."],
  ['How will you protect my business and customer data?', 'Data protection is an important part of planning any solution. The approach depends on the systems involved, the information being processed and their security features. Before implementation, I consider how information is accessed, stored and shared.'],
  ['How much does an automation project cost?', 'The cost depends on the complexity of the project, the number of systems involved and the features required. After understanding your needs, I can recommend an appropriate solution and provide a project-specific quote.'],
  ['How long does implementation take, and will it disrupt my current processes?', "Timelines depend on the scope and complexity of the project. I first review your existing processes and plan the implementation to minimise disruption. You'll have a clearer timeline once the requirements have been established."],
  ['What happens if something goes wrong or I need changes after implementation?', 'Solutions should be tested before they go live, but issues or changing requirements can arise. I can provide support and discuss any necessary adjustments based on the agreed project scope and support arrangements.'],
];

export const homeCta = {
  h: 'Discover What AI & Automation Could Do for You',
  p: ['Explore how AI, automation and connected systems could improve your processes, reduce repetitive work and make everyday activities easier to manage.', 'Whether you need to improve an existing process, connect the tools you use or introduce an AI-powered solution, the first step is understanding what you need and where improvements are possible.'],
};