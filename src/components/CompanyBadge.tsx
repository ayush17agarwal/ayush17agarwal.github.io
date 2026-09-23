const PALETTE = [
  "bg-teal-500/15 text-teal-700 dark:text-teal-300",
  "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300",
  "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  "bg-rose-500/15 text-rose-700 dark:text-rose-300",
  "bg-sky-500/15 text-sky-700 dark:text-sky-300",
  "bg-violet-500/15 text-violet-700 dark:text-violet-300",
];

function hashString(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export default function CompanyBadge({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase();
  const colorClass = PALETTE[hashString(name) % PALETTE.length];

  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-base font-semibold ${colorClass}`}
      aria-hidden
    >
      {initial}
    </div>
  );
}
