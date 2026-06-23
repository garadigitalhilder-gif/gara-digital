import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  inverse?: boolean;
  className?: string;
}

export function Logo({
  inverse = false,
  className,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Gara Digital, ir al inicio"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/images/gara-circular.png"
        alt="Gara Digital"
        width={220}
        height={80}
        priority
        className={cn(
          "h-auto w-auto max-h-16 object-contain",
          inverse && "brightness-110"
        )}
      />
    </Link>
  );
}
