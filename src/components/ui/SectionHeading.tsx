interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-widest text-navy-light">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold text-navy-dark sm:text-4xl">
        {title}
      </h2>
      <span className="h-1 w-16 rounded-full bg-cream-dark" />
      {subtitle && (
        <p className="max-w-2xl text-base text-navy-dark/70">{subtitle}</p>
      )}
    </div>
  );
}
