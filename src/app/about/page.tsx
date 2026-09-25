import type { Metadata } from "next";
import Container from "@/components/Container";
import Avatar from "@/components/Avatar";
import { education, profile } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Container className="space-y-12 py-16">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Avatar size={64} />
          <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        </div>
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
            Urbana-Champaign ({education[0].period}), and later completed a
            Machine Learning and Deep Learning graduate certificate at the
            University of Washington. My first exposure to real engineering
            came earlier than that, during three years at the Illinois
            Mathematics and Science Academy (IMSA) &mdash; as a research
            student at Fermilab modeling particle physics data, and as a
            software engineering intern at Worldpay and FIS.
          </p>
          <p>
            Outside of work I&apos;m usually on a golf course &mdash; I spent
            a couple of years coaching junior golf through the PGA Jr.
            League, and before that volunteered at a donation center in
            Algonquin, IL.
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
