"use client";

import { useState } from "react";

// No backend yet: submitting opens the visitor's email app with the message filled in.
// Swap handleSubmit for a real endpoint (Formspree, Resend, a route handler) when you have one.
export function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const from = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = `New project from ${name}`;
    const body = `${message}\n\n${name}\n${from}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Your name
        <input name="name" type="text" placeholder="Ali bin Abu" autoComplete="name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
      </label>
      <label>
        What are we cooking?
        <textarea name="message" rows={4} placeholder="An app that..." required />
      </label>
      <button type="submit" className="btn btn--primary">Send it</button>
      {sent && (
        <p className="contact-form__note" role="status">
          Your email app should open with the message ready.
        </p>
      )}
    </form>
  );
}
