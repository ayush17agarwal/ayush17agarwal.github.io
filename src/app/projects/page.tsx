import type { Metadata } from "next";
import Container from "@/components/Container";
import { projects } from "@/lib/content";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <Container className="space-y-10 py-16">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="text-base text-muted">
          A few things I&apos;ve built outside of my day job.
        </p>
      </div>

      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => {
          const card = (
            <div className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_12px_30px_-16px_var(--accent)]">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-medium transition-colors group-hover:text-accent">
                  {project.name}
                </h2>
                <span className="shrink-0 font-mono text-xs text-muted">
                  {project.period}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              {project.tags && (
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );

          return (
            <li key={project.name}>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {card}
                </a>
              ) : (
                card
              )}
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
