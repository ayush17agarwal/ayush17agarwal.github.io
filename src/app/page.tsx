import Link from "next/link";
import Container from "@/components/Container";
import Avatar from "@/components/Avatar";
import { profile } from "@/lib/content";

export default function Home() {
  return (
    <Container className="flex min-h-[calc(100vh-73px)] flex-col justify-center gap-8 py-20">
      <div className="space-y-6">
        <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
          <Avatar size={88} />
        </div>
        <p
          className="animate-fade-up font-mono text-sm text-accent"
          style={{ animationDelay: "40ms" }}
        >
          Hi, I&apos;m
        </p>
        <h1
          className="animate-fade-up gradient-text text-5xl font-semibold tracking-tight sm:text-6xl"
          style={{ animationDelay: "60ms" }}
        >
          {profile.name}
        </h1>
        <p
          className="animate-fade-up text-lg text-muted sm:text-xl"
          style={{ animationDelay: "120ms" }}
        >
          {profile.role}
        </p>
        <p
          className="animate-fade-up max-w-xl text-base leading-relaxed text-muted"
          style={{ animationDelay: "180ms" }}
        >
          {profile.tagline}
        </p>
      </div>

      <div
        className="animate-fade-up flex flex-wrap items-center gap-3"
        style={{ animationDelay: "240ms" }}
      >
        <Link
          href="/experience"
          className="rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-transform hover:scale-[1.03]"
          style={{
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
          }}
        >
          View my experience
        </Link>
        <Link
          href="/projects"
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent"
        >
          See projects
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent"
        >
          Get in touch
        </Link>
      </div>
    </Container>
  );
}
