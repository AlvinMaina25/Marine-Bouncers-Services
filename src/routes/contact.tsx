import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, MapPin, Phone, ShieldCheck, UserCheck } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, quoteMessage, whatsappUrl } from "@/config/contact";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Hire Bouncers or Bodyguards in Thika & Nairobi | Get a Security Quote — Marine Bouncers",
      },
      {
        name: "description",
        content:
          "Request a quote to hire bouncers, event security or bodyguards in Thika, Kiambu and Nairobi. Call or WhatsApp Marine Bouncers Services on +254 797 303195.",
      },
      { property: "og:title", content: "Contact Marine Bouncers Services" },
      {
        property: "og:description",
        content: "Request a quote for venue security, event cover or VIP protection in Thika, Kenya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const inputClasses =
  "block w-full min-w-0 max-w-full rounded-lg border border-input bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/30";

const details = [
  {
    icon: MapPin,
    title: "Location",
    lines: ["Thika, Kiambu County", "Kenya"],
  },
  {
    icon: UserCheck,
    title: "Direction",
    lines: ["Led by Director Lennox Otieno", "Every enquiry is handled personally"],
  },
  {
    icon: ShieldCheck,
    title: "Cover",
    lines: ["Venue security", "Events · VIP protection"],
  },
] as const;

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState("");

  const serviceLabels: Record<string, string> = {
    "venue-security": "Venue Security",
    "event-management": "Event Management",
    "vip-protection": "VIP & Close Protection",
    other: "Other / Not sure yet",
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const url = whatsappUrl(
      quoteMessage({
        name: get("name"),
        phone: get("phone"),
        service: serviceLabels[get("service")] ?? get("service"),
        date: get("date") || undefined,
        message: get("message"),
      })
    );
    setWaLink(url);
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's secure it together"
        description="Tell us about your venue, event or protection needs. We'll come back to you with the right cover and a clear quote."
      />

      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-14">
            {/* Details */}
            <Reveal>
              <div className="space-y-4">
                <div className="glass rounded-2xl p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                    <Phone className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 font-display text-lg font-semibold">Call or WhatsApp</h2>
                  <a href={PHONE_TEL} className="mt-1 block text-sm font-semibold text-primary hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
                {details.map((item) => (
                  <div key={item.title} className="glass rounded-2xl p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h2 className="mt-4 font-display text-lg font-semibold">{item.title}</h2>
                    {item.lines.map((line) => (
                      <p key={line} className="mt-1 text-sm text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={140}>
              <div className="glass-strong rounded-3xl p-5 sm:p-10">
                {submitted ? (
                  <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/40">
                      <CheckCircle2 className="h-8 w-8" />
                    </span>
                    <h2 className="mt-6 font-display text-2xl font-bold">Almost done — send it on WhatsApp</h2>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      We've opened WhatsApp with your request ready to go. Just press send and our
                      team will reply shortly. If nothing opened, use the button below.
                    </p>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                    >
                      Open WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-7 rounded-lg border border-input px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 className="font-display text-2xl font-bold">Request a quote</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Fill in the details below — your request opens in WhatsApp so you can send it
                      straight to our team.
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 [&>div]:min-w-0">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Full name
                        </label>
                        <input id="name" name="name" required placeholder="Your name" className={inputClasses} />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Phone number
                        </label>
                        <input id="phone" name="phone" type="tel" required placeholder="+254 ..." className={inputClasses} />
                      </div>
                      <div>
                        <label htmlFor="service" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Service needed
                        </label>
                        <select id="service" name="service" required defaultValue="" className={inputClasses}>
                          <option value="" disabled>
                            Select a service
                          </option>
                          <option value="venue-security">Venue Security</option>
                          <option value="event-management">Event Management</option>
                          <option value="vip-protection">VIP & Close Protection</option>
                          <option value="other">Other / Not sure yet</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="date" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Event date <span className="normal-case">(optional)</span>
                        </label>
                        <input id="date" name="date" type="date" className={inputClasses} />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Tell us about it
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Venue or event type, location, expected crowd size, hours of cover..."
                          className={`${inputClasses} resize-none`}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-8 w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow-cyan transition-transform hover:scale-[1.01] sm:w-auto sm:px-10"
                    >
                      Send via WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
