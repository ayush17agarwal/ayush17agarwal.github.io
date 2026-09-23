import type { Metadata } from "next";
import Container from "@/components/Container";
import { education, profile, volunteering } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Container className="space-y-16 py-16">
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <div className="space-y-4 text-base leading-relaxed text-muted">
          <p>
            I&apos;m a Forward Deployed Engineer at Rippling, based in New York.
            Before that, I spent two and a half years as a Software Development
            Engineer at AWS &mdash; most recently on HealthCare AI within AWS
            HealthLake, and before that building CI/CD infrastructure used
            across AWS&apos;s global deployment footprint.
          </p>
          <p>
            I studied Computer Science at the University of Illinois
            Urbana-Champaign, and later completed a Machine Learning and Deep
            Learning graduate certificate at the University of Washington. My
            first exposure to real engineering came earlier than that &mdash;
            as a research student at Fermilab modeling particle physics data,
            and as a software engineering intern at Worldpay and FIS.
          </p>
          <p>
            Outside of work I&apos;m usually on a golf course, and I spent a
            few years coaching junior golf through the PGA Jr. League.
          </p>
        </div>
        <p className="text-sm text-muted">
          Find me on{" "}
          <a
            className="text-accent underline underline-offset-4"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a
            className="text-accent underline underline-offset-4"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Education</h2>
        <ul className="space-y-6">
          {education.map((entry) => (
            <li key={entry.school} className="space-y-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="font-medium">{entry.school}</p>
                <p className="font-mono text-xs text-muted">{entry.period}</p>
              </div>
              <p className="text-sm text-muted">{entry.credential}</p>
              {entry.details?.map((detail) => (
                <p key={detail} className="text-sm text-muted">
                  {detail}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Volunteering</h2>
        <ul className="space-y-6">
          {volunteering.map((entry) => (
            <li key={entry.role + entry.org} className="space-y-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="font-medium">
                  {entry.role} &middot; {entry.org}
                </p>
                <p className="font-mono text-xs text-muted">{entry.period}</p>
              </div>
              {entry.description && (
                <p className="text-sm text-muted">{entry.description}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <p className="text-sm text-muted">
        P.S. I built a version of the classic Snake game &mdash;{" "}
        <a className="text-accent underline underline-offset-4" href="/snake/snake.html">
          give it a try
        </a>
        .
      </p>
    </Container>
  );
}
