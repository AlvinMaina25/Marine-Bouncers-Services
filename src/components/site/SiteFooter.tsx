import logoMark from "@/assets/icons/logo-mark.svg";
import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/config/contact";

const serviceLinks = [
  { to: "/services", label: "Venue Security" },
  { to: "/services", label: "Event Management" },
  { to: "/services", label: "VIP & Close Protection" },
] as const;

const siteLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="hairline-gold absolute inset-x-0 top-0" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 [&>*]:min-w-0">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logoMark} alt="" width={36} height={36} className="h-9 w-9 rounded-lg" />
              <span className="font-display text-base font-bold uppercase tracking-widest">
                Marine<span className="text-primary"> Bouncers</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A professional security agency providing crowd control, event security and VIP
              protection across Thika and the wider Kenyan market.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {siteLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Thika, Kiambu County, Kenya
            </p>
            <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={PHONE_TEL} className="transition-colors hover:text-primary">
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Marine Bouncers Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
