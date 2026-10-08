import Link from "next/link";
import { site } from "@/data/site";

export default function Home() {
  return (
    <main className="container hero">
      <p className="eyebrow mono">Indie builder studio · Est. {site.year}</p>
      <h1>
        We build whatever we want<span className="accent">.</span>
      </h1>
      <p className="lead">
        {site.name} is a small group of friends making apps, tools and experiments. No roadmap, no
        pitch deck — if it sounds fun, we build it.
      </p>
      <div className="actions">
        <Link href="/projects/" className="btn btn-primary">
          See what we&apos;re making
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </Link>
        <Link href="/work-with-us/" className="btn btn-ghost">
          Work with us
        </Link>
      </div>
    </main>
  );
}
