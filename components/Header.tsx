"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { site } from "@/data/site";

const links = [
  { href: "/projects/", label: "What we're making" },
  { href: "/work-with-us/", label: "Work with us" },
];

export function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname.replace(/\/?$/, "/") === href;

  return (
    <header className="container header">
      <Link href="/" className="brand">
        <Logo />
        <span>{site.name}</span>
      </Link>
      <div className="header-right">
        <nav aria-label="Main" className="nav">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
