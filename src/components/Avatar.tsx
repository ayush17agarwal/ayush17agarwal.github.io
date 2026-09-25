import Image from "next/image";

export default function Avatar({
  size = 112,
  ringWidth = 3,
  className = "",
}: {
  size?: number;
  ringWidth?: number;
  className?: string;
}) {
  return (
    <div
      className={`shrink-0 rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        padding: ringWidth,
        background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
      }}
    >
      <div className="h-full w-full overflow-hidden rounded-full bg-background">
        <Image
          src="/images/profile.jpg"
          alt="Ayush Agarwal"
          width={size}
          height={size}
          className="h-full w-full rounded-full object-cover"
          priority
        />
      </div>
    </div>
  );
}
