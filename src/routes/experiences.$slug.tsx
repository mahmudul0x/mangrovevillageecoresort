import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { experiences, getExperience } from "@/data/experiences";
import { Clock, Users, TrendingUp, Tag, Check, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/experiences/$slug")({
  loader: ({ params }) => {
    const exp = getExperience(params.slug);
    if (!exp) throw notFound();
    return { exp };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.exp.t} — Mangrove Village` },
      { name: "description", content: loaderData.exp.d },
      { property: "og:title", content: loaderData.exp.t },
      { property: "og:description", content: loaderData.exp.d },
      { property: "og:image", content: loaderData.exp.img },
    ] : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-5xl text-forest">Experience not found</h1>
        <Link to="/experiences" className="mt-6 inline-block text-sunset">← All experiences</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => <div className="p-12 text-center">{error.message}</div>,
  component: ExperienceDetail,
});

function ExperienceDetail() {
  const { exp } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const idx = experiences.findIndex((e) => e.slug === exp.slug);
  const next = experiences[(idx + 1) % experiences.length];

  return (
    <>
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img src={exp.gallery[active]} alt={exp.t} className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.025_150/0.4)] via-transparent to-[oklch(0.14_0.025_150/0.85)]" />
        <div className="container mx-auto px-6 absolute inset-0 flex flex-col justify-end pb-16 text-beige">
          <Link to="/experiences" className="inline-flex items-center gap-2 text-sm text-beige/70 hover:text-sunset mb-6">
            <ArrowLeft className="w-4 h-4" /> All experiences
          </Link>
          <div className="text-xs uppercase tracking-[0.3em] text-sunset mb-3">{exp.duration} · {exp.difficulty}</div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-tight max-w-3xl">{exp.t}</h1>
        </div>
      </section>

      <section className="py-10 bg-beige">
        <div className="container mx-auto px-6 grid grid-cols-3 gap-3">
          {exp.gallery.map((g: string, i: number) => (
            <button key={i} onClick={() => setActive(i)}
              className={`aspect-[4/3] overflow-hidden rounded-xl ring-2 transition-all ${active === i ? "ring-sunset" : "ring-transparent opacity-70 hover:opacity-100"}`}>
              <img src={g} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </section>

      <section className="py-20 bg-beige">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <Reveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Stat Icon={Clock} v={exp.duration} l="Duration" />
                <Stat Icon={Users} v={exp.group} l="Group size" />
                <Stat Icon={TrendingUp} v={exp.difficulty} l="Difficulty" />
                <Stat Icon={Tag} v={exp.price} l="Price" />
              </div>
            </Reveal>
            <Reveal>
              <h2 className="font-display text-3xl text-forest mb-5">The story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {exp.long.map((p: string, i: number) => <p key={i}>{p}</p>)}
              </div>
            </Reveal>
            <Reveal>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-2xl text-forest mb-4">What's included</h3>
                  <ul className="space-y-2">
                    {exp.includes.map((i: string) => <li key={i} className="flex gap-2 text-sm text-muted-foreground"><Check className="w-4 h-4 text-sunset mt-0.5 shrink-0" />{i}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-forest mb-4">What to bring</h3>
                  <ul className="space-y-2">
                    {exp.bring.map((i: string) => <li key={i} className="flex gap-2 text-sm text-muted-foreground"><Check className="w-4 h-4 text-sunset mt-0.5 shrink-0" />{i}</li>)}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <aside className="lg:sticky lg:top-32 bg-[oklch(0.18_0.025_150)] text-beige rounded-2xl p-8 space-y-5">
              <div>
                <div className="text-xs uppercase tracking-widest text-sunset">Price</div>
                <div className="font-display text-3xl">{exp.price}</div>
              </div>
              <Link to="/booking" className="block w-full text-center bg-sunset text-accent-foreground font-medium py-3.5 rounded-full hover:scale-[1.02] transition-all">
                Book this experience
              </Link>
              <Link to="/contact" className="block w-full text-center border border-beige/20 py-3 rounded-full text-sm hover:bg-beige/5">
                Ask a question
              </Link>
              <div className="pt-4 border-t border-beige/10 text-sm text-beige/70 space-y-2">
                <div>· Free reschedule up to 24 hrs</div>
                <div>· Local naturalist guide</div>
                <div>· Small groups, slow pace</div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-[oklch(0.94_0.018_80)]">
        <div className="container mx-auto px-6">
          <Link to="/experiences/$slug" params={{ slug: next.slug }} className="group flex items-center justify-between gap-6 p-6 rounded-2xl bg-card border border-border hover:shadow-soft transition-all">
            <div>
              <div className="text-xs uppercase tracking-widest text-sunset mb-1">Next experience</div>
              <div className="font-display text-2xl text-forest group-hover:text-sunset transition-colors">{next.t}</div>
            </div>
            <ArrowRight className="w-6 h-6 text-sunset shrink-0" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Stat({ Icon, v, l }: { Icon: any; v: string; l: string }) {
  return (
    <div className="p-4 rounded-xl bg-card border border-border">
      <Icon className="w-5 h-5 text-sunset mb-2" />
      <div className="text-sm text-forest font-medium">{v}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wide">{l}</div>
    </div>
  );
}
