import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="container footer">
      <span>© {site.year} {site.name}</span>
      <span className="mono">Made in Malaysia</span>
    </footer>
  );
}
