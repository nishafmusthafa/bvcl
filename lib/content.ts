// Structured copy for the Home page. Source: Bakervaughn redesign brief (Sept 2026).
// Anything the brief marks as missing stays visible as [ADD ...].

export type Ticket = {
  id: string;
  channel: string;
  time: string;
  message: string;
  reply: string;
  outcome: string;
  stamp: string;
  service: string;
};

// Synthetic sample tickets across different kinds of business. Labelled as such on the page.
export const tickets: Ticket[] = [
  {
    id: "catering",
    channel: "Instagram DM · retail",
    time: "21:47",
    message: "Do you do trade pricing on orders of 200 units?",
    reply: "We do. Which items and what delivery postcode? I'll send a quote today.",
    outcome: "Lead qualified · quote drafted",
    stamp: "Replied 00:04",
    service: "PROXe",
  },
  {
    id: "table",
    channel: "Phone · after hours · clinic",
    time: "23:12",
    message: "Can I book a physio appointment for Friday morning?",
    reply: "Booked for 9:30am. Confirmation sent by text.",
    outcome: "Appointment booked · call logged",
    stamp: "Answered",
    service: "Dialgen.AI (AI Receptionist)",
  },
  {
    id: "rtw",
    channel: "VisorFlow · care home",
    time: "07:00",
    message: "Right-to-work check expires in 30 days for 2 carers.",
    reply: "Manager reminded. Evidence folder ready for review.",
    outcome: "Audit trail updated",
    stamp: "Flagged",
    service: "VisorFlow",
  },
  {
    id: "job",
    channel: "WhatsApp · trades",
    time: "18:20",
    message: "Boiler's gone. Can someone come out tonight?",
    reply: "An engineer can be with you by 8pm. Shall I confirm?",
    outcome: "Job booked · engineer notified",
    stamp: "Replied 00:05",
    service: "PROXe",
  },
  {
    id: "quote",
    channel: "Website form · logistics",
    time: "14:05",
    message: "We need one system for stock across 3 sites. Can you help?",
    reply: "Yes. Two quick questions, then I'll book your free consultation.",
    outcome: "Consultation booked · lead scored",
    stamp: "Replied 00:06",
    service: "PROXe",
  },
  {
    id: "stock",
    channel: "ERPNext · warehouse",
    time: "16:30",
    message: "SKU A-104 below reorder level at the Leeds warehouse.",
    reply: "Purchase order drafted and sent for approval.",
    outcome: "PO drafted · supplier ready",
    stamp: "Drafted",
    service: "Faircode ERPNext",
  },
];

export const demoPrompts = [
  { label: "Stock running low", ticket: "stock" },
  { label: "Call after hours", ticket: "table" },
  { label: "New enquiry", ticket: "catering" },
];

// One everyday problem per service, in the same order as the services menu,
// with what that service changes for the business.
export const problems = [
  {
    n: "i.",
    title: "Enquiries go cold",
    slug: "proxe",
    service: "PROXe",
    body: "Every DM, form and chat gets a reply in seconds, is qualified, then booked in or handed to your team. Leads stop waiting until morning.",
  },
  {
    n: "ii.",
    title: "The website just sits there",
    slug: "smartsite",
    service: "Smartsite",
    body: "An AI-enabled site that captures the enquiry and follows it up, so the website brings customers in instead of only describing you.",
  },
  {
    n: "iii.",
    title: "Social media keeps slipping",
    slug: "myaim",
    service: "MyAIM",
    body: "Plans, creates and posts your offers every day, built for convenience stores. The shop stays visible without anyone giving up an evening.",
  },
  {
    n: "iv.",
    title: "Calls ring out",
    slug: "ai-receptionist",
    service: "Dialgen.AI",
    body: "Answers every call, handles the common questions and takes bookings, even when you're busy or closed. No more lost bookings to voicemail.",
  },
  {
    n: "v.",
    title: "Compliance is a scramble",
    slug: "visorflow",
    service: "VisorFlow",
    body: "Right-to-work, rotas and payroll in one place, with alerts before anything lapses. A UKVI audit becomes a folder, not a panic.",
  },
  {
    n: "vi.",
    title: "Data lives in ten places",
    slug: "faircode-erpnext",
    service: "Faircodeme ERPNext",
    body: "Stock, sales and accounts in one system that grows with you, with no per-user licence fees. One set of numbers everyone trusts.",
  },
  {
    n: "vii.",
    title: "Marketing you can't measure",
    slug: "marketing",
    service: "Marketing & branding",
    body: "Brand, ads and local SEO tied to real enquiries, so you can see which spend actually pays and drop what doesn't.",
  },
];

export const services = [
  {
    slug: "proxe",
    name: "PROXe",
    kind: "AI Customer System",
    line: "AI lead conversion. Replies to every enquiry in seconds, qualifies it, and books it in or hands it to your team, day and night.",
    handles: "DMs · forms · chat",
    image: "/unsplash/proxe-qbC9hh0a.webp",
    alt: "A café owner behind the counter, ready to take orders",
  },
  {
    slug: "smartsite",
    name: "Smartsite",
    kind: "Website & lead generation",
    line: "AI-enabled customer-facing website that wins the enquiry and converts it: design, SEO, lead capture and follow-up, all in one place.",
    handles: "Website · leads · conversion",
    image: "/unsplash/marketing-Rmjq07KI.webp",
    alt: "A branded shop window display",
  },
  {
    slug: "myaim",
    name: "MyAIM",
    kind: "AI Social Media Manager",
    line: "Your AI social media manager, specialised for convenience stores. It plans your posts, creates them, markets your offers and turns followers into sales.",
    handles: "Think · Create · Market · Sales",
    image: "/unsplash/erpnext-BNBA1h-N.webp",
    alt: "Shop shelving stacked with boxed stock",
  },
  {
    slug: "ai-receptionist",
    name: "Dialgen.AI",
    kind: "AI Receptionist",
    line: "Answers every call and message, handles questions and takes bookings, even when you're busy or closed.",
    handles: "Calls · bookings · FAQs",
    image: "/unsplash/receptionist-4Hv6CF1N.webp",
    alt: "A man taking a phone call at an outdoor restaurant table",
  },
  {
    slug: "visorflow",
    name: "VisorFlow",
    kind: "HR, Payroll & Compliance",
    line: "HR, payroll and UKVI compliance, with an employee mobile mode. Right-to-work alerts before anything lapses.",
    handles: "Staff · rotas · audits",
    image: "/unsplash/visorflow-NlcCPeKN.webp",
    alt: "A member of staff working behind a restaurant counter",
  },
  {
    slug: "faircode-erpnext",
    name: "Faircodeme",
    kind: "ERPNext",
    line: "Accounts, stock, sales and HR in one open-source system, set up and supported by us. No per-user licence fees.",
    handles: "Stock · sales · accounts",
    image: "/unsplash/erpnext-BNBA1h-N.webp",
    alt: "Warehouse shelving stacked with boxed stock",
  },
  {
    slug: "marketing",
    name: "Marketing & branding",
    kind: "Growth",
    line: "Brand identity, websites, social content, paid ads and local SEO that turn attention into real enquiries.",
    handles: "Brand · ads · local SEO",
    image: "/unsplash/marketing-Rmjq07KI.webp",
    alt: "A branded shop window display",
  },
];

export const flowSteps = [
  { title: "Attract", service: "Marketing & branding + MyAIM", caption: "Brand, ads, local SEO and daily social posts bring enquiries in." },
  { title: "Answer", service: "PROXe + Dialgen.AI (AI Receptionist)", caption: "Every message, form and call answered, qualified and booked." },
  { title: "Run", service: "Faircode ERPNext", caption: "Orders, stock and accounts land in one place. Nothing re-typed." },
  { title: "Staff", service: "VisorFlow", caption: "Rotas, right-to-work and payroll, posting straight to the accounts." },
  { title: "Learn", service: "Back to marketing", caption: "Sales data shows which campaigns actually pay." },
];

export const work = [
  {
    name: "Souq Al Samak",
    client: "Seafood restaurant",
    kind: "Software",
    title: "A project hub for a busy restaurant team",
    challenge: "One place to plan, assign and track restaurant projects, shared across everyone's devices.",
    did: "A custom project-management web app with real-time sync, PIN-based login for each team member and a maritime look matched to the restaurant.",
    outcome: "[ADD RESULT: time saved, tasks tracked, team adoption]",
    image: "/unsplash/souq-NVU_Vaha.webp",
    alt: "Whole roasted fish with lemon and grilled vegetables",
  },
  {
    name: "KLUCK",
    client: "The Super Chicken",
    kind: "Brand",
    title: "A fried-chicken brand built for UK high streets",
    challenge: "Turning a QSR idea into a brand and menu that could stand out, price right for the UK and scale beyond one shop.",
    did: "Naming, identity and full menu architecture: three heat levels, a kids menu and six signature dips.",
    outcome: "[ADD RESULT: launch date, first-month sales, locations]",
    image: "/unsplash/kluck-NbXjZomy.webp",
    alt: "Fried chicken served on brown paper",
  },
  {
    name: "Norwood survey",
    client: "Norwood community, Sheffield",
    kind: "Research & data",
    title: "Asking a neighbourhood what it actually wants",
    challenge: "Finding out what residents really want from a local takeaway, from the community itself, not guesswork.",
    did: "Designed and printed the survey, then turned a stack of paper responses into a clean, verified dataset.",
    outcome: "[ADD RESULT: responses collected, key finding, decision made]",
    image: "/unsplash/norwood-khVRKwFw.webp",
    alt: "A row of English terraced houses with coloured doors",
  },
];

export const leadership = [
  { name: "Austin Walter", role: "Managing Director", note: "[ADD: one line on what Austin leads]", photo: "/team/austin.jpg" },
  { name: "Ninil Shyam", role: "Head of Development", note: "[ADD: one line on what Ninil leads]" },
  { name: "Nishaf Musthafa", role: "IT Manager", note: "Leads ERPNext and AI deployments for client businesses." },
];

export const advisors = [
  { name: "Bridgeway Investments", role: "Growth" },
  { name: "Abhilash Kollat", role: "Strategy & analytics" },
  { name: "Thanzeel Ashruf", role: "Creative" },
  { name: "Aslej Salem", role: "Operations" },
];

export const stages = [
  {
    key: "review",
    label: "Free review",
    title: "We look at how work actually moves.",
    body: "Calls, enquiries, stock, staff. We map where things get missed and point to the one thing worth fixing first. If a spreadsheet will do, we'll say so.",
  },
  {
    key: "plan",
    label: "Fixed plan",
    title: "Scope and a fixed price. No lock-in.",
    body: "Each service is sold on its own. We confirm scope and a fixed price after the review, open-source where it counts and UK-hosted where it matters.",
  },
  {
    key: "build",
    label: "Build & go live",
    title: "Tested on real days, then switched on.",
    body: "We connect your channels and records, teach the system your services, prices and tone, test it with you, and go live when you approve.",
  },
  {
    key: "improve",
    label: "Keep improving",
    title: "Reviewed like a shift report.",
    body: "Summaries, lead scores and results come back to you. We tune what's working and connect the next service only when it earns its place.",
  },
];

export const labs = [
  { name: "Micro data centres", line: "Run AI privately and keep data in the UK." },
  { name: "AI-driven gadgets", line: "Our AI on the counter, in the shop and at home." },
  { name: "Automations", line: "Orders, invoices, rotas and reports that run themselves." },
  { name: "Companion robots", line: "Early experiments that started as a “what if”." },
];

export const beliefs = [
  { title: "Built by operators", body: "We only sell what we'd trust in our own businesses, and we've tested most of it there first." },
  { title: "Honest advice", body: "If a spreadsheet will do, we'll tell you. Our free review points to the one thing worth fixing first." },
  { title: "You own your data", body: "Open-source where it counts, UK-hosted where it matters, and no lock-in contracts." },
  { title: "Always learning", body: "Our Labs and side builds keep us close to what's new in AI and hardware." },
];

export const contact = {
  email: "connect@bvcl.com",
  phone: "07770 077784",
};

// Only the head office shows an address.
export const offices: { city: string; type?: string; address?: string }[] = [
  { city: "Wales", type: "Head office", address: "Business Development Centre, Treforest, Wales CF37 5UR" },
  { city: "Sheffield" },
  { city: "Leicester" },
];
