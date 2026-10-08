import type { Metadata } from "next";
import Link from "next/link";
import { projects, type ProjectStatus } from "@/data/projects";

export const metadata: Metadata = { title: "What we're making" };

const statusLabel: Record<ProjectStatus, string> = {
  shipped: "Shipped",
  "in-progress": "In progress",
  idea: "Idea",
};

const linkLabel: Record<ProjectStatus, string> = {
  shipped: "Try it →",
  "in-progress": "Follow along →",
  idea: "",
};

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function ProjectsPage() {
  return (
    <main className="container projects-page">
      <div className="stack-20">
        <p className="eyebrow mono">Projects</p>
        <h1 className="page-title">
          What we&apos;re making<span className="accent">.</span>
        </h1>
        <p className="lead" style={{ maxWidth: "36rem" }}>
          Some of it ships, some of it doesn&apos;t. Here&apos;s everything — finished, half-built and
          still on the whiteboard.
        </p>
      </div>

      <div className="grid">
        {projects.map((p, i) => (
          <article key={i} className={`card${p.status === "idea" ? " is-idea" : ""}`}>
            <div className="thumb mono">
              {p.image ? (
                <img src={`${base}${p.image}`} alt="" />
              ) : p.status === "idea" ? (
                "[SKETCH]"
              ) : (
                "[SCREENSHOT]"
              )}
            </div>
            <div className="card-body">
              <span className={`chip chip-${p.status}`}>{statusLabel[p.status]}</span>
              <h2>{p.name}</h2>
              <p>{p.description}</p>
              {p.url && linkLabel[p.status] && (
                <a href={p.url} className="card-link">
                  {linkLabel[p.status]}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="band">
        <div>
          <h2>Got an idea we should build?</h2>
          <p>We&apos;re always looking for the next fun thing.</p>
        </div>
        <Link href="/work-with-us/" className="btn">
          Work with us
        </Link>
      </div>
    </main>
  );
}
