import { About, Contact, Hero, Marquee, SiteFooter, SiteHeader, Team, Work } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Team />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
