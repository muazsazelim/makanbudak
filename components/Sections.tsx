import Image from "next/image";
import { about, hero, marquee, site, team, work, contact } from "@/content";
import { ArrowRight, CurvyArrow, ServiceIcon, Sparkle, Squiggle } from "./Doodles";
import { ContactForm } from "./ContactForm";

export function SiteHeader() {
  return (
    <header className="container site-header">
      <a href="#top" aria-label={`${site.name} home`}>
        <Image src="/logo.svg" alt="" width={64} height={62} priority unoptimized />
      </a>
      <nav aria-label="Main">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#team">Team</a>
        <a href="#contact" className="btn btn--small">Say hi</a>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="container hero">
      <div className="hero__text">
        <p className="scribble hero__kicker">{hero.kicker}</p>
        <h1 className="hero__title">
          {hero.titleStart}{" "}
          <span className="underlined">
            {hero.titleUnderlined}
            <Squiggle />
          </span>
        </h1>
        <p className="hero__sub">{hero.sub}</p>
        <div className="hero__ctas">
          <a href="#work" className="btn btn--primary">
            See our work <ArrowRight />
          </a>
          <a href="#contact" className="btn">Start a project</a>
        </div>
      </div>
      <div className="hero__art">
        <div className="hero__frame">
          <Image src="/logo.svg" alt={`${site.name} hand-drawn logo`} width={840} height={810} priority unoptimized />
        </div>
        <p className="scribble hero__note">{hero.logoNote}</p>
        <CurvyArrow className="hero__arrow" />
        <Sparkle className="hero__sparkle" />
      </div>
    </section>
  );
}

export function Marquee() {
  // Two copies of the list so the loop has no gap.
  const items = [...marquee, ...marquee];
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee">
        <div className="marquee__track">
          {[0, 1].map((copy) => (
            <div key={copy}>
              {items.map((item, i) => (
                <span key={i}>{item} &nbsp;✶</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="container about">
      <div className="about__intro">
        <div className="section-head">
          <p className="scribble">{about.kicker}</p>
          <h2 className="section-title">{about.title}</h2>
        </div>
        <p className="about__body">{about.body}</p>
      </div>
      <div className="services">
        {about.services.map((s) => (
          <div key={s.title} className="card service">
            <ServiceIcon name={s.icon} />
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="container work">
      <div className="work__head">
        <div className="section-head">
          <p className="scribble">{work.kicker}</p>
          <h2 className="section-title">{work.title}</h2>
        </div>
        <a href="#contact" className="text-link">{work.cta}</a>
      </div>
      <div className="projects">
        {work.projects.map((p, i) => (
          <article key={i} className="card project">
            <div className="project__image">
              {p.image ? (
                <Image src={p.image} alt={`${p.name} screenshot`} width={800} height={480} />
              ) : (
                <span className="scribble project__placeholder">screenshot goes here</span>
              )}
            </div>
            <div className="project__body">
              <span className="tag">{p.tag}</span>
              <h3>{p.name}</h3>
              <p>{p.blurb}</p>
              <a href={p.href} className="text-link">View project</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section id="team" className="container team">
      <div className="section-head">
        <p className="scribble">{team.kicker}</p>
        <h2 className="section-title">{team.title}</h2>
      </div>
      <div className="members">
        {team.members.map((m, i) => (
          <div key={i} className="member">
            <div className="avatar">
              {m.photo ? (
                <Image src={m.photo} alt={m.name} width={132} height={132} />
              ) : (
                <span className="avatar__blank" aria-hidden="true">?</span>
              )}
            </div>
            <h3>{m.name}</h3>
            <p>{m.role}</p>
            <p className="scribble">fav food: {m.food}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="container contact">
      <div className="contact__box">
        <div className="contact__info">
          <p className="scribble contact__kicker">{contact.kicker}</p>
          <h2 className="section-title">
            {contact.titleLine1}
            <br />
            {contact.titleLine2}
          </h2>
          <p className="contact__body">{contact.body}</p>
          <div className="contact__links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <div className="socials">
              {site.socials.map((s) => (
                <a key={s.label} href={s.href}>{s.label}</a>
              ))}
            </div>
          </div>
        </div>
        <ContactForm email={site.email} />
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__brand">
          <Image src="/logo.svg" alt="" width={52} height={50} unoptimized />
          <span>© {new Date().getFullYear()} {site.name}</span>
        </div>
        <span className="scribble">made by hand in {site.city}</span>
      </div>
    </footer>
  );
}
