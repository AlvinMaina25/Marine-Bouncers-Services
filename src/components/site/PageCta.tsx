import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

/** Shared closing call-to-action band used across pages. */
export function PageCta({ title, description }: { title: string; description: string }) {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card to-card p-8 text-center sm:p-14">
            <div
              className="animate-pulse-glow absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
              aria-hidden
            />
            <h2 className="relative font-display text-3xl font-bold sm:text-4xl">{title}</h2>
            <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">{description}</p>
            <Link
              to="/contact"
              className="relative mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow-cyan transition-transform hover:scale-[1.03]"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
