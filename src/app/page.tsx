import Link from "next/link";
import Container from "@/components/Container";
import { profile } from "@/lib/content";

export default function Home() {
  return (
    <Container className="flex min-h-[calc(100vh-73px)] flex-col justify-center gap-8 py-20">
      <div className="space-y-6">
        <p className="font-mono text-sm text-accent">Hi, I&apos;m</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {profile.name}
        </h1>
        <p className="text-lg text-muted sm:text-xl">{profile.role}</p>
        <p className="max-w-xl text-base leading-relaxed text-muted">
          {profile.tagline}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/experience"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          View my experience
        </Link>
        <Link
          href="/projects"
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground"
        >
          See projects
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground"
        >
          Get in touch
        </Link>
      </div>
    </Container>
  );
}
