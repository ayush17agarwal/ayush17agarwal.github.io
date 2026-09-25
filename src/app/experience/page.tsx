import type { Metadata } from "next";
import Container from "@/components/Container";
import CompanyBadge from "@/components/CompanyBadge";
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

      <div className="relative">
        <div
          aria-hidden
          className="absolute bottom-2 left-[22px] top-2 w-px bg-gradient-to-b from-accent/50 via-border to-transparent"
        />
        <ol className="space-y-10">
        {experience.map((entry) => (
          <li key={entry.company + (entry.totalPeriod ?? entry.roles[0].period)} className="group">
            <div className="flex gap-4 transition-transform duration-200 group-hover:translate-x-1">
              <CompanyBadge name={entry.company} />
              <div className="min-w-0 flex-1 space-y-5">
                <div>
                  <p className="font-medium transition-colors group-hover:text-accent">
                    {entry.company}
                  </p>
                  <p className="text-sm text-muted">
                    {entry.totalPeriod ?? entry.roles[0].period}
                    {entry.location ? ` · ${entry.location}` : ""}
                  </p>
                </div>

                <ul
                  className={
                    entry.roles.length > 1
                      ? "space-y-5 border-l border-border pl-5"
                      : "space-y-5"
                  }
                >
                  {entry.roles.map((role) => (
                    <li key={role.title} className="space-y-2">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <p className="text-sm font-medium">{role.title}</p>
                        {entry.roles.length > 1 && (
                          <p className="font-mono text-xs text-muted">
                            {role.period}
                          </p>
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
                      {role.skills && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {role.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
        </ol>
      </div>
    </Container>
  );
}
