// All site copy lives here. Replace the [BRACKETED] placeholders with real details.

export const site = {
  name: "Makan Budak Studios",
  description: "A small software studio that designs and builds web and mobile apps.",
  email: "hello@example.com", // [hello@yourdomain.com]
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

export const hero = {
  kicker: "wassup, we're makan budak studios",
  titleStart: "We cook up apps that feel",
  titleUnderlined: "hand-made.",
  sub: "We're a small software studio. We design and build web and mobile apps.",
};

export const marquee = ["WEB APPS", "MOBILE APPS", "PRODUCT DESIGN", "PROTOTYPES", "BACKENDS"];

export const about = {
  kicker: "about",
  title: "A small team that builds apps",
  body: "There are several of us, based in Selangor, Malaysia. We design and build apps for startups and small businesses, from the first sketch to the version in the app store.",
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
    { name: "Incoming project", tag: "In progress", blurb: "We're still building this one.", href: null as string | null, image: null as string | null },
    { name: "Incoming project", tag: "In progress", blurb: "We're still building this one.", href: null as string | null, image: null as string | null },
    { name: "Incoming project", tag: "In progress", blurb: "We're still building this one.", href: null as string | null, image: null as string | null },
  ],
};

type Social = { kind: "threads" | "linkedin"; label: string; href: string };
type Member = { name: string; role: string | null; photo: string | null; socials: Social[]; cta?: { label: string; href: string } };

export const team: { kicker: string; title: string; members: Member[] } = {
  kicker: "the team",
  title: "The people you'll work with",
  members: [
    {
      name: "Muaz Sazelim",
      role: "Founder",
      photo: "/team/muaz.png",
      socials: [
        { kind: "threads", label: "@namasayamuaz", href: "https://www.threads.com/@namasayamuaz" },
        { kind: "linkedin", label: "muazsazelim", href: "https://www.linkedin.com/in/muazsazelim" },
      ],
    },
    { name: "Claude", role: "Developer", photo: "/team/claude.png", socials: [] },
    { name: "Could be you", role: null, photo: null, socials: [], cta: { label: "Get in touch", href: "#contact" } },
    { name: "Could be you", role: null, photo: null, socials: [], cta: { label: "Get in touch", href: "#contact" } },
  ],
};

export const contact = {
  kicker: "say hello",
  titleLine1: "Got an idea?",
  titleLine2: "Let's talk.",
  body: "Tell us what you're building. Half-baked ideas are fine. We reply within several working days.",
};
