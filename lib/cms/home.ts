// Copy for each section of the Home page, kept in code. Lists of things (brands,
// testimonials, work, team) are managed in /admin; see lib/collections.
import * as c from "@/lib/content";

export const homeSections = {
  hero: {
    label: "Hero",
    anchor: "top",
    description: "Opening headline, intro, buttons and the Trusted by client strip.",
    defaults: {
      eyebrow: "AI and business systems for UK businesses",
      headline: "Build the system",
      headlineAccent: "that runs your business.",
      intro:
        "AI customer acquisition, HR, payroll and compliance, data and ERP, connected into one system. Every enquiry answered, every number in one place.",
      ctaLabel: "Book a free consultation",
      secondaryLabel: "See how it connects",
      trustedLabel: "Trusted by businesses across hospitality, retail, care and services",
      clients: ["Charcoal Shack", "Arabian Grill", "Khaleej Mandi House", "Harlequin Care Limited", "1 Key Solution"],
    },
  },
  why: {
    label: "Why we exist",
    anchor: "why-title",
    description: "The problem statement: seven everyday problems and the service that fixes each.",
    defaults: {
      title: "Most businesses don't need more software.",
      subtitle: "They need the leaks fixed. Here is where each of our seven services steps in.",
      problems: c.problems,
      closing: "One team, seven services, one connected system. Start with the problem that costs you most.",
    },
  },
  services: {
    label: "Services",
    anchor: "services",
    description: "The service menu: PROXe, Smartsite, MyAIM, Dialgen.AI, VisorFlow, ERPNext and marketing.",
    defaults: {
      title: "Seven services. One brain behind them.",
      intro: "Each is sold separately. Use one, or join them up. Together they share the same data, so nothing gets re-typed.",
      items: c.services,
      addon: "Optional AI plugins & integrations",
      helpPrompt: "Not sure where to start?",
      helpLabel: "Help me choose",
    },
  },
  statement: {
    label: "Statement",
    anchor: "statement",
    description: "The large scrolling statement. The highlighted words light up in amber.",
    defaults: {
      headline: "Your whole business, running on",
      highlight: "one system.",
      body: "Calls, enquiries, stock, staff and accounts, connected. Nothing re-typed, nothing missed.",
    },
  },
  connect: {
    label: "How it connects",
    anchor: "connect",
    description: "The five connected stages: one loop where every service feeds the next.",
    defaults: {
      eyebrow: "How it all connects",
      title: "One loop. Every service feeds the next.",
      intro: "Each service works on its own. Connected, customers come in, get answered and get served, and what you learn brings the next ones in. Nothing is typed twice.",
      steps: c.flowSteps,
    },
  },
  work: {
    label: "Work",
    anchor: "work",
    description: "Case studies: challenge, what we did and the outcome.",
    defaults: {
      title: "Real businesses. Real builds.",
      linkLabel: "All work & case studies",
      projects: c.work,
    },
  },
  operators: {
    label: "Team & advisors",
    anchor: "operators",
    description: "Who we are, the leadership team and the advisory board.",
    defaults: {
      eyebrow: "Built by operators",
      title: "Built from the shop floor up.",
      paragraphs: [
        "Our leadership has spent more than 15 years in UK food, retail and hospitality. We know what a Friday-night rush, a supplier shortfall and a Home Office audit feel like, because we've lived them.",
        "We rolled out ERPNext across our own businesses first. Then came the problems ERP couldn't solve: missed calls, slow replies and sponsor-licence paperwork. So we built PROXe, Dialgen.AI (our AI receptionist) and VisorFlow.",
      ],
      note: "Founded 2018",
      leadership: c.leadership,
      advisorsLabel: "Advisory board",
      advisors: c.advisors,
    },
  },
  approach: {
    label: "How we work",
    anchor: "approach-title",
    description: "The four selectable stages of working with us.",
    defaults: {
      eyebrow: "How we work",
      title: "Fix the one thing first. Then connect the rest.",
      stages: c.stages,
    },
  },
  labs: {
    label: "Labs",
    anchor: "labs",
    description: "Bakervaughn Labs side builds.",
    defaults: {
      eyebrow: "Bakervaughn Labs",
      title: "AI you can touch.",
      intro: "Side builds that started as “what if” conversations. Some graduate into products.",
      badge: "In R&D",
      items: c.labs,
    },
  },
  beliefs: {
    label: "Why us",
    anchor: "beliefs-title",
    description: "Why businesses pick us.",
    defaults: {
      title: "Why businesses pick us.",
      items: c.beliefs,
    },
  },
  close: {
    label: "Contact call to action",
    anchor: "contact",
    description: "The amber closing section with the consultation button.",
    defaults: {
      title: "Tell us the one thing costing you most.",
      body: "A free consultation, no obligation. Tell us how your business runs today and we'll show you where one connected system saves the most time.",
      ctaLabel: "Book a free consultation",
    },
  },
  footer: {
    label: "Footer",
    anchor: "footer",
    description: "Tagline, contact details, company number and office board.",
    defaults: {
      tagline: "AI and business systems, built by operators.",
      email: c.contact.email,
      phone: c.contact.phone,
      companyNumber: "[NUMBER]",
      officesLabel: "Offices",
      offices: c.offices,
    },
  },
};

export type HomeSections = typeof homeSections;
export type HomeContent = { [K in keyof HomeSections]: HomeSections[K]["defaults"] };

export const homeContent = Object.fromEntries(
  Object.entries(homeSections).map(([key, section]) => [key, section.defaults]),
) as HomeContent;
