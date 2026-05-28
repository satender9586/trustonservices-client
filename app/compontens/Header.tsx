import Link from "next/link";
import BookingPopup from "./BookingPopup";

const navLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/#services"],
  ["Industries", "/#industries"],
  ["Jobs", "/jobs"],
  ["Call", "tel:+911234567890"],
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-[#f7f4ef]/90 backdrop-blur">
      <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 sm:px-5 sm:py-4 md:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="flex min-w-0 items-center gap-3 font-semibold">
          <span className="grid size-9 shrink-0 place-items-center rounded-md bg-black text-sm text-white sm:size-10 sm:text-base">
            TS
          </span>
          <span className="truncate text-base sm:text-lg">TrustonServices</span>
        </Link>

        <div className="order-3 col-span-2 flex justify-center gap-4 border-t border-black/10 pt-3 text-sm text-black/65 md:order-none md:col-span-1 md:border-t-0 md:pt-0">
          {navLinks.map(([label, href]) => (
            href.startsWith("/") ? (
              <Link key={label} href={href} className="transition hover:text-black">
                {label}
              </Link>
            ) : (
              <a key={label} href={href} className="transition hover:text-black">
                {label}
              </a>
            )
          ))}
        </div>

        <div className="justify-self-end">
          <BookingPopup triggerClassName="px-3 py-2 sm:px-4" />
        </div>
      </nav>
    </header>
  );
}
