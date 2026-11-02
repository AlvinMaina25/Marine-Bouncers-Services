import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import venueImage from "@/assets/service-venue.jpg";
import eventImage from "@/assets/service-event.jpg";
import vipImage from "@/assets/service-vip.jpg";
import { DoorSecurityIcon, EventSecurityIcon, VipProtectionIcon } from "@/components/site/ServiceIcons";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { PageCta } from "@/components/site/PageCta";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Bouncer Hire, Event Security & Bodyguard Services — Thika, Kiambu & Nairobi",
      },
      {
        name: "description",
        content:
          "Bouncers for hire in Thika, event security in Kiambu, and bodyguards for Nairobi clients — venue security, event gate control and frisking, and VIP close protection from Marine Bouncers Services.",
      },
      {
        property: "og:title",
        content: "Security Services — Marine Bouncers Services",
      },
      {
        property: "og:description",
        content:
          "Venue security, event management and VIP & close protection for Thika and beyond.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const serviceSections = [
  {
    id: "venue-security",
    number: "01",
    icon: DoorSecurityIcon,
    image: venueImage,
    title: "Venue Security",
    intro:
      "Your door sets the tone for the whole night. Our officers keep it orderly, welcoming and safe.",
    points: [
      "Door supervision and guest screening for nightclubs and lounges",
      "Crowd management on the floor — calm, visible, in control",
      "Trained bouncer staffing scaled to your venue and peak nights",
      "Conflict de-escalation that resolves incidents quietly",
    ],
  },
  {
    id: "event-management",
    number: "02",
    icon: EventSecurityIcon,
    image: eventImage,
    title: "Event Management",
    intro:
      "From concerts to political rallies and private parties, we plan the security so your event runs smoothly.",
    points: [
      "Ticketing gate control with fast, orderly entry",
      "Frisking and search protocols at every access point",
      "Safety protocols and emergency preparedness for large crowds",
      "Perimeter and back-stage access management",
    ],
  },
  {
    id: "vip-protection",
    number: "03",
    icon: VipProtectionIcon,
    image: vipImage,
    title: "VIP & Close Protection",
    intro:
      "Specialised, highly disciplined protection for private clients — discreet, professional, always alert.",
    points: [
      "Dedicated bodyguards for private clients and executives",
      "Executive transit and movement security",
      "Advance venue and route checks before arrival",
      "Low-profile conduct that respects your privacy",
    ],
  },
] as const;

const process = [
  {
    step: "1",
    title: "Consultation",
    description: "We discuss your venue, event or client needs and the level of cover required.",
  },
  {
    step: "2",
    title: "Site Assessment",
    description: "We walk the ground, map entry points and plan positioning and protocols.",
  },
  {
    step: "3",
    title: "Deployment",
    description: "A hand-picked, briefed team arrives on site, on time, in uniform or plain suit.",
  },
  {
    step: "4",
    title: "Oversight",
    description: "A team lead coordinates by radio and reports back after every assignment.",
  },
] as const;

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Core services"
        title="Three ways we keep people safe"
        description="Every assignment gets a tailored plan — whether it's a standing door team, a one-night event, or a principal who needs close protection."
      />

      {serviceSections.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={cn("relative scroll-mt-24 py-16", i > 0 && "border-t border-border")}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={cn(
                "grid items-center gap-10 lg:grid-cols-2 lg:gap-16 [&>*]:min-w-0",
                i % 2 === 1 && "lg:[&>*:first-child]:order-2"
              )}
            >
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl border border-border">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <span className="glass-strong absolute left-4 top-4 rounded-lg px-3 py-1.5 font-display text-sm font-bold tracking-widest text-gold">
                    {service.number}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                  <service.icon className="h-6 w-6" />
                </span>
                <h2 className="font-display text-3xl font-bold sm:text-4xl">{service.title}</h2>
                <p className="mt-4 text-muted-foreground">{service.intro}</p>
                <ul className="mt-7 space-y-3.5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* How we engage */}
      <section className="relative border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              How we engage
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              From first call to final report
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 120} as="div">
                <div className="glass relative h-full rounded-2xl p-6">
                  <span className="font-display text-4xl font-bold text-primary/25">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Not sure what level of cover you need?"
        description="Tell us about your venue or event — we'll recommend the right team and numbers."
      />
    </>
  );
}
