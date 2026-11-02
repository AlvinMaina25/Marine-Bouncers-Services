import { createFileRoute } from "@tanstack/react-router";
import { Building2, Eye, Handshake, Medal, Music2, ShieldCheck, UserRound } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { PageCta } from "@/components/site/PageCta";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Marine Bouncers Services | Security Company in Thika — Director Lennox Otieno",
      },
      {
        name: "description",
        content:
          "Marine Bouncers Services is a professional security agency in Thika, Kenya, led by Director Lennox Otieno — serving entertainment venues, corporate functions and private clients.",
      },
      { property: "og:title", content: "About Marine Bouncers Services" },
      {
        property: "og:description",
        content:
          "A Thika-based security agency built on discipline — led by Director Lennox Otieno.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Medal,
    title: "Discipline",
    description:
      "Composure, punctuality and strict adherence to brief — the standard every officer is held to.",
  },
  {
    icon: Eye,
    title: "Vigilance",
    description: "We watch, we read, we anticipate. Prevention is the whole job.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "No shortcuts, no compromises. Our clients trust us with their people and their reputation.",
  },
  {
    icon: ShieldCheck,
    title: "Professionalism",
    description:
      "Smart presentation and courteous firmness — security that reflects well on your brand.",
  },
] as const;

const clients = [
  {
    icon: Music2,
    title: "Entertainment Venues",
    description:
      "Nightclubs, lounges and entertainment spots that need a dependable door and floor presence night after night.",
  },
  {
    icon: Building2,
    title: "Corporate Functions",
    description:
      "Conferences, launches and corporate gatherings where protocol and presentation matter.",
  },
  {
    icon: UserRound,
    title: "Private Clients",
    description:
      "Individuals and families who want discreet, disciplined close protection and event cover.",
  },
] as const;

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A Thika security agency built on discipline"
        description="Marine Bouncers Services provides professional crowd control, event security and VIP protection — led by people who believe security is a craft, not a crowd of uniforms."
      />

      {/* Story */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 [&>*]:min-w-0">
            <Reveal>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Our story</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Marine Bouncers Services was founded in Thika, Kiambu County, to raise the
                  standard of private security in the local entertainment and events scene — a
                  market where bouncers were often untrained, unmanaged and unpredictable.
                </p>
                <p>
                  We took the opposite approach: carefully selected personnel, clear chains of
                  command, ongoing training in crowd psychology and de-escalation, and a director
                  who takes personal responsibility for how every assignment is delivered.
                </p>
                <p>
                  Today the agency serves nightclubs and lounges, concerts and rallies, corporate
                  functions and private clients — with the same discipline at a private residence
                  as at a festival gate.
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-10">
                <div
                  className="animate-pulse-glow absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/15 blur-3xl"
                  aria-hidden
                />
                <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                  Leadership
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold">Director Lennox Otieno</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Director Lennox Otieno leads Marine Bouncers Services with a simple operating
                  creed: highly disciplined personnel, clear protocols and total accountability.
                  Under his direction, every deployment is planned, briefed and supervised — and
                  every client knows exactly who is responsible.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-secondary/60 p-4">
                    <p className="font-display font-semibold text-primary">Thika-based</p>
                    <p className="mt-1 text-muted-foreground">Local knowledge, local response</p>
                  </div>
                  <div className="rounded-xl bg-secondary/60 p-4">
                    <p className="font-display font-semibold text-primary">Hands-on</p>
                    <p className="mt-1 text-muted-foreground">Director-led supervision</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Our values</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              What every officer stands for
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 110} as="div">
                <div className="glass h-full rounded-2xl p-6 transition-colors hover:border-gold/40">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/30">
                    <value.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="relative border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Who we serve
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Trusted across the scene
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {clients.map((client, i) => (
              <Reveal key={client.title} delay={i * 130} as="div">
                <div className="glass h-full rounded-2xl p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                    <client.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold">{client.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {client.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Work with a team that takes security seriously"
        description="Tell us about your venue, event or protection needs and we'll respond with a plan."
      />
    </>
  );
}
