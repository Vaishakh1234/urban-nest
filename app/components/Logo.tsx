import Image from "next/image";

/**
 * Brand lockup using the actual logo image from /public/logo.png.
 *
 * The source artwork is cream on transparent, so it is shown as designed on
 * dark surfaces. On light surfaces it sits on an accent (olive) tile — the
 * same treatment as the brand's avatar — instead of being colour-flattened
 * with a CSS filter.
 */
export function Logo({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  if (dark) {
    return (
      <span className={`flex items-center ${className}`}>
        <Image
          src="/logo.png"
          alt="Urbannest Interiors"
          width={180}
          height={48}
          className="h-9 w-auto object-contain"
          priority
        />
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center rounded-xl bg-accent px-3 py-2 ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Urbannest Interiors"
        width={180}
        height={48}
        className="h-7 w-auto object-contain"
        priority
      />
    </span>
  );
}
