import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const brandFont = localFont({
  src: "../public/fonts/outfit-variable.ttf",
  weight: "100 900",
  display: "swap",
});

interface LogoProps {
  inverse?: boolean;
  className?: string;
}

export function Logo({ inverse = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Gara Digital, ir al inicio"
      className={cn("inline-flex shrink-0 items-center gap-3", className)}
    >
      <Image
        src="/images/gara-circular.png"
        alt="Gara Digital"
        width={220}
        height={80}
        priority
        className={cn("size-11 object-contain", inverse && "brightness-110")}
      />
      <span
        className={cn(
          brandFont.className,
          "text-foreground text-2xl leading-none font-semibold tracking-[-0.035em]",
        )}
      >
        GARA<span className="text-accent">.</span>
        <span className="mt-1.5 block text-[9px] leading-none font-medium tracking-[0.34em] uppercase">
          Digital
        </span>
      </span>
    </Link>
  );
}
