import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Container className="max-w-xl space-y-8 py-16">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Get in touch</h1>
        <p className="text-base text-muted">
          Send me a message and I&apos;ll respond as soon as I can &mdash; or
          email me directly at{" "}
          <a
            className="text-accent underline underline-offset-4"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
          .
        </p>
      </div>

      <ContactForm />
    </Container>
  );
}
