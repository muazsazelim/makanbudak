import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Work with us" };

const ways = [
  {
    title: "Collaborate",
    body: "You have an idea, we have time and tools. We build it together and share the credit.",
  },
  {
    title: "Hire us for a build",
    body: "Need an app, a tool or a prototype made? Tell us what it is and we'll see if it's a fit.",
  },
  {
    title: "Join the crew",
    body: "Designer, developer or just someone who likes making things? Show us what you've built.",
  },
];

export default function WorkPage() {
  return (
    <main className="container work-page">
      <div className="work-intro">
        <div className="stack-20">
          <p className="eyebrow mono">Work with us</p>
          <h1 className="page-title">
            Let&apos;s build something<span className="accent">.</span>
          </h1>
          <p className="lead" style={{ maxWidth: "32rem" }}>
            We&apos;re small and picky, but always up for a good idea. Here&apos;s how we usually team
            up.
          </p>
        </div>

        <ol className="ways">
          {ways.map((w, i) => (
            <li key={w.title}>
              <span className="num mono">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2>{w.title}</h2>
                <p>{w.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="email-line">
          Prefer email? <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>

      <div className="form-card">
        <ContactForm options={[...ways.map((w) => w.title), "Something else"]} />
      </div>
    </main>
  );
}
