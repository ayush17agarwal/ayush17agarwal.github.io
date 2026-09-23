"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/lib/content";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      const response = await fetch(`https://formspree.io/${profile.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <p className="font-medium">Thanks for reaching out!</p>
        <p className="mt-1 text-sm text-muted">I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-accent"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm text-muted">
            Email
          </label>
          <input
            id="email"
            name="_replyto"
            type="email"
            required
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-accent"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-accent"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Feel free to email me directly at{" "}
          <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
