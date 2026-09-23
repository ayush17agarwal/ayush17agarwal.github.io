import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            className="transition-colors hover:text-foreground"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="transition-colors hover:text-foreground"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="transition-colors hover:text-foreground"
            href={`mailto:${profile.email}`}
          >
            Email
          </a>
          <a className="transition-colors hover:text-foreground" href="/snake/snake.html">
            Snake &#127918;
          </a>
        </div>
      </div>
    </footer>
  );
}
