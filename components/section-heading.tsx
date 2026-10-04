import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}
    >
      <div
        className={cn(
          "mb-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase",
          inverse ? "text-accent" : "text-accent",
        )}
      >
        <span className="h-px w-8 bg-current" />
        {eyebrow}
      </div>
      <h2
        className={cn(
          "text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-balance sm:text-5xl lg:text-6xl",
          inverse ? "text-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-7 sm:text-lg",
            align === "center" && "mx-auto",
            inverse ? "text-muted" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
