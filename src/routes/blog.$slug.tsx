import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { stories, getStory } from "@/data/stories";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const story = getStory(params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.story.t} — Mangrove Village` },
      { name: "description", content: loaderData.story.e },
      { property: "og:title", content: loaderData.story.t },
      { property: "og:description", content: loaderData.story.e },
      { property: "og:image", content: loaderData.story.img },
    ] : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-5xl text-forest">Story not found</h1>
        <Link to="/blog" className="mt-6 inline-block text-sunset">← All stories</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => <div className="p-12 text-center">{error.message}</div>,
  component: StoryPage,
});

function StoryPage() {
  const { story } = Route.useLoaderData();
  const idx = stories.findIndex((s) => s.slug === story.slug);
  const next = stories[(idx + 1) % stories.length];
  const related = stories.filter((s) => s.slug !== story.slug).slice(0, 3);

  return (
    <>
      <section className="relative h-[75vh] min-h-[500px] overflow-hidden">
        <img src={story.img} alt={story.t} className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.025_150/0.5)] via-transparent to-[oklch(0.14_0.025_150/0.95)]" />
        <div className="container mx-auto px-6 absolute inset-0 flex flex-col justify-end pb-16 text-beige max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-beige/70 hover:text-sunset mb-6">
            <ArrowLeft className="w-4 h-4" /> All stories
          </Link>
          <div className="text-xs uppercase tracking-[0.3em] text-sunset mb-4">{story.cat}</div>
          <h1 className="font-display text-4xl md:text-6xl leading-tight">{story.t}</h1>
          <div className="mt-6 flex flex-wrap gap-5 text-sm text-beige/80">
            <span className="inline-flex items-center gap-2"><User className="w-4 h-4" />{story.author}</span>
            <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4" />{story.date}</span>
            <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" />{story.d}</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beige">
        <article className="container mx-auto px-6 max-w-3xl">
          <Reveal>
            <p className="font-display text-2xl md:text-3xl text-forest leading-snug italic mb-12">{story.e}</p>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              {story.body.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>

          <div className="mt-16 pt-10 border-t border-border flex flex-wrap items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-sunset">Written by</div>
              <div className="font-display text-xl text-forest">{story.author}</div>
            </div>
            <Link to="/blog/$slug" params={{ slug: next.slug }} className="inline-flex items-center gap-2 bg-sunset text-accent-foreground px-6 py-3 rounded-full text-sm font-medium hover:scale-[1.03] transition-all">
              Next story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      </section>

      <section className="py-20 bg-[oklch(0.94_0.018_80)]">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl text-forest mb-10">More from the river</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((s) => (
              <Link key={s.slug} to="/blog/$slug" params={{ slug: s.slug }} className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4">
                  <img src={s.img} alt={s.t} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="text-xs uppercase tracking-widest text-sunset mb-2">{s.cat}</div>
                <h3 className="font-display text-xl text-forest group-hover:text-sunset transition-colors">{s.t}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
