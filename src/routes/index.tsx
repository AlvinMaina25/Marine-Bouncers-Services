import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Eye,
  MapPin,
  Phone,
  Radar,
  ShieldCheck,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";
import { DoorSecurityIcon, EventSecurityIcon, VipProtectionIcon } from "@/components/site/ServiceIcons";
import heroImage from "@/assets/hero-security.jpg";
import venueImage from "@/assets/service-venue.jpg";
import eventImage from "@/assets/service-event.jpg";
import vipImage from "@/assets/service-vip.jpg";
import { Reveal } from "@/components/site/Reveal";
import { PageCta } from "@/components/site/PageCta";
import { PHONE_TEL } from "@/config/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Bouncers for Hire in Thika | Event Security Kiambu | Bodyguards Nairobi — Marine Bouncers",
      },
      {
        name: "description",
        content:
          "Hire bouncers in Thika, event security in Kiambu and bodyguards in Nairobi. Crowd control for clubs and lounges, gate control for concerts and rallies, and VIP close protection. Call +254 797 303195.",
      },
      { property: "og:title", content: "Bouncers for Hire in Thika — Marine Bouncers Services" },
      {
        property: "og:description",
        content:
          "Crowd control, event security and VIP protection by highly disciplined security personnel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    to: "/services",
    image: venueImage,
    icon: DoorSecurityIcon,
    title: "Venue Security",
    description:
      "Crowd management and bouncer staffing for nightclubs, lounges and entertainment spots — keeping your door calm and your floor safe.",
  },
  {
    to: "/services",
    image: eventImage,
    icon: EventSecurityIcon,
    title: "Event Management",
    description:
      "Tailored ticketing gate control, frisking and safety protocols for concerts, political rallies and private parties.",
  },
  {
    to: "/services",
    image: vipImage,
    icon: VipProtectionIcon,
    title: "VIP & Close Protection",
    description:
      "Specialised, highly disciplined bodyguards for private clients and executive transit — discreet by design.",
  },
] as const;

const strengths = [
  {
    icon: ShieldCheck,
    title: "Discipline First",
    description:
      "Every officer is trained to stay composed under pressure and act with restraint, from the door to the floor.",
  },
  {
    icon: Eye,
    title: "Constant Vigilance",
    description:
      "Trained eyes read a crowd before it becomes a problem — early detection beats late reaction.",
  },
  {
    icon: Users,
    title: "Crowd Expertise",
    description:
      "From packed nightclub floors to festival gates, we manage movement and defuse tension in real time.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Conduct",
    description:
      "Smart presentation, courteous firmness and respect for your guests — security that protects your reputation too.",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description:
      "Clear chains of command and radio coordination mean incidents are handled fast and quietly.",
  },
  {
    icon: Radar,
    title: "Local Knowledge",
    description:
      "Based in Thika, we understand the venues, the crowds and the rhythms of the local entertainment scene.",
  },
] as const;

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <img
            src={heroImage}
            alt=""
            width={1536}
            height={864}
            className="animate-drift h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal>
            <span className="glass inline-flex max-w-full items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary sm:text-xs sm:tracking-widest">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              Thika · Kiambu County · Kenya
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 max-w-3xl break-words font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Security you can <span className="text-shine">trust</span>, order you can{" "}
              <span className="text-shine">see</span>.
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Marine Bouncers Services provides highly disciplined security personnel for
              entertainment venues, corporate functions and private clients — from crowd control at
              the door to close protection at your side.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-cyan transition-transform hover:scale-[1.03]"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="glass inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                Explore Our Services
              </Link>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 rounded-lg border border-gold/50 bg-gold/10 px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold/20"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </Reveal>

          <Reveal delay={480}>
            <div className="mt-14 flex flex-wrap gap-3">
              {["Bouncers for Hire", "Event Security", "Bodyguards & VIP Protection", "Door Supervision"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="glass rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services overview */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              What we do
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              Security built for every scenario
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 140} as="div">
                <Link
                  to={service.to}
                  className="group glass block h-full overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent"
                      aria-hidden
                    />
                  </div>
                  <div className="p-6">
                    <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                      <service.icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Marine Bouncers */}
      <section className="relative py-24">
        <div className="hairline-gold absolute inset-x-0 top-0" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Why Marine Bouncers
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              Highly disciplined. Highly visible.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Our personnel are selected and trained to project calm authority — the presence that
              prevents incidents, not just the response that follows them.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 120} as="div">
                <div className="glass h-full rounded-2xl p-6 transition-colors hover:border-primary/40">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Director strip */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-12">
              <div
                className="animate-pulse-glow absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
                aria-hidden
              />
              <UserCheck className="h-8 w-8 text-gold" />
              <p className="mt-5 max-w-3xl font-display text-xl font-medium leading-relaxed sm:text-2xl">
                Marine Bouncers Services is led by Director{" "}
                <span className="text-gold">Lennox Otieno</span> and built on one principle:
                discipline first. It is what our clients hire — and what their guests feel at the
                door.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                About our team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <PageCta
        title="Planning an event, or need door staff you can rely on?"
        description="Tell us about your venue or event and we'll put the right team on the ground."
      />
    </>
  );
}
