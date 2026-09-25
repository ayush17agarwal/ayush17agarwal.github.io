import type { Metadata } from "next";
import Container from "@/components/Container";
import { experience } from "@/lib/content";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <Container className="space-y-12 py-16">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
        <p className="text-base text-muted">
          Everything below draws from healthcare AI, cloud infrastructure, and
          a couple of research labs along the way.
        </p>
      </div>

      <ol className="divide-y divide-border">
        {experience.map((entry) => (
          <li
            key={entry.company + (entry.totalPeriod ?? entry.roles[0].period)}
            className="py-8 first:pt-0 last:pb-0"
          >
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="text-lg font-semibold">{entry.company}</h2>
              <p className="font-mono text-xs text-muted">
                {entry.totalPeriod ?? entry.roles[0].period}
                {entry.location ? ` · ${entry.location}` : ""}
              </p>
            </div>

            <div
              className={
                entry.roles.length > 1
                  ? "space-y-6 border-l-2 pl-5"
                  : "space-y-6"
              }
              style={
                entry.roles.length > 1 ? { borderColor: "var(--accent)" } : undefined
              }
            >
              {entry.roles.map((role) => (
                <div key={role.title} className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="font-medium">{role.title}</p>
                    {entry.roles.length > 1 && (
                      <p className="font-mono text-xs text-muted">{role.period}</p>
                    )}
                  </div>
                  {role.description && (
                    <p className="text-sm leading-relaxed text-muted">
                      {role.description}
                    </p>
                  )}
                  {role.bullets && (
                    <ul className="list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted">
                      {role.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Container>
  );
}
