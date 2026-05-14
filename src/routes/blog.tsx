import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import villageImg from "@/assets/village-life.jpg";
import { ArrowRight } from "lucide-react";
import { stories } from "@/data/stories";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Stories — Mangrove Village" },
      { name: "description", content: "Travel stories from the Sundarbans, eco-tourism guides, and notes from village life." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Travel Stories"
        title="Notes from the river."
        subtitle="Slow journalism, eco guides, recipes and dispatches from the village."
        image={villageImg}
      />
      <section className="py-24 bg-beige">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                <article>
                  <div className="aspect-[4/3] overflow-hidden rounded-xl mb-5">
                    <img src={p.img} alt={p.t} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-sunset mb-3">
                    <span>{p.cat}</span><span className="text-muted-foreground">{p.d}</span>
                  </div>
                  <h3 className="font-display text-2xl text-forest leading-snug group-hover:text-sunset transition-colors">{p.t}</h3>
                  <p className="mt-3 text-muted-foreground text-sm">{p.e}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-forest text-sm group-hover:gap-2 transition-all">
                    Read story <ArrowRight className="w-4 h-4" />
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
