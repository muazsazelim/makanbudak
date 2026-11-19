// All site copy lives here. Replace the [BRACKETED] placeholders with real details.

export const site = {
  name: "Makan Budak Studios",
  description: "A small software studio that designs and builds web and mobile apps.",
  email: "hello@example.com", // [hello@yourdomain.com]
  city: "[CITY]",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

export const hero = {
  kicker: "hello, we're makan budak studios",
  titleStart: "We cook up apps that feel",
  titleUnderlined: "hand-made.",
  sub: "We're a small software studio. We design and build web and mobile apps.",
  logoNote: "yes, we drew this ourselves",
};

export const marquee = ["WEB APPS", "MOBILE APPS", "PRODUCT DESIGN", "PROTOTYPES", "BACKENDS"];

export const about = {
  kicker: "about",
  title: "A small team that builds apps",
  body: "There are [NUMBER] of us, based in [CITY]. We design and build apps for startups and small businesses, from the first sketch to the version in the app store.",
  services: [
    { icon: "web", title: "Web apps", body: "Websites, and the dashboards behind them." },
    { icon: "mobile", title: "Mobile apps", body: "iOS and Android apps that people open more than once." },
    { icon: "design", title: "Product design", body: "From a napkin sketch to a clickable prototype you can test." },
  ] as const,
};

export const work = {
  kicker: "our work",
  title: "Fresh from the kitchen",
  cta: "Want yours here?",
  projects: [
    { name: "[PROJECT ONE]", tag: "Mobile app", blurb: "[One line on what it does and who it is for.]", href: "#work", image: null as string | null },
    { name: "[PROJECT TWO]", tag: "Web app", blurb: "[One line on what it does and who it is for.]", href: "#work", image: null as string | null },
    { name: "[PROJECT THREE]", tag: "Design", blurb: "[One line on what it does and who it is for.]", href: "#work", image: null as string | null },
  ],
};

export const team = {
  kicker: "the team",
  title: "The people you'll work with",
  members: [
    { name: "[NAME]", role: "Co-founder, [ROLE]", food: "[ ________ ]", photo: null as string | null },
    { name: "[NAME]", role: "Co-founder, [ROLE]", food: "[ ________ ]", photo: null as string | null },
    { name: "[NAME]", role: "[ROLE]", food: "[ ________ ]", photo: null as string | null },
    { name: "[NAME]", role: "[ROLE]", food: "[ ________ ]", photo: null as string | null },
  ],
};

export const contact = {
  kicker: "say hello",
  titleLine1: "Got an idea?",
  titleLine2: "Let's talk.",
  body: "Tell us what you're building. Half-baked ideas are fine. We reply within [X] working days.",
};
