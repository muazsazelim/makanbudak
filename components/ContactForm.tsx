"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ options }: { options: string[] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No form service configured: open the visitor's email app instead.
    if (!site.formEndpoint) {
      const subject = `[${data.get("type")}] from ${data.get("name")}`;
      const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="thanks" role="status">
        <span className="check">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </span>
        <h2>Thanks — got it.</h2>
        <p>We&apos;ll get back to you soon.</p>
        <button type="button" className="btn btn-ghost" onClick={() => setStatus("idle")}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Say hi</h2>
      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="cf-type">What&apos;s this about?</label>
        <select id="cf-type" name="type">
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="cf-msg">Tell us a bit more</label>
        <textarea id="cf-msg" name="message" rows={5} required />
      </div>
      {status === "error" && (
        <p className="form-error" role="alert">
          Something went wrong. Try again, or email us at {site.email}.
        </p>
      )}
      <button type="submit" className="btn btn-primary" style={{ justifyContent: "center" }} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
