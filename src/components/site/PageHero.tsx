import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

/** Compact hero band for inner pages. */
export function PageHero({ eyebrow, title, description }: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden pb-14 pt-36">
      <div
        className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-primary/10 via-transparent to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
